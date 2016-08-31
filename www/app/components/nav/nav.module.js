import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import NavComponent from './nav.component';

let NavModule = angular.module('navModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(NavComponent.name, NavComponent.config);
    
export default NavModule;