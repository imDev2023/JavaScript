
function calcualteLoan(){
    const loanAmountEl = document.getElementById("loan-amount").value;
    const interestRateEl = document.getElementById("Interest-Rate").value;
    const monthsToPayEl = document.getElementById("Months-to-pay").value;
    const monthlyPaymentEl = document.getElementById('Monthly-payment');

    interest = (loanAmountEl * interestRateEl *0.01)/monthsToPayEl;

    const monthlyPayment= (loanAmountEl / monthsToPayEl +interest).toFixed(2)

    monthlyPaymentEl.innerHTML = monthlyPayment

}

