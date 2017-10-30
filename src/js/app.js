require("!style-loader!css-loader!../css/app.css");
require("!style-loader!css-loader!../css/fonts.css");
require("!style-loader!css-loader!../css/globals.css");


/* Transitions and such */
window.$ = require("jquery");

/* Class Loader */
import Fetcher from './app/Fetcher';
import Person from './app/Person';
import Job from './app/Job';
import Map from './app/Map';
import People from './app/People';



/* Define a person and a job, for testing */
let person = new Person(
	"John Johnson",
	new Job("Brick Layer", 26000)
);

let token = "pk.eyJ1Ijoic2NvdHRiZXJ3aWNrbG9uZG9udG93biIsImEiOiJjMVFnelBzIn0.jDehcQpMLsuwgNQP2Hafgg";

/* Cycle up the event */
document.addEventListener("DOMContentLoaded",function(){

	let fetchWrapper = new Fetcher();
	let people = new People();
	fetchWrapper.get(
		"example.json",
		function(p) {
			people.people(p);
		}
	);



	let map = new Map(token);
	let mapInstance = map.defineMapInstance(
		"w-map-instance",
		"mapbox://styles/scottberwicklondontown/cj95tj1sv1jtw2rliwiggiddw",
		-0.367165,
		51.421128,
		10
	);

});
