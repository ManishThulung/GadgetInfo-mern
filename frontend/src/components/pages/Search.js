import React, { useState, Fragment } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/Metadata";

import { useEffect } from "react";
import { getPhones } from "../../redux/actions/phoneAction";
import { useSelector, useDispatch } from "react-redux";
import "../phones/AllPhones.css";
import Loader from "../loader/Loader";
import PhoneCard from "../phones/PhoneCard";
import { Slider, Typography } from "@mui/material";

const category = ["trending", "gaming", "upcoming"];
// const ram = ["4GB", "6GB", "8GB", "12GB", "16GB"];

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [price, setPrice] = useState([10000, 250000]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [categoryItem, setCategoryItem] = useState("");

  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  const priceHandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  const dispatch = useDispatch();

  const { phones, isLoading } = useSelector((state) => state.phones);

  let phoneCompany = [];
  phones && phones.map((phone) => phoneCompany.push(phone.company));
  let uniquePhoneCompany = [...new Set(phoneCompany)];

  useEffect(() => {
    // dispatch(getAllPhones());
    dispatch(getPhones(searchKeyword, price, categoryItem));
  }, [dispatch, searchKeyword, price, categoryItem]);

  if (isLoading) {
    <Loader />;
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    setSearchKeyword(keyword.trim());
    if (uniquePhoneCompany.includes(keyword)) {
      navigate(`/company/${keyword}`);
    } else {
      navigate(`/phones/${keyword}`);
    }
    setKeyword("");
  };

  return (
    <Fragment>
      <MetaData title="Search Phone" />
      <form className="searchBox py-4" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Phone ..."
          value={keyword}
          onChange={searchHandler}
        />
        <input type="submit" value="Search" />
      </form>

      <div className="container-fluid search-body">
        <div className="filterBox">
          <div className="price my-3">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={10000}
              max={250000}
            />
          </div>
          <div className="category-item">
            <Typography>Category</Typography>
            <ul>
              {category.map((elem, index) => (
                <li key={index} onClick={() => setCategoryItem(elem)}>
                  {elem}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center my-4">
            {phones &&
              phones.map((phone) => (
                <div
                  key={phone._id}
                  className="card col-md-4 col-lg-4 col-sm-2"
                  style={{ width: "11rem", height: "16rem" }}
                >
                  <PhoneCard phone={phone} width={1} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
