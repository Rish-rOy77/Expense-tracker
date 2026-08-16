# 💰 Expense Tracker

A simple, responsive web app to track daily income and expenses — built with vanilla HTML, CSS, and JavaScript. All data is saved locally in the browser using `localStorage`, so your transactions persist even after refreshing the page.

## Features

- Add transactions with a description, amount, and category
- Automatically calculates total balance, income, and expenses
- Categorize transactions (Food, Transport, Shopping, Bills, Salary, Other)
- Delete any transaction with a single click
- Data persists using browser localStorage — no backend or database required
- Clean, responsive UI

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla, no frameworks)

## How to Run Locally

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```
2. Open the project folder
3. Open `index.html` in your browser (double-click it, or use the VS Code "Live Server" extension)

That's it — no installation or dependencies needed.

## How It Works

- Enter a description, an amount (use a `+` prefix for income or `-` for an expense), and pick a category
- Submit the form to add it to your transaction history
- The balance, income, and expense totals update automatically
- Click the ✕ button next to any transaction to remove it

## Future Improvements

- Add data visualization (charts for spending by category)
- Add date filtering (view expenses by week/month)
- Export transactions to CSV
- Add a backend with a database for multi-device sync

## Author

Rishikeshan A