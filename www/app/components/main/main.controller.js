class MainController{
    constructor($scope){
        var self = this;
        self.option = {};

        $scope.$root.$watch('currentState', (newValue, oldValue) => {
            self.onDoSomething(newValue);
        });
    }

    onDoSomething(data){
        this.option = {
            currentNav: data
        };
    };    
}

export default MainController;