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
    .component(AppComponent.name, AppComponent.config)
    .config(['$mdThemingProvider', ($mdThemingProvider)=>{
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdThemingProvider.theme('installpro')
            .primaryPalette('orange')
            .accentPalette('orange')
            .warnPalette('orange')
            .backgroundPalette('orange');

        $mdThemingProvider.theme('lennox')
            .primaryPalette('green')
            .accentPalette('green')
            .warnPalette('green')
            .backgroundPalette('green');

        $mdThemingProvider.theme('carrier')
            .primaryPalette('red')
            .accentPalette('red')
            .warnPalette('red')
            .backgroundPalette('red');

        $mdThemingProvider.theme('ge')
            .primaryPalette('blue')
            .accentPalette('blue')
            .warnPalette('blue')
            .backgroundPalette('blue');
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
    .run(['$rootScope', '$state', '$cordovaPushV5', ($rootScope, $state, $cordovaPushV5) => {
        console.log('************* inside run! *************');
        document.addEventListener('deviceready', ()=>{
            console.log('initialize');
            
            var options = {
                android: {
                    senderID: "XXXXXXX"
                },
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true",
                    clearBadge: "true"
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
                // Note: for APNS i believe this is the device token returned.
                // for Backend Registration, we will save this device token in localStorage
                // during login, it will be sent to the a Restful api that will generate a registrationId.
                // the backend generated registrationId i think is the one used to send to the device.
                    console.log('registrationId: ' + registrationId);
                })
            });

            console.log('continue after init');
            $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
                console.log('notification received');
                if(data.additionalData.type === 1)
                {
                    $state.go('main.defects');
                }
                else
                {
                    $state.go('main.orderList');
                }
                
            });

            // triggered every time error occurs
            $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
                console.log('notification error: ' + e.message);
            });
        });
    }]);
