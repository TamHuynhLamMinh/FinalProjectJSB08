

function myFunction() {
    let x = document.getElementById("year").value;
    let text;
    if (isNaN(x) || x < 0 || x > 200) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("validate").innerHTML = text;
  }

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
  }