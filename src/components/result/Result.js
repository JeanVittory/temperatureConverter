import './result.css';

export const Result = ({ temperature, format }) => {
	return (
		<section className='result'>
			<p className='result__title'>Result</p>
			<p className='result__temperature'>
				{temperature} {format}
			</p>
		</section>
	);
};
