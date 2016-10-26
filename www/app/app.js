import angular from 'angular';
import 'ng-cordova';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import AppComponent from './app.component';
import './components/login/index';
import './components/home/home.module';
import './components/preference/preference.module';
import './components/main/main.module';

export default angular
    .module('app', [
        'ngMaterial'
        , 'ngCordova'
        , 'ui.router'
        , 'loginModule'
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
            .state('login', {
                url: '/',
                template: '<login-component></login-component>'
            })
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
