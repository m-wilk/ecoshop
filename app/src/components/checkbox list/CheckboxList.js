import "./checkbox-list.scss";

const CheckboxList = (props) => {
  return (
    <div className="checkbox-list-section">
      <h5 className="mb-4 fw-bold">{props.heading}</h5>
      <ul className="list-unstyled d-flex flex-column align-items-start justify-content-center gap-4">
        {props.items.map((item) => {
          return (
            <li>
              <input
                className="form-check-input me-3"
                type="checkbox"
                name={item.name}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckboxList;
