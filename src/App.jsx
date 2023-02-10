import InitialForm from "./components/Form";
import "./App.css";
import GetDataForm from "./components/GetDataForm";

function App() {
  return (
    <div className="container">
      <h1>Simple React app for testing</h1>
      <p>Try first fetting your name from the database</p>
      <GetDataForm />
      <p>If that doesnt work just register</p>
      <InitialForm />
    </div>
  );
}

export default App;
