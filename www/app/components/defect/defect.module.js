import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import DefectComponent from './defect.component';

let DefectModule = angular.module('defectModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(DefectComponent.name, DefectComponent.config);
    
    
export default DefectModule;