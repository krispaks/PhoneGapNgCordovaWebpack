import HomeController from './home.controller';
export default{
    name: 'homeComponent',
    config: {
        templateUrl: './app/components/home/home.component.html',
        controller: [HomeController]
    }
}
