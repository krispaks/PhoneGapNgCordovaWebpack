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
    .factory('redirector', ['$state', ($state)=>{
		/*this is just sample redirection for mobile/phonegap. used angular injector to get access of this function from inside js/index.js (phonegap push notification)
		 might have to use ngCordova for this so that i can just add it as dependency in app module*/
        return {
            redirect: function(){
                $state.go('main.orderList');
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
    }]);
