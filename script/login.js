document.getElementById("login-btn").addEventListener("click",function(){
    

    const mobNumber=document.getElementById("mobile-number");
    
    const mobileNumber=mobNumber.value;
    if(mobileNumber.length!==11)
    {
        alert("Invalid Mobile Number");
    }
   console.log(mobileNumber);

   const pinNumber=document.getElementById("pin");
   const pin=pinNumber.value;
   if(pin==='1234')
   {
    alert("Login Successfully");
    
    //for this can't back but we can use another one
    //window.location.replace("./home.html")
     
    window.location.assign('./home.html')

   }
   else{
    alert("Invalid Pin Number");
   }

});