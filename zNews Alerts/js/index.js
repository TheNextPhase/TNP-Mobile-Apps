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
    breakingNews: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/breaking-news', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/breaking-news', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    currentAlert: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    unreadAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=unreadAlerts', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },    
    searchAlert: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertArchive', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertArchive', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    searchAbstract: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=search', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=search', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },    
    userAlertGenerator: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertCustom', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertCustom', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    searchAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertArchive', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.resuscitationalerts.com/home/medintellibase/medintellibase?func=alertArchive', '_blank', 'location=yes,enableViewportScale=yes');
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
        
        //Runs correct code depending on system
        if (device.platform == 'android' || device.platform == 'Android') {

            //App id = 1011446444058

            pushNotification.register(this.successHandler, this.errorHandler, { "senderID": "1011446444058", "ecb": "app.onNotificationGCM" });
        }
        else {
            pushNotification.register(this.tokenHandler, this.errorHandler, { "badge": "true", "sound": "true", "alert": "true", "ecb": "app.onNotificationAPN" });
        }

                    //var tempKeyGrab = localStorage.getItem("plainBlackToken");
                    //prompt("This is the PlainBlack Token: " , tempKeyGrab);


        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);
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
        alert(error);
        //console.log(error);
    },
    // iOS
    onNotificationAPN: function (event) {
        var pushNotification = window.plugins.pushNotification;
        //console.log("Received a notification! " + event.alert);
        //console.log("event sound " + event.sound);
        //console.log("event badge " + event.badge);
        //console.log("event " + event);
        if (event.alert) {
            navigator.notification.alert(event.alert);
        }
        if (event.badge) {
            //console.log("Set badge on  " + pushNotification);
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
                //console.log("Regid " + e.regid);
                    //alert('registration id = ' + e.regid); //Display on screen the registration id for server testing
                    //prompt("Registration id:", e.regid);
                    //console.log('registration id = ' + e.regid);//THIS IS THE GCM REGISTRATION ID
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

        //console.log("ENTER verifyRegistration();");


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
        var plainBlackGetToken = JSON.parse(plainBlackToken);
        //console.log("after parse");
        //console.log(plainBlackGetToken.session_token);
        var datastring = ('{"session_token" : ' + plainBlackGetToken.session_token + ', "push_token" : ' + push_token + ', "token_type" : ' + deviceType + '}');
        //console.log(datastring);
        //console.log("about to do the ajax");
        $.ajax({
            type       : "POST",
            url        : "https://www.resuscitationalerts.com/api/push_token",
            crossDomain: true,
            data       : { "session_token" : plainBlackGetToken.session_token, "app_id" : 1011446444058, "push_token" : push_token, "token_type" : deviceType },
            //data       : { "session_token" : plainBlackGetToken.session_token, "push_token" : push_token, "token_type" : deviceType },
            //data        : datastring,
            dataType   : 'json',
            success    : function(response) {
                //console.log("enter success mode");
                //console.log(JSON.stringify(response));//SUCCESS
                if(response.status == 440){
                    //console.log(JSON.stringify(response.message)); //Session Token Not Found
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
                        //console.log(JSON.stringify(response.message));
                        alert("There was an issue contacting the server. If this problem persists please contact your technical department.");
                    }
                    else{
                        //everything went succesfully and we can continue to receive notifications
                        //console.log("everything went succesfully and we can continue to receive notifications");
                        //alert("Good to go");
                        var counterNumber = localStorage.setItem("counter", 0);
                        
                    }
                }
            },
            error      : function(response, result) {
                //console.log(JSON.stringify(response));
                alert(JSON.stringify(response));
                alert('Something went wrong with the connection! It should be fixed shortly. If it persists please contact the I.T. department.');
            }
        });
        //return false;
        return true;
    }  
};





