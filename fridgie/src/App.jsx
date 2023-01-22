import "./sass/main.scss";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import CreationForm from "./components/CreationForm";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <CreationForm />
    </Fragment>
  );
};

export default App;
