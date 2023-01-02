function myFunction() {
    let x = document.getElementById("year").value;
    let text;
    if (isNaN(x) || x < 0 || x > 2023) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("validate").innerHTML = text;
  }

function validateForm() {
    let x = document.forms["RegisterForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let email = document.forms["RegisterForm"]["mail"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (ValidateEmail(email)== false) {
      alert("Invalid email")
      return false
    } 
  }

function ValidateEmail(mail) 
{
 if (/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(mail))
  {
    return (true)
  }
    return (false)
}
