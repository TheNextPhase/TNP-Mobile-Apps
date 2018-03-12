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
 * under the License. studious-pen-764
 */

 var fileObject;
 var plainBlackToken;
 var counterNumber;

 var openPage = {
    report: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    unreadAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    userAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=alertCustom', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=alertCustom', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    abstractSearch: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=search', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase/medintellibase?func=search', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    requestForm: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/portal/usmi-request-form2', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/portal/usmi-request-form2-mobile', '_blank', 'location=yes,enableViewportScale=yes');
        }
    },
    PAHinvestigatorDirectory: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=vG7HxEQaC2ze2_pAbJ6iJw&func=&subjectId=d8eebbHgo_xjRbIOlRQFJw&macro_subjectId_375_jDS=Investigator+Directory', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=vG7HxEQaC2ze2_pAbJ6iJw&func=&subjectId=d8eebbHgo_xjRbIOlRQFJw&macro_subjectId_375_jDS=Investigator+Directory', '_blank', 'location=yes,enableViewportScale=yes');
        }
    },
    AspireInvestigatorDirectory: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=NAMIZ_DZyEsunFXXsEQ-Ww&func=&subjectId=uR1x8HWHDRzRSjIrRAcX8Q&macro_subjectId_177_jDS=Investigator+Directory', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medcomalerts.com/home/medintellibase?webguiCsrfToken=NAMIZ_DZyEsunFXXsEQ-Ww&func=&subjectId=uR1x8HWHDRzRSjIrRAcX8Q&macro_subjectId_177_jDS=Investigator+Directory', '_blank', 'location=yes,enableViewportScale=yes');
        }
    }
};

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var pushNotification = window.plugins.pushNotification;
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');   
		
        //Runs correct code depending on system
        if (device.platform == 'android' || device.platform == 'Android') {

            //App id = 525562947054

            pushNotification.register(
				this.successHandler, 
				this.errorHandler, 
				{ 
					"senderID": "525562947054", 
					"ecb": "app.onNotificationGCM" 
				}
			);
        }
        else {
            pushNotification.register(
				this.tokenHandler, 
				this.errorHandler, 
				{ 
					"badge": "true", 
					"sound": "true", 
					"alert": "true", 
					"ecb": "app.onNotificationAPN" 
				}
			);
			plainBlackToken = localStorage.getItem("plainBlackToken");
            if(plainBlackToken == null){
                //alert("plainBlackToken==null");
                //alert("plainBlackToken == null, heading to registration page");
                // GCM doesn't go to register page immediately despite firing here
                window.location = "register.html";
            }
        }

        //var tempKeyGrab = localStorage.getItem("plainBlackToken");
        //prompt("This is the PlainBlack Token: " , tempKeyGrab);

        //console.log('Received Event: ' + id);
        //alert('Received Event: ' + id);
    },

    

    // result contains any message sent from the plugin call
    successHandler: function (result) {
        console.log(result);
    },
    tokenHandler: function (msg) {
        var iosToken = msg;
        console.log("Token Handler, This is the token: " + msg);
        app.verifyRegistration(msg);
            },
    errorHandler:function(error) {
        alert(error);
        console.log(error);
    },
    // iOS
    onNotificationAPN: function (event) {
        var pushNotification = window.plugins.pushNotification;
        console.log("Received a notification! " + event.alert);
        console.log("event sound " + event.sound);
        console.log("event badge " + event.badge);
        console.log("event " + event);
        //alert("Received a notification! " + event.alert);
        //alert("event sound " + event.sound);
        //alert("event badge " + event.badge);
        //alert("event " + event);
        if (event.alert) {
            navigator.notification.alert(event.alert);
        }
        if (event.badge) {
            console.log("Set badge on  " + pushNotification);
            pushNotification.setApplicationIconBadgeNumber(this.successHandler, event.badge);
        }
        if (event.sound) {
            var snd = new Media(event.sound);
            snd.play();
        }
    },
    // Android
    onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
            if ( e.regid.length > 0 )
            {
                console.log("Regid " + e.regid);
                    //alert('registration id = ' + e.regid); //Display on screen the registration id for server testing
                    //prompt("Registration id:", e.regid);
                    console.log('registration id = ' + e.regid);//THIS IS THE GCM REGISTRATION ID
                    this.verifyRegistration(e.regid);

                }
                break;

                case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert(e.message);
                break;

                case 'error':
                alert('GCM error = '+e.msg);
                break;

                default:
                alert('An unknown GCM event has occurred');
                break;
            }
        },

    verifyRegistration: function (push_token) {

        console.log("ENTER verifyRegistration();");


        plainBlackToken = localStorage.getItem("plainBlackToken");

        if(plainBlackToken == null){
            window.location = "register.html";
        }

        if (device.platform == 'android' || device.platform == 'Android') {
            var deviceType = "GCM";
        }
        else {
            var deviceType = "APNs";
        }

        //console.log("before parse");
        //console.log(plainBlackToken);
        //alert("before parse: {}".format(plainBlackToken));
        var plainBlackGetToken = JSON.parse(plainBlackToken);
        //console.log("after parse");
        //console.log(plainBlackGetToken.session_token);
        //alert("after parse: {}".format(plainBlackGetToken.session_token));
        // var datastring = ('{"session_token" : ' + plainBlackGetToken.session_token + ', "push_token" : ' + push_token + ', "token_type" : ' + deviceType + '}');
        //console.log(datastring);
        //console.log("about to do the ajax");
        //alert("about to do the ajax");
        $.ajax({
            type       : "POST",
            url        : "https://www.medcomalerts.com/api/push_token",
            crossDomain: true,
			jsonp	   : false,
            data       : { "session_token" : plainBlackGetToken.session_token, "app_id" : 525562947054, "push_token" : push_token, "token_type" : deviceType },
            //data       : { "session_token" : plainBlackGetToken.session_token, "push_token" : push_token, "token_type" : deviceType },
            //data        : datastring,
            dataType   : 'json',
            success    : function(response) {
                console.log("enter success mode");
                console.log(JSON.stringify(response));//SUCCESS
                if(response.status == 440){
                    console.log(JSON.stringify(response.message)); //Session Token Not Found
                    var counterNumber = localStorage.getItem("counter", counterNumber);
                    if(counterNumber == null){
                        counterNumber = 0;
                    }
                    else{
                        counterNumber++;
                    }
                    if(counterNumber >= 5){
                        alert("Please re-register for push notifications on this device");
                        window.location = "register.html";
                    }
                    localStorage.setItem("counter", counterNumber);
                }
                else{
                    if(response.status == 441){
                        console.log(JSON.stringify(response.message));
                        alert("There was an issue contacting the server. If this problem persists please contact your technical department.");
                    }
                    else{
                        //everything went succesfully and we can continue to receive notifications
                        console.log("everything went succesfully and we can continue to receive notifications");
                        //alert("Good to go");
                        // If we set counterNumber to 0, do we never get APNs?
                        // TESTING WITH BADGE VALUE 77
                        var counterNumber = localStorage.setItem("counter", 77);
                        //alert("counterNumber = {}".format(counterNumber));
                    }
                }
            },
            error: function(response, result) {
                console.log(JSON.stringify(response));
                alert(JSON.stringify(response));
                alert('Something went wrong with the connection! It should be fixed shortly. If it persists please contact the I.T. department.');
            }
        });
        //return false;
        return true;
    }  
};




