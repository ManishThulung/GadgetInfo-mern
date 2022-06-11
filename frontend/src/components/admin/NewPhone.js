import React, { Fragment, useEffect, useState } from "react";
import "./NewPhone.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { CREATE_PHONE_RESET } from "../../redux/constants/constants";
import { createPhone } from "../../redux/actions/phoneAction";

const NewPhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newPhone);

  const [image, setImage] = useState("/Profile.png");
  const [imagePreview, setImagePreview] = useState(null);

  const [phone, setPhone] = useState({
    company: "",
    name: "",
    RAM: "",
    processor: "",
    display: "",
    storage: "",
    camera: "",
    os: "",
    category: "",
    battery: "",
    network: "",
    security: "",
    sensors: "",
    nfc: "",
    packagecontains: "",
    price: "",
    displayExtraOne: "",
    externalMemory: "",
    processorExtraOne: "",
    processorExtraTwo: "",
    processorExtraThree: "",
    displayExtraTwo: "",
    displayExtraThree: "",
    displayExtraFour: "",
    displayExtraFive: "",
    cameraExtraOne: "",
    cameraExtraTwo: "",
    cameraExtraThree: "",
    batteryExtraOne: "",
    batteryExtraTwo: "",
    batteryExtraThree: "",
    osExtraOne: "",
    osExtraTwo: "",
    osExtraThree: "",
    sensorsExtraOne: "",
    sensorsExtraTwo: "",
    sensorsExtraThree: "",
    networkExtraOne: "",
    networkExtraTwo: "",
    networkExtraThree: "",
    nfcExtraOne: "",
    nfcExtraTwo: "",
    nfcExtraThree: "",
    securityExtraOne: "",
    securityExtraTwo: "",
    packagecontainsExtraOne: "",
    packagecontainsExtraTwo: "",
  });

  const {
    company,
    name,
    RAM,
    processor,
    display,
    storage,
    camera,
    os,
    category,
    battery,
    network,
    security,
    sensors,
    nfc,
    packagecontains,
    price,
    displayExtraOne,
    externalMemory,
    processorExtraOne,
    processorExtraTwo,
    processorExtraThree,
    displayExtraTwo,
    displayExtraThree,
    displayExtraFour,
    displayExtraFive,
    cameraExtraOne,
    cameraExtraTwo,
    cameraExtraThree,
    batteryExtraOne,
    batteryExtraTwo,
    batteryExtraThree,
    osExtraOne,
    osExtraTwo,
    osExtraThree,
    sensorsExtraOne,
    sensorsExtraTwo,
    sensorsExtraThree,
    networkExtraOne,
    networkExtraTwo,
    networkExtraThree,
    nfcExtraOne,
    nfcExtraTwo,
    nfcExtraThree,
    securityExtraOne,
    securityExtraTwo,
    packagecontainsExtraOne,
    packagecontainsExtraTwo,
  } = phone;

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    if (success) {
      alert.success("Phone Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: CREATE_PHONE_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const inputHandler = (e) => {
    if (e.target.name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPhone({ ...phone, [e.target.name]: e.target.value });
    }
  };
  const createPhoneSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("company", company);
    myForm.set("RAM", RAM);
    myForm.set("processor", processor);
    myForm.set("display", display);
    myForm.set("storage", storage);
    myForm.set("camera", camera);
    myForm.set("os", os);
    myForm.set("category", category);
    myForm.set("battery", battery);
    myForm.set("network", network);
    myForm.set("security", security);
    myForm.set("sensors", sensors);
    myForm.set("packagecontains", packagecontains);
    myForm.set("nfc", nfc);
    myForm.set("price", price);
    myForm.set("image", image);
    myForm.set("displayExtraOne", displayExtraOne);
    myForm.set("externalMemory", externalMemory);
    myForm.set("processorExtraOne", processorExtraOne);
    myForm.set("processorExtraThree", processorExtraThree);
    myForm.set("processorExtraTwo", processorExtraTwo);
    myForm.set("displayExtraTwo", displayExtraTwo);
    myForm.set("displayExtraThree", displayExtraThree);
    myForm.set("displayExtraFour", displayExtraFour);
    myForm.set("displayExtraFive", displayExtraFive);
    myForm.set("cameraExtraOne", cameraExtraOne);
    myForm.set("cameraExtraTwo", cameraExtraTwo);
    myForm.set("cameraExtraThree", cameraExtraThree);
    myForm.set("batteryExtraOne", batteryExtraOne);
    myForm.set("batteryExtraTwo", batteryExtraTwo);
    myForm.set("batteryExtraThree", batteryExtraThree);
    myForm.set("osExtraOne", osExtraOne);
    myForm.set("osExtraTwo", osExtraTwo);
    myForm.set("osExtraThree", osExtraThree);
    myForm.set("sensorsExtraOne", sensorsExtraOne);
    myForm.set("sensorsExtraTwo", sensorsExtraTwo);
    myForm.set("sensorsExtraThree", sensorsExtraThree);
    myForm.set("networkExtraOne", networkExtraOne);
    myForm.set("networkExtraTwo", networkExtraTwo);
    myForm.set("networkExtraThree", networkExtraThree);
    myForm.set("nfcExtraOne", nfcExtraOne);
    myForm.set("nfcExtraTwo", nfcExtraTwo);
    myForm.set("nfcExtraThree", nfcExtraThree);
    myForm.set("securityExtraOne", securityExtraOne);
    myForm.set("securityExtraTwo", securityExtraTwo);
    myForm.set("packagecontainsExtraOne", packagecontainsExtraOne);
    myForm.set("packagecontainsExtraTwo", packagecontainsExtraTwo);

    dispatch(createPhone(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createPhoneSubmitHandler}
          >
            <h1>Create Phone</h1>

            <div>
              <input
                type="text"
                id="company"
                placeholder="Company"
                name="company"
                value={company}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Phone Name"
                name="name"
                value={name}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="RAM"
                placeholder="RAM"
                name="RAM"
                value={RAM}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="processor"
                placeholder="Processor"
                name="processor"
                value={processor}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="processorExtraOne"
                placeholder="Processor Extra Information"
                name="processorExtraOne"
                value={processorExtraOne}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="processorExtraTwo"
                placeholder="Processor Extra Information"
                name="processorExtraTwo"
                value={processorExtraTwo}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="processorExtraThree"
                placeholder="Processor Extra Information"
                name="processorExtraThree"
                value={processorExtraThree}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="display"
                placeholder="Display"
                name="display"
                value={display}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraOne"
                placeholder="Display Extra Information"
                name="displayExtraOne"
                value={displayExtraOne}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraTwo"
                placeholder="Display Extra Information"
                name="displayExtraTwo"
                value={displayExtraTwo}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraThree"
                placeholder="Display Extra Information"
                name="displayExtraThree"
                value={displayExtraThree}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraFour"
                placeholder="Display Extra Information"
                name="displayExtraFour"
                value={displayExtraFour}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraFive"
                placeholder="Display Extra Information"
                name="displayExtraFive"
                value={displayExtraFive}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="storage"
                placeholder="Storage"
                name="storage"
                value={storage}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="externalMemory"
                placeholder="External Memory"
                name="externalMemory"
                value={externalMemory}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="camera"
                placeholder="Camera"
                name="camera"
                value={camera}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraOne"
                placeholder="Camera Extra Information"
                name="cameraExtraOne"
                value={cameraExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraTwo"
                placeholder="Camera Extra Information"
                name="cameraExtraTwo"
                value={cameraExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraThree"
                placeholder="Camera Extra Information"
                name="cameraExtraThree"
                value={cameraExtraThree}
                onChange={inputHandler}
              />
            </div>

            <div>
              <input
                type="text"
                id="os"
                placeholder="Operating System"
                name="os"
                value={os}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraOne"
                placeholder="Operating System Extra Information"
                name="osExtraOne"
                value={osExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraTwo"
                placeholder="Operating System Extra Information"
                name="osExtraTwo"
                value={osExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraThree"
                placeholder="Operating System Extra Information"
                name="osExtraThree"
                value={osExtraThree}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="battery"
                placeholder="Battery"
                name="battery"
                value={battery}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraOne"
                placeholder="Battery Extra Information"
                name="batteryExtraOne"
                value={batteryExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraTwo"
                placeholder="Battery Extra Information"
                name="batteryExtraTwo"
                value={batteryExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraThree"
                placeholder="Battery Extra Information"
                name="batteryExtraThree"
                value={batteryExtraThree}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="security"
                placeholder="Security"
                name="security"
                value={security}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="securityExtraOne"
                placeholder="Security Extra Information"
                name="securityExtraOne"
                value={securityExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="securityExtraTwo"
                placeholder="Security Extra Information"
                name="securityExtraTwo"
                value={securityExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfc"
                placeholder="NFC"
                name="nfc"
                value={nfc}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraOne"
                placeholder="NFC Extra Information"
                name="nfcExtraOne"
                value={nfcExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraTwo"
                placeholder="NFC Extra Information"
                name="nfcExtraTwo"
                value={nfcExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraThree"
                placeholder="NFC Extra Information"
                name="nfcExtraThree"
                value={nfcExtraThree}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="network"
                placeholder="Network"
                name="network"
                value={network}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraOne"
                placeholder="Network Extra Information"
                name="networkExtraOne"
                value={networkExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraTwo"
                placeholder="Network Extra Information"
                name="networkExtraTwo"
                value={networkExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraTwo"
                placeholder="Network Extra Information"
                name="networkExtraTwo"
                value={networkExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensors"
                placeholder="Sensors"
                name="sensors"
                value={sensors}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraOne"
                placeholder="Sensors Extra Information"
                name="sensorsExtraOne"
                value={sensorsExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraTwo"
                placeholder="Sensors Extra Information"
                name="sensorsExtraTwo"
                value={sensorsExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraThree"
                placeholder="Sensors Extra Information"
                name="sensorsExtraThree"
                value={sensorsExtraThree}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="category"
                placeholder="Category"
                name="category"
                value={category}
                onChange={inputHandler}
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontains"
                placeholder="Package Contains"
                name="packagecontains"
                value={packagecontains}
                onChange={inputHandler}
                required
                minlegth="2"
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontainsExtraOne"
                placeholder="Package Contains Extra Information"
                name="packagecontainsExtraOne"
                value={packagecontainsExtraOne}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontainsExtraTwo"
                placeholder="Package Contains Extra Information"
                name="packagecontainsExtraTwo"
                value={packagecontainsExtraTwo}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="price"
                placeholder="Price"
                name="price"
                value={price}
                onChange={inputHandler}
                required
                minlegth="4"
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={inputHandler}
                required
                multiple
              />
            </div>
            {imagePreview && (
              <div id="createProductFormImage">
                <img src={imagePreview} alt="Product Preview" />
              </div>
            )}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPhone;
