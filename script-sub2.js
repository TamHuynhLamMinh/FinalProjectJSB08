/* function myFunction() {
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
*/
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
  let name = document.forms["RegisterForm"]["fname"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  let email = document.forms["RegisterForm"]["mail"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (ValidateEmail(email) == false) {
    alert("Invalid email");
    return false;
  }
  let phone = document.forms["RegisterForm"]["phone"].value;


  if (phone == "") {
    alert("Phone number must be filled out");
    return false;
  }
  if (validatePhoneNumber(phone) == false) {
    alert("Invalid  number");
    return false;
  }
  alert("Success");
  return false;
}

function ValidateEmail(mail) {
  let check = mail.indexOf("@");
  if (check == -1) {
    return false;
  }

  let temp = mail.substr(check, mail.length - check);
  if (temp.indexOf(".") == -1) {
    return false;
  }

  return true;
}

function validatePhoneNumber(phone) {
  let count = phone.length;
  if (count != 10) {
    return false;
  }

  if (isNaN(phone) == true) {
    return false;
  }

  if (phone[0] != 0) {
    return false;
  }

  return true;
}
