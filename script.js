// Load existing transactions from localStorage, or start empty
const localTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localTransactions : [];

const form = document.getElementById('transaction-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const list = document.getElementById('transaction-list');
const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');

// Add new transaction on form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: textInput.value.trim(),
    amount: parseFloat(amountInput.value),
    category: categoryInput.value,
    date: new Date().toLocaleDateString()
  };

  if (!transaction.text || isNaN(transaction.amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  transactions.push(transaction);
  updateLocalStorage();
  render();

  form.reset();
});

// Remove a transaction by id
function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  updateLocalStorage();
  render();
}

// Save transactions array to localStorage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Render the list and totals
function render() {
  list.innerHTML = '';

  transactions.forEach(tx => {
    const li = document.createElement('li');
    li.classList.add(tx.amount < 0 ? 'expense' : 'income');

    li.innerHTML = `
      <div class="tx-info">
        <strong>${tx.text}</strong>
        <small>${tx.category} · ${tx.date}</small>
      </div>
      <div>
        <span>${tx.amount < 0 ? '-' : '+'}₹${Math.abs(tx.amount)}</span>
        <button class="delete-btn" onclick="deleteTransaction(${tx.id})">✕</button>
      </div>
    `;

    list.appendChild(li);
  });

  const amounts = transactions.map(tx => tx.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
  const expense = (amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1).toFixed(2);

  balanceEl.textContent = `₹${total}`;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${expense}`;
}

// Initial render on page load
render();