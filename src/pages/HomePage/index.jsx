import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './style.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
};

const ExpensesPage = () => {
  return (
    <main>
      <h2>Expenses</h2>
      <p>Here are your business expenses for the last month</p>
    </main>
  );
};

const InvoicesPage = () => {
  return (
    <main>
      <h2>Invoices</h2>
      <p>Here are your issued invoices for the last month</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/expenses',
    element: <ExpensesPage />,
  },
  {
    path: '/invoices',
    element: <InvoicesPage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
