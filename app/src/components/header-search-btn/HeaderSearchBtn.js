import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

const HeaderSearchBtn = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8100/api/v1/common/categories/")
      .then((reponse) => {
        setCategories(reponse.data);
        console.log(reponse.data);
      });
  }, []);

  const handleOnSearch = (e) => {
    e.preventDefault();
    const params = createSearchParams({category: e.target.selectedCategory.value});
    navigate(`/shop?${params}`);
  };

  return (
    <form
      onSubmit={handleOnSearch}
      className="d-flex align-items-center  border border-success rounded-end-3"
    >
      <input
        type="text"
        className="form-control border-0 me-3 custom-input"
        placeholder="Search Product..."
        name="searchTerm"
      />
      <div className="devider me-3"></div>
      <select
        defaultValue="0"
        name="selectedCategory"
        className="form-select border-0 custom-input"
      >
        <option value="0">All categories</option>
        {categories.map((category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>
      <button type="submit" className="btn btn-success rounded-start-0">
        Search
      </button>
    </form>
  );
};

export default HeaderSearchBtn;
