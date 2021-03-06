var win 			= Ti.UI.currentWindow;

//-- Create the sub windows
var crusts 			= Ti.UI.createWindow();
var toppings 		= Ti.UI.createWindow();
var details			= Ti.UI.createWindow();

//-- We set the background here since this wont change
win.backgroundImage = '../images/bg_main.png';

//-- Include our clock
Ti.include('../includes/clock.js');

function openToppings (e) {
	crusts.close();
	
	toppings.url 		= 'toppings.js';
	toppings.crust 		= e.crust;
	toppings.path		= e.path;
	toppings.returnToppings = e.toppings;
	
	toppings.open();
}

//-- The method will close the toppings window and open the crusts window
function openCrust(e)
{
	crusts.url = 'crusts.js';
	crusts.open();
}

Ti.App.addEventListener('toppings',openToppings);  
openCrust({});