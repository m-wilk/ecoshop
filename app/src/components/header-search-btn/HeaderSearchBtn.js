
const HeaderSearchBtn = () => {
  return (
    <form className="d-flex align-items-center  border border-success rounded-end-3">
      <input
        type="text"
        className="form-control border-0 me-3 custom-input"
        placeholder="Search Product..."
      ></input>
      <div className="devider me-3"></div>
      <select defaultValue="0" className="form-select border-0 custom-input">
        <option value="0">Meat</option>
        <option value="1">Vegrtable</option>
        <option value="2">Fruits</option>
        <option value="3">Juice</option>
        <option value="4">Meat</option>
      </select>
      <button type="submit" className="btn btn-success rounded-start-0">Search</button>
    </form>
  );
};

export default HeaderSearchBtn;
