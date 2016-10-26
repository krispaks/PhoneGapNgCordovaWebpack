import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import LoginComponent from './login.component';

let LoginModule = angular.module('loginModule', [
    'ngMaterial'
    , 'ui.router'
    , 'material.svgAssetsCache'])
    .component(LoginComponent.name, LoginComponent.config);
    
export default LoginModule;