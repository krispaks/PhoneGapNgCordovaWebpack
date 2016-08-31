import OrderListController from './order-list.controller';
export default{
    name: 'orderListComponent',
    config: {
        templateUrl: './app/components/order-list/order-list.component.html',
        controller: [OrderListController]
    }
}
