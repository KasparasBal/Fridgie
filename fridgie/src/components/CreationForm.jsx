import { useState } from "react";
import Checkbox from "./CheckBox";

const CreationForm = () => {
  const [checked, setChecked] = useState();
  const [openedInputClass, setOpenedInputClass] = useState("hiddenForm");
  const [openedLabelClass, setOpenedLabelClass] = useState("hiddenForm");

  const checkedHandler = (e) => {
    console.log(e.target.checked);
    e.target.checked === true
      ? setOpenedInputClass("creation-form_input-text")
      : setOpenedInputClass("hiddenForm");

    e.target.checked === true
      ? setOpenedLabelClass("creation-form_label")
      : setOpenedLabelClass("hiddenForm");

    setChecked(!checked);
  };

  return (
    <form className="creation-form">
      <label className="creation-form_label" htmlFor="title">
        Title
      </label>
      <input className="creation-form_input-text" type="text" id="title" />
      <label className="creation-form_label" htmlFor="amount">
        Amount
      </label>
      <input className="creation-form_input-number" type="number" id="amount" />
      <label className="creation-form_label" htmlFor="openSpan">
        How long can it stay open?
      </label>
      <input className="creation-form_input-date" type="date" id="openSpan" />
      <label className="creation-form_label" htmlFor="expiration">
        Expiry Date
      </label>
      <input className="creation-form_input-date" type="date" id="expiration" />
      <Checkbox
        labelText="Opened"
        htmlForText="cbOpened"
        checkedHandler={checkedHandler}
        checked={checked}
      />
      <label className={openedLabelClass} htmlFor="openTime">
        When?
      </label>
      <input className={openedInputClass} type="text" id="openTime" />
      <button className="creation-form_submit-btn">Add Product</button>
    </form>
  );
};

export default CreationForm;
