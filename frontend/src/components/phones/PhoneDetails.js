import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePhone } from "../../redux/actions/phoneAction";
import Loader from "../loader/Loader";
import "./PhoneDetails.css";

function PhoneDetails() {
  const dispatch = useDispatch();
  const { phone, isLoading } = useSelector((state) => state.phoneDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePhone(id));
  }, [dispatch, id]);

  if (!phone) return null;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="container">
        <div className="row phone">
          <h2 className="text-center name">{phone.name}</h2>
          <div className="col-lg-8" style={{ textAlign: "center" }}>
            <img
              src={phone.image.map((img) => img.url)}
              alt=""
              srcSet=""
              style={{ width: "50%" }}
              crossorigin="anonymous"
            />
          </div>
          <div className="col-lg-8" style={{ width: "79%" }}>
            <h2 className="name centerr">
              <span className="center">Specifications</span>
            </h2>
            <div className="tablee">
              <table className="table table-striped tableText" border="2px">
                <tr>
                  <th>Storage & RAM</th>
                  <td>
                    <b>
                      {phone.storage}+{phone.RAM}
                    </b>
                    <p className="detailsPara">
                      External Memory: {phone.externalMemory}
                    </p>
                  </td>
                </tr>

                <tr>
                  <th>Display</th>
                  <td>
                    <b>{phone.display}</b>

                    {phone.displayExtraOne !== undefined && (
                      <p className="detailsPara">{phone.displayExtraOne}</p>
                    )}
                    {phone.displayExtraTwo !== undefined && (
                      <p className="detailsPara">{phone.displayExtraTwo}</p>
                    )}
                    {phone.displayExtraThree !== "" && (
                      <p className="detailsPara">{phone.displayExtraThree}</p>
                    )}
                    {phone.displayExtraFour !== "" && (
                      <p className="detailsPara">{phone.displayExtraFour}</p>
                    )}
                    {phone.displayExtraFive !== "" && (
                      <p className="detailsPara">{phone.displayExtraFive}</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>
                    <b>{phone.processor}</b>
                    {phone.processorExtraOne !== "" && (
                      <p className="detailsPara">{phone.processorExtraOne}</p>
                    )}
                    {phone.processorExtraTwo !== "" && (
                      <p className="detailsPara">{phone.processorExtraTwo}</p>
                    )}
                    {phone.processorExtraThree !== "" && (
                      <p className="detailsPara">{phone.processorExtraThree}</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Camera</th>
                  <td>
                    <b>{phone.camera}</b>
                    {phone.cameraExtraOne !== "" && (
                      <p className="detailsPara">
                        Front: {phone.cameraExtraOne}
                      </p>
                    )}
                    {phone.cameraExtraTwo !== "" && (
                      <p className="detailsPara">
                        Front: {phone.cameraExtraTwo}
                      </p>
                    )}
                    {phone.cameraExtraThree !== "" && (
                      <p className="detailsPara">{phone.cameraExtraThree}</p>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Battery</th>
                  <td>
                    <b>{phone.battery}</b>
                    {phone.batteryExtraOne !== "" && (
                      <p className="detailsPara">{phone.batteryExtraOne}</p>
                    )}
                    {phone.batteryExtraTwo !== "" && (
                      <p className="detailsPara">{phone.batteryExtraTwo}</p>
                    )}
                    {phone.batteryExtraThree !== "" && (
                      <p className="detailsPara">{phone.batteryExtraThree}</p>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Security & Authentication</th>
                  <td>
                    <b>{phone.security}</b>
                    {phone.securityExtraOne !== "" && (
                      <p className="detailsPara">{phone.securityExtraOne}</p>
                    )}
                    {phone.securityExtraTwo !== "" && (
                      <p className="detailsPara">{phone.securityExtraTwo}</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>NFC</th>
                  <td>
                    <b>{phone.nfc}</b>
                    {phone.nfcExtraOne !== "" && (
                      <p className="detailsPara">{phone.nfcExtraOne}</p>
                    )}
                    {phone.nfcExtraTwo !== "" && (
                      <p className="detailsPara">{phone.nfcExtraTwo}</p>
                    )}
                    {phone.nfcExtraThree !== "" && (
                      <p className="detailsPara">{phone.nfcExtraThree}</p>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Networks</th>
                  <td>
                    <b>{phone.network}</b>

                    {phone.networkExtraOne && (
                      <p className="detailsPara">{phone.networkExtraOne}</p>
                    )}
                    {phone.networkExtraTwo && (
                      <p className="detailsPara">{phone.networkExtraTwo}</p>
                    )}
                    {phone.networkExtraThree && (
                      <p className="detailsPara">{phone.networkExtraThree}</p>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Sensors</th>
                  <td>
                    <b>{phone.sensors}</b>
                    {phone.sensorsExtraOne !== "" && (
                      <p className="detailsPara">{phone.sensorsExtraOne}</p>
                    )}
                    {phone.sensorsExtraTwo !== "" && (
                      <p className="detailsPara">{phone.sensorsExtraTwo}</p>
                    )}
                    {phone.sensorsExtraThree !== "" && (
                      <p className="detailsPara">{phone.sensorsExtraThree}</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>
                    <b>{phone.os}</b>
                    {phone.osExtraOne !== "" && (
                      <p className="detailsPara">{phone.osExtraOne}</p>
                    )}
                    {phone.osExtraTwo !== "" && (
                      <p className="detailsPara">{phone.osExtraTwo}</p>
                    )}
                    {phone.osExtraThree !== "" && (
                      <p className="detailsPara">{phone.osExtraThree}</p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Package Contains</th>
                  <td>
                    <b>{phone.packagecontains}</b>
                    {phone.packagecontainsExtraOne !== "" && (
                      <p className="detailsPara">
                        {phone.packagecontainsExtraOne}
                      </p>
                    )}
                    {phone.packagecontainsExtraTwo !== "" && (
                      <p className="detailsPara">
                        {phone.packagecontainsExtraTwo}
                      </p>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <b>&#x20b9; {phone.price}</b>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
