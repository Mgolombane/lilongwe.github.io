import { MY_API_KEY } from './config.js';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67c4bea99bmshb457f6575ef48acp12bf7ejsne634ddd7ed38',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
            
            document.getElementById('quote').innerHTML = response.content;
            document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })

	.catch(err => console.error(err));
