var win 			= Ti.UI.currentWindow;

//-- Create the sub windows
var crusts 			= Ti.UI.createWindow();
var toppings 		= Ti.UI.createWindow();
var details			= Ti.UI.createWindow();

//-- We set the background here since this wont change
win.backgroundImage = '../images/bg_main.png';

//-- Include our clock
Ti.include('../includes/clock.js');

//-- The method will close the toppings window and open the crusts window
function openCrust(e)
{
	crusts.url = 'crusts.js';
	crusts.open();
}
openCrust({});