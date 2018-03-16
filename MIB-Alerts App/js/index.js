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
            window.open('https://www.medintellibasealerts.com/home/medintellibase', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/medintellibase', '_blank', 'location=no,enableViewportScale=yes');
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
            window.open('https://www.medintellibasealerts.com/home/breaking-news', '_blank', 'location=no,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/breaking-news', '_blank', 'location=no,enableViewportScale=yes');
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
	searchArticles: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/articles-db', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/articles-db', '_blank', 'location=yes,enableViewportScale=yes');
        }
        
    },
	searchAlerts: function () {
        if (device.platform == 'android' || device.platform == 'Android') {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=alertArchive', '_system', 'location=yes,enableViewportScale=yes');
        }
        else {
            window.open('https://www.medintellibasealerts.com/home/medintellibase/medintellibase?func=alertArchive', '_blank', 'location=yes,enableViewportScale=yes');
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
		//alert("test 1 - initializing");
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


    }
};


