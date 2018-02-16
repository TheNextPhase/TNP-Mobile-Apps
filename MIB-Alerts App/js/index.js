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
var fileObject;

var plainBlackToken;

var counterNumber;

var openPage = {
    currentAlert: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://medintellibasealerts.com/mibaapp/currentalert', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('https://medintellibasealerts.com/mibaapp/currentalert', '_blank', 'location=no,enableViewportScale=yes');
        }
    },  
	unreadAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_blank', 'location=no,enableViewportScale=yes');
        }
    },
	breakingNews: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/mibaapp/breakingnews', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/mibaapp/breakingnews', '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },
    searchAbstracts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=search', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=search', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    documents: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/home/documents', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/documents', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },    
    shopmibReports: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/home/medintellibase-alerts-reports', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/medintellibase-alerts-reports', '_blank', 'location=yes,enableViewportScale=yes');
        }
    }
};

var app = {
    // Application Constructor
    initialize: function () {
		alert("test 1 - initializing");
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var pushNotification = window.plugins.pushNotification;
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);

        //Runs correct code depending on system
        if (device.platform == 'android' || device.platform == 'Android') {

            //App id = 20771133796

            //pushNotification.register(this.successHandler, this.errorHandler, { "senderID": "20771133796", "ecb": "app.onNotificationGCM" });
        }
        else {
            //pushNotification.register(this.tokenHandler, this.errorHandler, { "badge": "true", "sound": "true", "alert": "true", "ecb": "app.onNotificationAPN" });
        }
    },

    // result contains any message sent from the plugin call
    successHandler: function (result) {
        //console.log(result);
    },
    tokenHandler: function (msg) {
        var iosToken = msg;
        //console.log("Token Handler, This is the token: " + msg);
        app.verifyRegistration(msg);
    },
    errorHandler:function(error) {
        alert("errorHandler error: " + error);
        //console.log(error);
    },
    // iOS
    onNotificationAPN: function (event) {
        //var pushNotification = window.plugins.pushNotification;
        //console.log("Received a notification! " + event.alert);
        //console.log("event sound " + event.sound);
        //console.log("event badge " + event.badge);
        //console.log("event " + event);
        if (event.alert) {
            //navigator.notification.alert(event.alert);
        }
        if (event.badge) {
            //console.log("Set badge on  " + pushNotification);
            //pushNotification.setApplicationIconBadgeNumber(this.successHandler, event.badge);
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
                //console.log("Regid " + e.regid);
                //alert('registration id = ' + e.regid); //Display on screen the registration id for server testing
                //prompt("Registration id:", e.regid);
                //console.log('registration id = ' + e.regid);//THIS IS THE GCM REGISTRATION ID
                this.verifyRegistration(e.regid);
            }
            break;

            case 'message':
            // this is the actual push notification. its format depends on the data model from the push server
            alert('actual message = ' + e.message);
            break;

            case 'error':
            alert('GCM error = '+e.msg);
            break;

            default:
            alert('An unknown GCM event has occurred');
            break;
        }
    },

    // If we never set the value for push_token, then there's no way that it can be valid when it gets sent to the db
    // The issue might be in the condition of the push_token when it is sent out
    verifyRegistration: function (push_token) {

        console.log("ENTER verifyRegistration();");

        plainBlackToken = localStorage.getItem("plainBlackToken");

        alert("pbToken: " + plainBlackToken);
        // session_token : Rq2NxqvQOfofHc_GpxLuPg

        if(plainBlackToken == null){
            alert("Running fetchToken() because the plainBlackToken is null");
            //window.location = "register.html";
        }

        if (device.platform == 'android' || device.platform == 'Android') {
            var deviceType = "GCM";
        }
        else {
            var deviceType = "APNs";
        }

        //console.log("before parse");
        //console.log(plainBlackToken);
        var plainBlackGetToken = JSON.parse(plainBlackToken);
        //console.log("after parse");
        console.log(plainBlackGetToken.session_token);
        //var app_id = 20771133796;
        alert("about to try and verify registration");
        //var datastring = ('{"session_token" : ' + plainBlackGetToken.session_token + ', "push_token" : ' + push_token + ', "token_type" : ' + deviceType + '}');
        //console.log(datastring);
        $.ajax({
            type       : "POST",
            url        : "https://www.medintellibasealerts.com/api/push_token",
            crossDomain: true,
            jsonp      : false,
            data       : { "session_token" : plainBlackGetToken.session_token, "app_id" : 20771133796, "push_token" : push_token, "token_type" : deviceType},
            // The push_token here is undefined, it seems
            //data     : datastring, "app_id" : 20771133796
            dataType   : 'json',
            success    : function(response) {
                //alert("enter success mode");
                //alert("pbToken: " + plainBlackGetToken.session_token);
                //alert("push_token: " + push_token);
                //alert("deviceType: " + deviceType);
                // GCM
                //alert("response: " + JSON.stringify(response));
                
                //console.log("enter success mode");
                //console.log(JSON.stringify(response));//SUCCESS

                if(response.status == 404){
                    alert("404 Error.");
                    var counterNumber = localStorage.setItem("counter", 0);
                }
                else if(response.status == 441){
                    console.log(JSON.stringify(response.message));
                    alert("441 Error.");
                }
                else if(response.status == 440){
                    console.log(JSON.stringify(response.message)); //Session Token Not Found
                    alert("440 Error.");

                    var counterNumber = localStorage.getItem("counter", counterNumber);

                    if(counterNumber == null){
                        counterNumber = 0;
                    }
                    else{
                        counterNumber++;
                    }

                    if(counterNumber >= 5){
                        //alert("440: Running fetchToken() after a 440 failure");
                        window.location = "register.html";                    }
                    localStorage.setItem("counter", counterNumber);
                }
                else{
                    //everything went succesfully and we can continue to receive notifications
                    //console.log("everything went succesfully and we can continue to receive notifications");
                    alert("Success!");
                    var counterNumber = localStorage.setItem("counter", 0);
                }
            },
            error      : function(response, result) {
                //console.log(JSON.stringify(response));
                //alert(JSON.stringify(response));
                alert('Something went wrong with the connection! It should be fixed shortly. If it persists please contact the I.T. department.');
            }
        });
        //return false;
        return true;
    }  
};
