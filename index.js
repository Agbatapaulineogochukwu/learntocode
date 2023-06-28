function myFunction() {
    document.getElementById("promo").innerHTML = "CLAIM YOUR FREE TRAIL USING THE FORM BELOW";
  }


  function errorHandle() {
    const message = document.getElementById("errorMessage");
    message.innerHTML = "";
    let x = document.getElementById("username").value;
    try { 
      if(x.trim() == "")  throw "empty";
      String(x);
      if(x.length < 10)  throw "character too low";
      if(x.length > 15)   throw "caracter too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }

function inputValidation() {
      if (document.getElementById("checked").innerHTML.checked = true){"";
    }  else {
      'Must agree to our terms and condition';
      }
    }
    

  function Form() {
    document.getElementById("personalDetails").submit();
  }

