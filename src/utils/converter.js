export const celsius = {
	toFarenheit: (temp) => {
		const temperature = (temp * (9 / 5) + 32).toFixed(2);
		return {
			temperature,
			format: 'ºF',
		};
	},

	toKelvin: (temp) => {
		const temperature = temp + 273.15;
		return {
			temperature,
			format: 'ºK',
		};
	},
};

export const farenheit = {
	toCelsius: (temp) => {
		const temperature = ((temp - 32) * (5 / 9)).toFixed(2);
		return {
			temperature,
			format: 'ºC',
		};
	},

	toKelvin: (temp) => {
		const temperature = (temp + 459.67) * (5 / 9).toFixed(2);
		return {
			temperature,
			format: 'ºK',
		};
	},
};

export const kelvin = {
	toCelsius: (temp) => {
		const temperature = temp - 273.15;
		return {
			temperature,
			format: 'ºC',
		};
	},

	toFarenheit: (temp) => {
		const temperature = (temp * (9 / 5) - 459.67).toFixed(2);
		return {
			temperature,
			format: 'ºF',
		};
	},
};
