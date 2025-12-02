function calculate() {
    let emi = parseFloat(document.getElementById("emiAmount").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let duration = parseFloat(document.getElementById("duration").value);
    let type = document.getElementById("type").value;

    if (!emi || !interest || !duration) {
        alert("Please fill all fields");
        return;
    }

    // convert year to months
    let months = (type === "year") ? duration * 12 : duration;

    // per month interest money
    let monthlyInterest = emi * (interest / 100);

    // total interest for duration
    let totalInterest = monthlyInterest * months;

    // total EMI amount
    let totalEmi = emi * months;

    document.getElementById("monthlyEmi").innerText = "Monthly EMI Interest: ₹ " + monthlyInterest;
    document.getElementById("totalEmi").innerText = "Total EMI Amount: ₹ " + totalEmi;
    document.getElementById("totalInterest").innerText = "Total Interest: ₹ " + totalInterest;
}
