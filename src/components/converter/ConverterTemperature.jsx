import { Result } from '../result/Result';
import './converterTemperature.css';
import { useState, useEffect } from 'react';
import { farenheit, celsius } from '../../utils';

export const ConverterTemperature = () => {
	const [dataToConvert, setDataToConvert] = useState({});
	const [dataConverted, setDataConverted] = useState({});

	const temperatures = ['Fahrenheit', 'Celsius'];

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (!e.target.degrees.value) {
			setDataToConvert({});
			return;
		}
		setDataToConvert({
			temperature: +e.target.degrees.value,
			format: e.target.type.value,
		});
	};

	useEffect(() => {
		if (!dataToConvert.hasOwnProperty('temperature')) return;
		if (dataToConvert.format === 'Fahrenheit')
			setDataConverted(farenheit.toCelsius(dataToConvert.temperature));
		if (dataToConvert.format === 'Celsius')
			setDataConverted(celsius.toFarenheit(dataToConvert.temperature));
	}, [dataToConvert]);

	return (
		<main className='converter'>
			<form className='form' onSubmit={handlerSubmit}>
				<div className='container-degrees'>
					<label className='form__degrees-label' htmlFor='degrees'>
						Degrees
					</label>
					<input className='form__degrees' type='number' id='degrees' name='degrees' />
				</div>
				<div className='container-types'>
					<label className='form__types-label' htmlFor='type'>
						Type
					</label>
					<select className='form__types' name='type' id='type'>
						{temperatures.map((temperature) => {
							return (
								<option key={temperature} value={temperature}>
									{temperature}
								</option>
							);
						})}
					</select>
				</div>
				<button className='form__button'>Convert</button>
			</form>
			{dataToConvert.hasOwnProperty('temperature') && <Result {...dataConverted} />}
		</main>
	);
};
