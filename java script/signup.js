import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML=nav();

const userdata = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;   
    var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    var passw=  /^[A-Za-z]\w{7,14}$/; 

    console.log(regName.test(user.name));

    fetch("http://localhost:3000/signupdata",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(user),
})

}

document.querySelector("#form").addEventListener("submit" , userdata);

// name 

document.getElementById("name").addEventListener("keypress",()=>{
    let name = document.getElementById("name").value;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/; 
    if(!regName.test(name)){
        document.getElementById("n-err").innerHTML="not a valid name"
    }
    else{
        document.getElementById("n-err").innerHTML="valid name"
        document.getElementById("n-err").style.color = "green";
    }
})

// email 

document.getElementById("email").addEventListener("keypress",()=>{
    let name = document.getElementById("email").value;
    var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if(!emailCheck.test(email)){
        document.getElementById("e-err").innerHTML="not a valid email"
    }
    else{
        document.getElementById("e-err").innerHTML="valid email"
        document.getElementById("e-err").style.color = "green";
    }
})

// password 

document.getElementById("password").addEventListener("keypress",()=>{
    let name = document.getElementById("password").value;
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(!passw.test(password)){
        document.getElementById("p-err").innerHTML="not a valid password"
    }
    else{
        document.getElementById("p-err").innerHTML="valid password"
        document.getElementById("p-err").style.color = "green";
    }

})
