class AppController{
    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
    }

    toggleSideNav(){
        this.$mdSidenav('left').toggle();
    }
}

export default AppController;