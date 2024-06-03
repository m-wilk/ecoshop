import "./price-range.scss";

const PriceRange = () => {
  return (
    <div>
      <h5 className="fw-bold">Price Range</h5>
      <input
        type="range"
        class="form-range"
        min="0"
        max="5"
       
      ></input>
    </div>
  );
};

export default PriceRange;
