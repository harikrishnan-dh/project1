document.querySelector("button").addEventListener("click", function () {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let emiAmount = parseFloat(document.getElementById("emiAmount").value);
    let loanTenure = parseFloat(document.getElementById("loanTenure").value);

    
    let monthlyRate = interestRate / 12 / 1
    
    let months = loanTenure * 12;

    
    let emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    
    let totalPayment = emi * months;
    let totalInterest = totalPayment - loanAmount;

    
    document.getElementById("emi").innerText = emi.toFixed(2);
    document.getElementById("interest").innerText = totalInterest.toFixed(2);
    document.getElementById("payment").innerText = totalPayment.toFixed(2);
});
