var balanceAmount = 0;

function updateBalance(amount) {
  balanceAmount += amount;
  document.getElementById("balance-amount").textContent = balanceAmount;
}

document.getElementById("transaction-form").addEventListener("submit", function(event) {
  event.preventDefault();

  var transactionType = document.getElementById("transaction-type").value;
  var amount = parseInt(document.getElementById("amount").value);
  var description = document.getElementById("description").value;

  if (isNaN(amount) || amount <= 0 || description === "") {
    alert("Harap isi semua field dengan benar.");
    return;
  }

  var listItem = document.createElement("li");
  listItem.textContent = description + ": " + amount;

  if (transactionType === "expense") {
    listItem.classList.add("expense");
    updateBalance(-amount);
  } else if (transactionType === "income") {
    listItem.classList.add("income");
    updateBalance(amount);
  }

  document.getElementById("transaction-list").appendChild(listItem);

  document.getElementById("transaction-form").reset();
});

