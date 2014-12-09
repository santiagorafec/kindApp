/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 function lineAdaptedText(text, limit){
	wordArray = text.split(" ");
	var string = "";
	var x = [];
	var n = 0;
	var q = 0;
	for(t = 0; t<wordArray.length; t++){
		n++;
		n += wordArray[t].length;
		if(n>limit){n = 0; x[q] = t; q++;}
		}
			for(r = 0; r<x.length; r++){
				for(y = 0; y<wordArray.length; y++){
			if(/* its in the x -> add a "<br>" and save the new value*/ x[r] == y){ wordArray[y] = "<br>"+ wordArray[y] ;}
			else /*add a space*/{wordArray[y] = wordArray[y] + " ";}
				}
			}
			for(r = 0; r<wordArray.length; r++){
				string += wordArray[r];
			}
		return string;	
	}
	
	function getContrast(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
}


function userIsIn(){
		$("#mainApp").css("display","block");
		$("#loginSection").css("display","none");
		
		var name = "Benito";
		var smiles = 59;
		var level = 4;
		var themes = [
		["6E22FF","1E34E8","2EA1FF","FFFFFF","00FF87","7C41FF"],
		["FFCA1C","E89419","FF7326","E83019","FF0076","FF6E71"],
		["10FF17","66E80F","D9FF1D","E8D80F","FFE065","E8660F"],
		["1270D9","55C210","D9761D","A410FF","5AD9C4","2A665C"]
		];
		chosenTheme = level-1;
		
		$("#a").css("background", "#" + themes[chosenTheme][0]);
			$("#a").css("color", getContrast(themes[chosenTheme][0]));
		
		$("#b").css("background", "#" + themes[chosenTheme][1]);
			$("#b").css("color",getContrast(themes[chosenTheme][1]));

		$("#c").css("background", "#" + themes[chosenTheme][2]);
				$("#c").css("color", getContrast(themes[chosenTheme][2]));

		$("#d").css("background", "#" + themes[chosenTheme][3]);
			$("#d").css("color", getContrast(themes[chosenTheme][3]));
			alert(getContrast(themes[chosenTheme][3]));

		$("#bar").css("background", "#" + themes[0][5]);
		
		var onlineActivity = [1, "I would like someone to tell me a joke", "Alexis"," is a very good  and awsome person", 20];
		var offlineActivities = [
		["Gift your smile", "Your smile can outpour happiness all over the world.", 37],
		["Share an anecdote.", "Stories are essencial to move people´s feelings.", 43],
		["Make someone laugh.", "Laughter rejoices the world with happiness.", 40]
		];
		
		var quote = "for a cool ";
		var normalString = quote + name;
		var htmlString = quote +"<b>"+name+"</b>";
		
		var ActivityTitle = offlineActivities[1][0];
			titleOffline = lineAdaptedText(ActivityTitle, 13);


		var ActivityDescription = offlineActivities[1][1];
			description = lineAdaptedText(ActivityDescription, 24);
			
		var ActivitySmilesOffline = offlineActivities[1][2];

/***
LIMITS
	Name: 10
	Title: 25
	
***/
		$("#offActivity").html(titleOffline);
		$("#offNumber").html(ActivitySmilesOffline);
		
		if(onlineActivity[0] == 1) ActivityTitle = "Make " + onlineActivity[2] + " laugh!";
		
				titleOnline = lineAdaptedText(ActivityTitle, 13);
				
		var ActivityPetition = onlineActivity[1];
				petition = lineAdaptedText(ActivityPetition, 24);
		
		ActivitySmilesOnline = onlineActivity[4];
		
		$("#onActivity").html(titleOnline);
		$("#onNumber").html(ActivitySmilesOnline);
		
				
		/***LIMIT: 45 * no more than that allowed ***/
		alert(5);
		if(normalString.length > 23){ 
		$("#fixeds").height("28%");
		$(".titleSpace").css("top","42%");
		$(".actionButtons").css("bottom","6%");
		}
		else{}
	$("#changeActivityOffline").click(function(){alert("You've clicked me!")});
	 
}
function userIsOut(){
	

	$("#mainApp").css("display","none");
	$("#loginSection").css("display","block");
	$("#loginTemporarySwitch").click(function (){
			userIsIn();
		});
}
 function main(){
	userIsOut();
}
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		main();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
