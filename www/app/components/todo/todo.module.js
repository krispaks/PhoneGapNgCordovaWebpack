import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import TodoComponent from './todo.component';

let TodoModule = angular.module('todoModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(TodoComponent.name, TodoComponent.config);
    
    
export default TodoModule;