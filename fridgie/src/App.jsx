import { useState } from "react";
import "./sass/main.scss";
import Navbar from "./components/Navbar";
import CreationForm from "./components/CreationForm";
import FormVisibility from "./store/formVisibility-context";
import Feed from "./components/Feed";

const App = () => {
  const [formVisibility, setFormVisibility] = useState("formHidden");
  return (
    <FormVisibility.Provider value={[formVisibility, setFormVisibility]}>
      <Navbar />
      <CreationForm />
      <Feed />
    </FormVisibility.Provider>
  );
};

export default App;
