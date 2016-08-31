import TodoController from './todo.controller';
export default{
    name: 'todoComponent',
    config: {
        templateUrl: './app/components/todo/todo.component.html',
        controller: [TodoController]
    }
}
