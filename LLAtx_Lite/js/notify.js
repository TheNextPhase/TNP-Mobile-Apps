var gcm = require('node-gcm');
var message = new gcm.Message();

// API Server Key
var sender = new gcm.Sender('AIzaSyDgOok4i5ASX-MVN0gbJp91uC59ZarZe3k');
// AIzaSyDgOok4i5ASX-MVN0gbJp91uC59ZarZe3k
var registrationIDs = [];

// Value the payload data to send
message.addData('message', "The maximum push notification Woof is approaching");
message.addData('title', 'Push Note Sampler Platter');
message.addData('msgcnt', '3'); // Shows up in status bar
message.addData('soundname', 'beep.wav');

message.timeToLive = 3000;

registrationIDs.push('APA91bEEdkD3GQRAerMrT11GTXfz42IUaWCujdzYpCvgESpkHwrYGrch3amktFMEZSCwhXbG9EdVdj03N5zz3SA1k2WXkuflWgBm4hCOAtWmJyOC_NP0jsfhrlEMtnq4HETWfkTiqNB5');

sender.send(message, registrationIDs, 4, function(result) {
	console.log("woof: " + result);
	//alert(result);
});