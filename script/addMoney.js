// document.getElementById("add-money-btn").addEventListener("click",function(){

//     const bank=document.getElementById("select-part");
//     const selectedBank=bank.value;
//     if(selectedBank.length==='select back'){
//         alert("Bank haven't selected yet");
//         return;
//     }

//     const AccountNumber=document.getElementById("bank-account-number");
//     const bankAccountNumber=AccountNumber.value;
//     if(bankAccountNumber.length!==11)
//     {
//         alert("Invalid account Number");
//     }


//     const amountToAdd=document.getElementById("amount-to-add");
//     const amount=amountToAdd.value;

//     const currentBalance=document.getElementById("balance");
//    const balance=currentBalance.innerText;

//    const newBalance=Number(balance)+Number(amount);

//    const pinNumber=document.getElementById("pin");
//    const pin=pinNumber.value;
//    if(pin==='1234')
//    {
//     alert("Money Added Successfully");
//     console.log(newBalance)

//      const currentBalance=document.getElementById("balance");
//       currentBalance.innerText=newBalance;

//    }
//    else{
//     alert("Invalid Pin Number");

//    }

// });



//--------------more easy way-----------------------

document.getElementById("add-money-btn").addEventListener("click", function () {

    const selectedBank = getValueFromInput("select-part");
    if (selectedBank === 'Select back') {
        alert("You haven't selected a bank yet");
        return;
    }

    const bankAccNumber = getValueFromInput("bank-account-number");
    if (bankAccNumber.length !== 11) {
        alert("Invalid Account Number");
        return;
    }

    const amount = getValueFromInput("amount-to-add");

    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput("pin");
    if (pin === '1234') {
        alert(`Money ${amount} Added Successfully
            at ${Date()}
            `);

         setNewBalance(newBalance);

        const history = document.getElementById("history-container");
       
        const div = document.createElement("div");

        div.innerHTML = `
         <div class="card bg-base-100 mb-5  flex flex-row  items-center gap-3 rounded-2xl p-4">
              <div class="img bg-gray-300 w-[120px] h-[80px] rounded-full p-4 flex justify-center items-center">
                <img class="w-[40px] h-[40px]  " src="./Payoo/assets/opt-1.png" alt="">
              </div>
              <div class="details">
                 <h1 class="text-xl text-gray-600 font-bold">Added Money</h1>

                <p> Money ${amount} $ Add Successfully
                 at ${Date()} </p>

              </div>
            </div>
        
        
        `

        history.append(div);
    }
    else {
        alert("Invalid Pin Number");
    }

});