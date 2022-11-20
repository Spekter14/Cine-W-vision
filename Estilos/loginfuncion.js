function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contra").value;

    if(user == "Shotaro" &&  pass == "1234"){

        window.location = "index.html";
    }
}