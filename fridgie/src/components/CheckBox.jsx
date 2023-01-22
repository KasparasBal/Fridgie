const Checkbox = (props) => {
  return (
    <div className="creation-form_checkbox-container">
      <input
        className="creation-form_input-checkbox"
        id={props.htmlForText}
        type="checkbox"
        onChange={props.checkedHandler}
        checked={props.checked}
      />
      <label className="creation-form_label" htmlFor={props.htmlForText}>
        {props.labelText}
      </label>
    </div>
  );
};

export default Checkbox;
