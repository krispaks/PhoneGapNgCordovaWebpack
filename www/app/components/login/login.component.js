import LoginController from './login.controller';
export default{
    name: 'loginComponent',
    config: {
        templateUrl: './app/components/login/login.component.html',
        controller: [LoginController]
    }
}
