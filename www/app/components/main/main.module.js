import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-ui-router';

import MainComponent from './main.component';
import NavModule from '../nav/nav.module';
import OrderListModule from '../order-list/order-list.module';
import TodoModule from '../todo/todo.module';
import DefectModule from '../defect/defect.module';

let MainModule = angular.module('mainModule', [
    'ngMaterial'
    , 'ui.router'
    , 'navModule'
    , 'orderListModule'
    , 'todoModule'
    , 'defectModule'
    , 'material.svgAssetsCache'])
    .component(MainComponent.name, MainComponent.config)
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main.orderList', {
                url: '/orderList',
                template: '<order-list-component></order-list-component>'
            })
            .state('main.todo', {
                url: '/todo',
                template: '<todo-component></todo-component>'
            })
            .state('main.defects', {
                url: '/defects',
                template: '<defect-component></defect-component>'
            })
            .state('main.calendar', {
                url: '/calendar',
                template: '<calendar-component></calendar-component>'
            })
    }]);
    
    
export default MainModule;