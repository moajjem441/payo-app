document.getElementById("transfer-money-btn").addEventListener("click",function(){

    const userAccNum=getValueFromInput("user-account-number");
    if(userAccNum.length!==1)
    {
        alert("Invalid User Account Number");
        return;
    }

    const amount=getValueFromInput("amount-to-transfer");

    const balance=getBalance();

    const newBalance=balance - Number(amount);

    if(newBalance < 0)
    {
        alert("Insufficient Balance");
        return;
    }

    const pin=getValueFromInput("transfer-pin");

    if(pin==='1234')
    {
        alert("Money Transfer Successfully");

        setNewBalance(newBalance);


        const history=document.getElementById("history-container");

        const div=document.createElement("div");

        div.innerHTML=`
         <div class="card bg-base-100 mb-5  flex flex-row  items-center gap-3 rounded-2xl p-4">
              <div class="img bg-gray-300 w-[120px] h-[80px] rounded-full p-4 flex justify-center items-center">
                <img class="w-[40px] h-[40px]  " src="./Payoo/assets/opt-1.png" alt="">
              </div>
              <div class="details">
                 <h1 class="text-xl text-gray-600 font-bold">Transfer Money</h1>

                <p> Money ${amount} $ Transfer Successfully
                 at ${Date()} </p>

              </div>
            </div>
        
        
        `

        history.append(div);

    }
    else{
        alert("Invalid Pin Number");
    }
    
});