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
    landing: function () {
        window.location = "index.html"; 
    },
    homeButton: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://www.medintellibase.com/', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('http://www.medintellibase.com/', '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },  
    intelSolutions: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://www.medintellibase.com/services-software/', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('http://www.medintellibase.com/services-software/', '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },
    intelSoftware: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://www.medintellibase.com/mib-diy-software/', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('http://www.medintellibase.com/mib-diy-software/', '_blank', 'location=no,enableViewportScale=yes');
        }
        
    },      
    contactUS: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://medintellibase.com/contact/', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('http://medintellibase.com/contact/', '_blank', 'location=no,enableViewportScale=yes');
        }
    },
    search: function () {
        window.location = "search.html"; 
    },
    // Search landing page buttons
    customAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://www.medintellibase.com/mib-custom-alerts/', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('http://www.medintellibase.com/mib-custom-alerts/', '_blank', 'location=no,enableViewportScale=yes');
        } 
    }, 
    breakingNews: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://medintellibase.com/mib-custom-breaking-news/', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('http://medintellibase.com/mib-custom-breaking-news/', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
    marketTracks: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://medintellibase.com/mib-custom-markettracks/', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('http://medintellibase.com/mib-custom-markettracks/', '_blank', 'location=yes,enableViewportScale=yes');
        }
    },
    litSearches: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://medintellibase.com/mib-custom-litsearches-litreviews/', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('http://medintellibase.com/mib-custom-litsearches-litreviews/', '_blank', 'location=yes,enableViewportScale=yes');
        }
    },
    customMobile: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('http://medintellibase.com/mib-custom-mobile-app/', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('http://medintellibase.com/mib-custom-mobile-app/', '_blank', 'location=yes,enableViewportScale=yes');
        }
    },
};

var app = {
    // Application Constructor
    initialize: function () {
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
        this.receivedEvent("deviceready");
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
