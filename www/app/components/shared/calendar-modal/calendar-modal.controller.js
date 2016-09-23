class CalendarModalController{
    constructor($mdDialog){
        showDialog();
    }

    showDialog(){
        $mdDialog.show({
            controller: this,
            templateUrl: './calendar-modal.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    }    
}

export default CalendarModalController;