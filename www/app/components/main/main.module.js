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
    .controller('MainModuleController', ['$scope', ($scope) =>{
        $scope.currentState = '';
    }])
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
    }])
    .run(['$rootScope', ($rootScope) => {
        $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams, options) => {
            console.log('something changed');

            switch(toState.name)
            {
                case 'main.orderList':
                    $rootScope.currentState = "receivedOrders";
                    /*$rootScope.$broadcast('navStateChange', {
                        currentState: 'receivedOrders' // send whatever you want
                    });*/
                break;
                case 'main.todo':
                    $rootScope.currentState = "todoOrders";
                    /*$rootScope.$broadcast('navStateChange', {
                        currentState: 'todoOrders' // send whatever you want
                    });*/
                break;
                case 'main.defects':
                    $rootScope.currentState = "manageDefects";
                    /*$rootScope.$broadcast('navStateChange', {
                        currentState: 'manageDefects' // send whatever you want
                    });*/
                break;
                case 'main.calendar':
                    $rootScope.currentState = "dayCalendar";
                    /*$rootScope.$broadcast('navStateChange', {
                        currentState: 'dayCalendar' // send whatever you want
                    });*/
                break;
            }
        });
    }]);
    
    
export default MainModule;