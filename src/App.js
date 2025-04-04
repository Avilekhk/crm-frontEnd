import React from "react";
import "./App.css";
// import {Button} from 'react-bootstrap';
import { Dashboard } from "./page/dashboard/Dashboard.page";
import { DefaultLayout } from "./layout/DefaultLayout";
function App() {
  return (
    <div className="App">
      {/* <Entry></Entry>
       */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
