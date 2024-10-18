const mainMenu = document.querySelector('.mainmenu');
const closeMenu = document.querySelector('.closemenu');
const openMenu = document.querySelector('.openmenu');
openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top= '0';
}
function close(){
    mainMenu.style.top = '-110%';
    mainMenu.style.width ='200px';
    mainMenu.style.height = '250px';
}


// Form Validation Code
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateform(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myform']["fname"].value;
    if (name.length<3){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myform']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myform']["fphone"].value;
    if (phone.length != 11){
        seterror("phone", "*Phone number should be of 11 digits!");
        returnval = false;
    }
    return returnval;
}



