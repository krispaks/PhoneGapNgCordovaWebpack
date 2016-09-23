class NavController{
    constructor(){
    }

    $onChanges(changesObj)
    {
        console.log(this.option.currentNav);
    }     
}

export default NavController;