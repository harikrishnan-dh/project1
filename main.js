document.querySelector("button").addEventListener("click", function () {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let emiAmount = parseFloat(document.getElementById("emiAmount").value);
    let loanTenure = parseFloat(document.getElementById("loanTenure").value);

    // Convert yearly interest rate to monthly
    let monthlyRate = interestRate / 12 / 100;

    // Convert years to months
    let months = loanTenure * 12;

    // EMI formula
    let emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    // Total payment & interest
    let totalPayment = emi * months;
    let totalInterest = totalPayment - loanAmount;

    // Update HTML output
    document.getElementById("emi").innerText = emi.toFixed(2);
    document.getElementById("interest").innerText = totalInterest.toFixed(2);
    document.getElementById("payment").innerText = totalPayment.toFixed(2);
});
