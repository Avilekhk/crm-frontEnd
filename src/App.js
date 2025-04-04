import React from "react";
import "./App.css";
import { AddTicketForm } from "./components/add-ticket-form/AddTicketForm.comp";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./page/dashboard/Dashboard.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}

      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
      <AddTicketForm />
    </div>
  );
}

export default App;
