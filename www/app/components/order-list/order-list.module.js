import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';

import OrderListComponent from './order-list.component';

let OrderListModule = angular.module('orderListModule', [
    'ngMaterial'
    , 'material.svgAssetsCache'])
    .component(OrderListComponent.name, OrderListComponent.config);
    
    
export default OrderListModule;