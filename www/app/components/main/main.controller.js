class MainController{
    constructor($scope){
        $scope.$root.$on('navStateChange',  (event, data) => {
            console.log('navStateChanged: ' + data.currentState); // 'Data to send'
            this.currentState = data.currentState;
        });
    }    
}

export default MainController;