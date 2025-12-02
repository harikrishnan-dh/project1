function calculate() {
    let emi = parseFloat(document.getElementById("emiAmount").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let duration = parseFloat(document.getElementById("duration").value);
    let type = document.getElementById("type").value;

    if (!emi || !interest || !duration) {
        alert("Please enter all values");
        return;
    }

    let monthlyInterest = (emi * (interest / 100));
    let totalInterest;

    if (type === "month") {
        totalInterest = monthlyInterest * duration;
    } else {
        totalInterest = monthlyInterest * (duration * 12);
    }

    let totalPay = emi * duration + totalInterest;

    document.getElementById("monthlyEmi").textContent = "Monthly Interest: ₹" + monthlyInterest.toFixed(2);
    document.getElementById("totalEmi").textContent = "Total Pay: ₹" + totalPay.toFixed(2);
    document.getElementById("totalInterest").textContent = "Total Duration Interest: ₹" + totalInterest.toFixed(2);
}

function resetForm() {
    document.getElementById("emiAmount").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("type").value = "month";

    document.getElementById("monthlyEmi").textContent = "";
    document.getElementById("totalEmi").textContent = "";
    document.getElementById("totalInterest").textContent = "";
}
