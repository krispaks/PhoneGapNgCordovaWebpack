import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import PreferenceComponent from './preference.component';

let PreferenceModule = angular.module('preferenceModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(PreferenceComponent.name, PreferenceComponent.config);
    
export default PreferenceModule;