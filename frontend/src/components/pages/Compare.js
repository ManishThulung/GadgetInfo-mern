import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Compare.css";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MetaData from "../layout/Metadata";
import {
  clearErrors,
  comparePhones,
  getAllPhones,
} from "../../redux/actions/phoneAction";
import { useAlert } from "react-alert";

function Compare() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {
    phones,
    isLoading,
    error: allError,
  } = useSelector((state) => state.phones);

  const [phoneOne, setPhoneOne] = useState("");
  const [phoneTwo, setPhoneTwo] = useState("");

  const [allPhones, setAllPhones] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [secondSuggestions, setSecondSuggestions] = useState([]);

  // console.log(phones);
  // console.log(allPhones);

  const onSuggestHandler = (name) => {
    setPhoneOne(name);
    setSuggestions([]);
  };

  const onChangeHandler = (name) => {
    let matches = [];
    if (name.length > 0) {
      matches = allPhones.filter((phone) => {
        const regex = new RegExp(`${name}`, "gi");
        return phone.name.match(regex);
      });
    }
    setSuggestions(matches);
    setPhoneOne(name);
  };

  const secondOnSuggestHandler = (name) => {
    setPhoneTwo(name);
    setSecondSuggestions([]);
  };

  const secondOnChangeHandler = (name) => {
    let matches = [];
    if (name.length > 0) {
      matches = allPhones.filter((phone) => {
        const regex = new RegExp(`${name}`, "gi");
        return phone.name.match(regex);
      });
    }
    setSecondSuggestions(matches);
    setPhoneTwo(name);
  };

  const {
    loading,
    error,
    phoneOne: firstPhone,
    phoneTwo: secondPhone,
  } = useSelector((state) => state.comparePhone);

  const phoneCompareHandler = (e) => {
    e.preventDefault();

    dispatch(comparePhones(phoneOne, phoneTwo));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    setPhoneOne("");
    setPhoneTwo("");
  };

  useEffect(() => {
    dispatch(getAllPhones());
    setAllPhones(phones);

    if (allError) {
      alert.error(allError);
      dispatch(clearErrors());
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      console.log(error);
    }
  }, [phones, alert, error, allError, dispatch]);

  return (
    <div>
      <MetaData title="Compare - Phones" />
      <form
        className="compareForm"
        autoComplete="off"
        onSubmit={phoneCompareHandler}
      >
        <div className="compareBox">
          <div className="compareDiv">
            <div className="inpDiv">
              <PhoneIphoneOutlinedIcon />
              <input
                className="compareInput"
                type="text"
                placeholder="First Phone Name.."
                name="phoneOnee"
                value={phoneOne}
                onChange={(e) => onChangeHandler(e.target.value)}
                // onBlur={() => {
                //   setTimeout(() => {
                //     setSuggestions([]);
                //   }, 100);
                // }}
                required
              />
            </div>
            {!isLoading && suggestions.length !== 0 && (
              <div className="dataResult">
                {suggestions.slice(0, 13).map((value, i) => {
                  return (
                    <div
                      key={i}
                      className="dataItem"
                      onClick={() => onSuggestHandler(value.name)}
                    >
                      <p className="my-1">{value.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="compareSpan">
            <span> Vs. </span>
          </div>
          <div className="compareDiv">
            <div className="inpDiv">
              <PhoneIphoneOutlinedIcon />
              <input
                className="compareInput"
                type="text"
                placeholder="Second Phone Name.."
                name="phoneOnee"
                value={phoneTwo}
                onChange={(e) => secondOnChangeHandler(e.target.value)}
                // onBlur={() => {
                //   setTimeout(() => {
                //     setSecondSuggestions([]);
                //   }, 100);
                // }}
                required
              />
            </div>
            {!isLoading && secondSuggestions.length !== 0 && (
              <div className="dataResult">
                {secondSuggestions.slice(0, 13).map((value, i) => {
                  return (
                    <div
                      key={i}
                      className="dataItem"
                      onClick={() => secondOnSuggestHandler(value.name)}
                    >
                      <p className="my-1">{value.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="compareBtn">
          <input type="submit" value="compare" />
        </div>
      </form>
      <div>
        {/* {!loading ? console.log(firstPhone, secondPhone) : <Loader />} */}
        {/* {!loading && ( */}
        {!loading && (
          <div className="mainn">
            <div className="table-responsive">
              <table className="table table-striped text-successtable-border border-light">
                <thead className="border-light">
                  <tr>
                    <th scope="col">
                      <strong
                        style={{
                          display: "block",
                          textAlign: "center",
                          fontSize: "large",
                        }}
                      >
                        Features
                      </strong>
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      {/* {!loading && ( */}
                      <img
                        className="phoneC"
                        src={firstPhone.image.map((img) => img.url)}
                        crossorigin="anonymous"
                        alt={firstPhone.name}
                      />
                      {/* )} */}

                      <strong
                        style={{
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        {firstPhone.name}
                      </strong>
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      {/* {!loading && ( */}
                      <img
                        className="phoneC"
                        src={secondPhone.image.map((img) => img.url)}
                        crossorigin="anonymous"
                        alt={secondPhone.name}
                      />
                      {/* )} */}

                      <strong
                        style={{
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        {secondPhone.name}
                      </strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Storage & RAM</th>
                    <td>
                      <b>
                        {firstPhone.storage}+{firstPhone.RAM}
                      </b>
                      <p>External Memory: {firstPhone.externalMemory}</p>
                    </td>
                    <td>
                      <b>
                        {secondPhone.storage}+{secondPhone.RAM}
                      </b>
                      <p>External Memory: {secondPhone.externalMemory}</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Display</th>
                    <td>
                      <b>{firstPhone.display}</b>

                      {firstPhone.displayExtraOne !== undefined && (
                        <p>{firstPhone.displayExtraOne}</p>
                      )}
                      {firstPhone.displayExtraTwo !== undefined && (
                        <p>{firstPhone.displayExtraTwo}</p>
                      )}
                      {firstPhone.displayExtraThree !== "" && (
                        <p>{firstPhone.displayExtraThree}</p>
                      )}
                      {firstPhone.displayExtraFour !== "" && (
                        <p>{firstPhone.displayExtraFour}</p>
                      )}
                      {firstPhone.displayExtraFive !== "" && (
                        <p>{firstPhone.displayExtraFive}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.display}</b>

                      {secondPhone.displayExtraOne !== undefined && (
                        <p>{secondPhone.displayExtraOne}</p>
                      )}
                      {secondPhone.displayExtraTwo !== undefined && (
                        <p>{secondPhone.displayExtraTwo}</p>
                      )}
                      {secondPhone.displayExtraThree !== "" && (
                        <p>{secondPhone.displayExtraThree}</p>
                      )}
                      {secondPhone.displayExtraFour !== "" && (
                        <p>{secondPhone.displayExtraFour}</p>
                      )}
                      {secondPhone.displayExtraFive !== "" && (
                        <p>{secondPhone.displayExtraFive}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Processor</th>
                    <td>
                      <b>{firstPhone.processor}</b>
                      {firstPhone.processorExtraOne !== "" && (
                        <p>{firstPhone.processorExtraOne}</p>
                      )}
                      {firstPhone.processorExtraTwo !== "" && (
                        <p>{firstPhone.processorExtraTwo}</p>
                      )}
                      {firstPhone.processorExtraThree !== "" && (
                        <p>{firstPhone.processorExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.processor}</b>
                      {secondPhone.processorExtraOne !== "" && (
                        <p>{secondPhone.processorExtraOne}</p>
                      )}
                      {secondPhone.processorExtraTwo !== "" && (
                        <p>{secondPhone.processorExtraTwo}</p>
                      )}
                      {secondPhone.processorExtraThree !== "" && (
                        <p>{secondPhone.processorExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Camera</th>
                    <td>
                      <b>{firstPhone.camera}</b>
                      {firstPhone.cameraExtraOne !== "" && (
                        <p>Front: {firstPhone.cameraExtraOne}</p>
                      )}
                      {firstPhone.cameraExtraTwo !== "" && (
                        <p>Front: {firstPhone.cameraExtraTwo}</p>
                      )}
                      {firstPhone.cameraExtraThree !== "" && (
                        <p>{firstPhone.cameraExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.camera}</b>
                      {secondPhone.cameraExtraOne !== "" && (
                        <p>Front: {secondPhone.cameraExtraOne}</p>
                      )}
                      {secondPhone.cameraExtraTwo !== "" && (
                        <p>Front: {secondPhone.cameraExtraTwo}</p>
                      )}
                      {secondPhone.cameraExtraThree !== "" && (
                        <p>{secondPhone.cameraExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Battery</th>
                    <td>
                      <b>{firstPhone.battery}</b>
                      {firstPhone.batteryExtraOne !== "" && (
                        <p>{firstPhone.batteryExtraOne}</p>
                      )}
                      {firstPhone.batteryExtraTwo !== "" && (
                        <p>{firstPhone.batteryExtraTwo}</p>
                      )}
                      {firstPhone.batteryExtraThree !== "" && (
                        <p>{firstPhone.batteryExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.battery}</b>
                      {secondPhone.batteryExtraOne !== "" && (
                        <p>{secondPhone.batteryExtraOne}</p>
                      )}
                      {secondPhone.batteryExtraTwo !== "" && (
                        <p>{secondPhone.batteryExtraTwo}</p>
                      )}
                      {secondPhone.batteryExtraThree !== "" && (
                        <p>{secondPhone.batteryExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Security & Authentication</th>
                    <td>
                      <b>{firstPhone.security}</b>
                      {firstPhone.securityExtraOne !== "" && (
                        <p>{firstPhone.securityExtraOne}</p>
                      )}
                      {firstPhone.securityExtraTwo !== "" && (
                        <p>{firstPhone.securityExtraTwo}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.security}</b>
                      {secondPhone.securityExtraOne !== "" && (
                        <p>{secondPhone.securityExtraOne}</p>
                      )}
                      {secondPhone.securityExtraTwo !== "" && (
                        <p>{secondPhone.securityExtraTwo}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">NFC</th>
                    <td>
                      <b>{firstPhone.nfc}</b>
                      {firstPhone.nfcExtraOne !== "" && (
                        <p>{firstPhone.nfcExtraOne}</p>
                      )}
                      {firstPhone.nfcExtraTwo !== "" && (
                        <p>{firstPhone.nfcExtraTwo}</p>
                      )}
                      {firstPhone.nfcExtraThree !== "" && (
                        <p>{firstPhone.nfcExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.nfc}</b>
                      {secondPhone.nfcExtraOne !== "" && (
                        <p>{secondPhone.nfcExtraOne}</p>
                      )}
                      {secondPhone.nfcExtraTwo !== "" && (
                        <p>{secondPhone.nfcExtraTwo}</p>
                      )}
                      {secondPhone.nfcExtraThree !== "" && (
                        <p>{secondPhone.nfcExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Networks</th>
                    <td>
                      <b>{firstPhone.network}</b>

                      {firstPhone.networkExtraOne && (
                        <p>{firstPhone.networkExtraOne}</p>
                      )}
                      {firstPhone.networkExtraTwo && (
                        <p>{firstPhone.networkExtraTwo}</p>
                      )}
                      {firstPhone.networkExtraThree && (
                        <p>{firstPhone.networkExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.network}</b>

                      {secondPhone.networkExtraOne && (
                        <p>{secondPhone.networkExtraOne}</p>
                      )}
                      {secondPhone.networkExtraTwo && (
                        <p>{secondPhone.networkExtraTwo}</p>
                      )}
                      {secondPhone.networkExtraThree && (
                        <p>{secondPhone.networkExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Sensors</th>
                    <td>
                      <b>{firstPhone.sensors}</b>
                      {firstPhone.sensorsExtraOne !== "" && (
                        <p>{firstPhone.sensorsExtraOne}</p>
                      )}
                      {firstPhone.sensorsExtraTwo !== "" && (
                        <p>{firstPhone.sensorsExtraTwo}</p>
                      )}
                      {firstPhone.sensorsExtraThree !== "" && (
                        <p>{firstPhone.sensorsExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.sensors}</b>
                      {secondPhone.sensorsExtraOne !== "" && (
                        <p>{secondPhone.sensorsExtraOne}</p>
                      )}
                      {secondPhone.sensorsExtraTwo !== "" && (
                        <p>{secondPhone.sensorsExtraTwo}</p>
                      )}
                      {secondPhone.sensorsExtraThree !== "" && (
                        <p>{secondPhone.sensorsExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Operating System</th>
                    <td>
                      <b>{firstPhone.os}</b>
                      {firstPhone.osExtraOne !== "" && (
                        <p>{firstPhone.osExtraOne}</p>
                      )}
                      {firstPhone.osExtraTwo !== "" && (
                        <p>{firstPhone.osExtraTwo}</p>
                      )}
                      {firstPhone.osExtraThree !== "" && (
                        <p>{firstPhone.osExtraThree}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.os}</b>
                      {secondPhone.osExtraOne !== "" && (
                        <p>{secondPhone.osExtraOne}</p>
                      )}
                      {secondPhone.osExtraTwo !== "" && (
                        <p>{secondPhone.osExtraTwo}</p>
                      )}
                      {secondPhone.osExtraThree !== "" && (
                        <p>{secondPhone.osExtraThree}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Package Contains</th>
                    <td>
                      <b>{firstPhone.packagecontains}</b>
                      {firstPhone.packagecontainsExtraOne !== "" && (
                        <p>{firstPhone.packagecontainsExtraOne}</p>
                      )}
                      {firstPhone.packagecontainsExtraTwo !== "" && (
                        <p>{firstPhone.packagecontainsExtraTwo}</p>
                      )}
                    </td>
                    <td>
                      <b>{secondPhone.packagecontains}</b>
                      {secondPhone.packagecontainsExtraOne !== "" && (
                        <p>{secondPhone.packagecontainsExtraOne}</p>
                      )}
                      {secondPhone.packagecontainsExtraTwo !== "" && (
                        <p>{secondPhone.packagecontainsExtraTwo}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Price</th>
                    <td className="fw-bold">&#x20b9; {firstPhone.price}</td>
                    <td className="fw-bold">&#x20b9; {secondPhone.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compare;
