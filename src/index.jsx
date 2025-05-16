// import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet, useParams } from 'react-router-dom';

const invoices = [
  {
    id: 12759,
    product: 'Platba za marketingovou kampaň',
    amount: 5000,
  },
  {
    id: 93241,
    product: 'Konzultace s odborníkem',
    amount: 3500,
  },
  {
    id: 28613,
    product: 'Platba za servis PC',
    amount: 2000,
  },
  {
    id: 41592,
    product: 'Nákup nového zařízení pro kancelář',
    amount: 15000,
  },
  {
    id: 75832,
    product: 'Výrobu nového produktu',
    amount: 8000,
  },
  {
    id: 36248,
    product: 'Úpravu webové stránky za účelem zvýšení konverzí',
    amount: 10000,
  },
  {
    id: 59483,
    product: 'Dodání zboží na sklad',
    amount: 6500,
  },
];

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <span> | </span>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
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
      <Outlet />
      {invoices.map((invoice) => (
        <p key={invoice.id}>
          <Link to={`/invoices/${invoice.id}`}>{invoice.product}</Link>
        </p>
      ))}
    </main>
  );
};

export const InvoiceDetail = () => {
  const { invoiceId } = useParams();
  const invoiceData = invoices.find((inv) => inv.id === Number(invoiceId));

  if (!invoiceData) {
    return <div>faktura nenalezena</div>
  }

  return (
    <div>
      <h3>
        {invoiceData.product} ({invoiceData.amount},-)
      </h3>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'expenses',
        element: <ExpensesPage />,
      },
      {
        path: 'invoices',
        element: <InvoicesPage />,
        children: [
          {
            path: '/invoices/:invoiceId',
            element: <InvoiceDetail />,
          },
        ]
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);