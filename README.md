# Expensify Application

## Sort your expenses

First time using Firebase and Bootstrap

- Some notes within files as this was a learning exercise for me and I'd like some reference notes, as well as the playground file.

### Tech

- React
- React Redux
- Enzyme
- React Bootstrap
- Styled/Emotion
- Firebase

### Commands

- `npm install` - installs all applications dependencies
- `npm start` - locally loads application
- `npm test` - runs applications tests

# Screenshots

## Login Page

Login via Firebase authentication using a google account
![Login page](src/__README_ASSETS__/Login_Page.png)

## Add Expense Page

Create a brand new expense with a description, amount, due date and optional note
![Add expense page](src/__README_ASSETS__/AddExpense_Page.png)

## Dashboard Page (With Expenses)

Display all expenses that match sorting rules
![Dashboard page show expenses](src/__README_ASSETS__/DashboardPageWithExpenses.png)

## Edit Expense Page

Edit existing expense to update saved data (description, amount, due date or note) or remove/delete the expense from your account
![Add expense page](src/__README_ASSETS__/EditExpense_Page.png)

## Sort By Text Example

Sort all saved expenses by text input, app re-renders as you type
![Add expense page](src/__README_ASSETS__/SortByText.png)

## Sort By Date Example

Sort all saved expenses by due dates
![Add expense page](src/__README_ASSETS__/SortByDate.png)

## Firebase Data

Showing how data is saved within the application and restricted to each user
![Firebase Data](src/__README_ASSETS__/FirebaseDatabaseData.png)

## Firebase Rules

Who can read/write to the application and how the incoming data is validated by Firebase
![Add expense page](src/__README_ASSETS__/FirebaseRules.png)

- Based on Udemy tutorial by Andrew Mead
