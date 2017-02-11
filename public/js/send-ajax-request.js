/***
Generic function to make an ajax request.
Vanilla javascript was used instead of jQuery for educational purposes. */ 

function sendAjaxRequest(type, method, query, url, async, id, count_all, tweets_all) {
	
	//Instantiate a new ajax object
	var request = new XMLHttpRequest();
	
	//List of request states
	var ready_states = {
		0: "Not Initialized",
		1: "Initialized",
		2: "Sent",
		3: "In Process",
		4: "Ready"
	}

	//This code will run any time ready state changes
	request.onreadystatechange = function() { 
		
		//Log request state
		var state = request.readyState;
		var desc  = ready_states[state];
		//console.log('Ready State = ' + state + ' = ' + desc);

		//Wait for response to be ready
		if(state == 4) {
			//Check status
			var status = request.status;
			//console.log('Status = ' + status);

			//Check status before using data
			if(status == 200) {
				//Success
				//console.log("Success!");
				var data = JSON.parse(request.response);
				dataReady(type, query, data, id, count_all, tweets_all);
			}
			else {
				//Error
				console.log("Error! Status = " + status);

			}
		}
	};

	//Open the request
	request.open(method, url, async);

	//Send the request
	request.send();
}