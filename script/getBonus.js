
isCoupon=false

document.getElementById("bonus-btn").addEventListener('click',()=>{

    console.log("button clicked")

   const coupon=getValueFromInput('user-coupon');
   console.log(coupon)

   if(isCoupon){
     alert("Already You have Used this coupon");
     return ;
   }

   const balance=getBalance();

   const newBalance=balance + Number(500);

   if(coupon==='naky')
   {
    alert(`Congratualaitons! You got 500 $ at ${Date()} `)
     
    setNewBalance(newBalance);

    const container=document.getElementById('history-container');

    const div=document.createElement('div');

    div.innerHTML=`
    
    <div class="card bg-base-100 mb-5  flex flex-row  items-center gap-3 rounded-2xl p-4">
              <div class="img bg-gray-300 w-[120px] h-[80px] rounded-full p-4 flex justify-center items-center">
                <img class="w-[40px] h-[40px]  " src="./Payoo/assets/opt-1.png" alt="">
              </div>
              <div class="details">
                 <h1 class="text-xl text-gray-600 font-bold">Get Bonus</h1>

                <p> Money 500$ Bonus Money Added Successfully
                 at ${Date()} </p>

              </div>
            </div>
    
    `
    container.append(div);
    isCoupon=true;

   }
   else{

    alert("Invalid Coupon ");
   }




});