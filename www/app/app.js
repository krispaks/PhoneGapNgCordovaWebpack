import angular from 'angular';
import 'ng-cordova';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import AppComponent from './app.component';
import './components/home/home.module';
import './components/preference/preference.module';
import './components/main/main.module';

export default angular
    .module('app', [
        'ngMaterial'
        , 'ngCordova'
        , 'ui.router'
        , 'homeModule'
        , 'preferenceModule'
        , 'mainModule'])
    .factory('redirector', ['$rootScope', '$state', '$cordovaPushV5', ($rootScope, $state, $cordovaPushV5)=>{
		/*this is just sample redirection for mobile/phonegap. used angular injector to get access of this function from inside js/index.js (phonegap push notification)
		 might have to use ngCordova for this so that i can just add it as dependency in app module*/
        return {
            init: function(){
                // NOTE: do i really need to put this inside deviceready?
                document.addEventListener('deviceready', ()=>{
                    console.log('initialize');
                    ($rootScope) ? console.log('$rootScope ready') : console.log('$rootScope you\'re doomed!');
                    ($state) ? console.log('$state ready') : console.log('$state you\'re doomed!');
                    ($cordovaPushV5) ? console.log('cordova plugin ready') : console.log('cordovaPushV5 you\'re doomed!');  
                    
                    var options = {
                        android: {
                            senderID: "XXXXXXX"
                        },
                        ios: {
                            alert: "true",
                            badge: "true",
                            sound: "true"
                        },
                        windows: {}
                    };
                    
                    // initialize
                    $cordovaPushV5.initialize(options).then(function() {
                        console.log('cordova init');
                        // start listening for new notifications
                        $cordovaPushV5.onNotification();
                        // start listening for errors
                        $cordovaPushV5.onError();
                        
                        // register to get registrationId
                        $cordovaPushV5.register().then(function(registrationId) {
                        // save `registrationId` somewhere;
                            console.log('registrationId: ' + registrationId);
                        })
                    });

                    console.log('continue after init');
                    $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
                        console.log('notification received');
                        $state.go('main.orderList');
                    });

                    // triggered every time error occurs
                    $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
                        console.log('notification error: ' + e.message);
                        // e.message
                    });
                });
            }
        }
    }])
    .component(AppComponent.name, AppComponent.config)
    .config(['$mdThemingProvider', ($mdThemingProvider)=>{
        $mdThemingProvider.theme('default')
            .primaryPalette('orange');
    }])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=>{
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                template: '<home-component></home-component>'
            })
            .state('preference', {
                url: '/preference',
                template: '<preference-component></preference-component>'
            })
            .state('main', {
                url: '/main',
                template: '<main-component></main-component>'
            });
    }])
    .run(['redirector', (redirector) => {
        redirector.init();
    }]);
