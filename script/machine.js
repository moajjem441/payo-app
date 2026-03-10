
// getValueFromInput

function getValueFromInput(id)
{
    const input=document.getElementById(id);
    const value=input.value;
    return value;
}


//getBalance

function getBalance()
{
   const currentBalance=document.getElementById("balance");
    const balance=currentBalance.innerText;
    return Number(balance);
}



//setBalance

function setNewBalance(newBalance){
    const currentBalance=document.getElementById("balance");
    currentBalance.innerText=newBalance;
}



//showOnly()

function showOnly(id)
{
    const transaction=document.getElementById("transaction-histoty");
    const addMoney=document.getElementById("add-money");
    const cashout=document.getElementById("cashout");
    const transferMoney=document.getElementById("transfer-money"); 
    const getBonus=document.getElementById("get-bonus-section"); 
    


    addMoney.classList.add("hidden");
    transaction.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");



    const selected=document.getElementById(id);
    selected.classList.remove("hidden");
    


}