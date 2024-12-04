let outputDiv = document.getElementById("Output");
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

const correctPassword = "1234";
outputDiv.innerHTML += "<h2>Using a password prompt</h2>";

submitButton.addEventListener("Click",()=>{
    let password;
    let attempt = 0;

    do{
        password = passwordInput.value;

        if(password === correctPassword){
            outputDiv.innerHTML += "Acess Granted <br>";
            passwordInput.disable = true;
            submitButton.disbaled = true;
            break;
        }else{
            outputDiv
        }
    }
});
