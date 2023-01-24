import { useState } from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import CreationForm from "./components/CreationForm";
import FormVisibility from "./store/formVisibility-context";

const App = () => {
  const [formVisibility, setFormVisibility] = useState("formHidden");
  return (
    <FormVisibility.Provider value={[formVisibility, setFormVisibility]}>
      <Navbar />
      <CreationForm />
    </FormVisibility.Provider>
  );
};

export default App;
