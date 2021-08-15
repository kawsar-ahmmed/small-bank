// deposut button 

document.getElementById('deposit-button').addEventListener('click', function(){
    // deposit amount 
    const depositField = document.getElementById('deposit-field');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);

    // console.log(depositAmount);
    

    // add amount 
    const addDeposit = document.getElementById('deposit-amount');
    const addDepositAmountText = addDeposit.innerText;
    const addDepositAmount = parseFloat(addDepositAmountText);
    const totalDeposit = depositAmount + addDepositAmount;
    addDeposit.innerText = totalDeposit;
    console.log(totalDeposit)
   
    // console.log(deposit)

    depositField.value = ''

    // update blance amount 
    const blanceTotal = document.getElementById('main-blance');
    const blanceTotalText = blanceTotal.innerText;
    const previousblanceTotal = parseFloat(blanceTotalText);
    const newBlanceTotal =  previousblanceTotal + depositAmount;
    blanceTotal.innerText = newBlanceTotal;
    // console.log(oldBlanceadd)

})
// withdraew amount blance 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // widthdrow amount filld 
    const withdrowAmount = document.getElementById('withdraw-field');
    const withdrowAmountBlanceText = withdrowAmount.value;
    const withdrowAmountBlance = parseFloat(withdrowAmountBlanceText);

    // withdraow amount add 
    const oldWithdrawBlance = document.getElementById('withdraw-blance');
    const oldWithdrawBlanceText = oldWithdrawBlance.innerText;
    // withdrow amount parseFloat
    const oldWithdrawBlanceTextToParst = parseFloat(oldWithdrawBlanceText);
    //
    const withdrawTotal = oldWithdrawBlanceTextToParst + withdrowAmountBlance;
    oldWithdrawBlance.innerText = withdrawTotal;
    withdrowAmount.value = ''

    // Update main blance 
    const balanceTotal = document.getElementById('main-blance');
    const previousbalanceText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceText);
    const newBlanceTotal = previousbalanceTotal - withdrowAmountBlance;
    

    // main blance 
    balanceTotal.innerText = newBlanceTotal;

})

