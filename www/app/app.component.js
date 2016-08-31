import AppController from './app.component.controller';
export default{
    name: 'appComponent',
    config: {
        templateUrl: './app/app.component.html',
        controller: ['$mdSidenav',AppController]
    }
}
