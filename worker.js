onmessage = function(message){
	var data = message.data;
	data.msg = "hi from worker.js";
	postMessage(data);
}