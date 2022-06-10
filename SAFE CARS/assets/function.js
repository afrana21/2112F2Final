function formvalidate()
{
   
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value ;
    var phone = document.getElementById("subject").value ;


    if(name == ""){

        document.getElementById("fs").innerHTML = "Name must be filled";
return false;
    }
  else  if(mail == ""){

        document.getElementById("es").innerHTML = "name must be filled";
return false;
    }  
   else  if(phone == ""){

        document.getElementById("ps").innerHTML = "name must be filled";
return false;
    }
else{
alert("Form Submit")

}

}


