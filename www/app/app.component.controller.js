class AppController{
    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
        this.theme = 'default';
        this.accountId; 
    }

    toggleSideNav(){
        this.$mdSidenav('left').toggle();
    }

    accountChange(){

        var alTheme = 'default';
        switch(this.accountId){
            case '1':
                alTheme = 'installpro';
                break;
            case '2':
                alTheme = 'lennox';
                break;
            case '3':
                alTheme = 'carrier';
                break;
            case '4':
                alTheme = 'ge';
                break;
        }
        this.theme = alTheme;
    }
}

export default AppController;