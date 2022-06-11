import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../admin/UpdatePhone.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import SideBar from "../admin/Sidebar";
import { useNavigate } from "react-router-dom";
import { UPDATE_PHONE_RESET } from "../../redux/constants/constants";
import {
  clearErrors,
  getSinglePhone,
  updatePhone,
} from "../../redux/actions/phoneAction";
import Loader from "../loader/Loader";

const CreatorUpdatePhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { id } = useParams();

  const { phone, isLoading } = useSelector((state) => state.phoneDetails);

  const { loading, error, isUpdated } = useSelector(
    (state) => state.deleteUpdate
  );

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [company, setcompany] = useState("");
  const [name, setname] = useState("");
  const [RAM, setRAM] = useState("");
  const [processor, setprocessor] = useState("");
  const [display, setdisplay] = useState("");
  const [storage, setstorage] = useState("");
  const [camera, setcamera] = useState("");
  const [os, setos] = useState("");
  const [category, setcategory] = useState("");
  const [battery, setbattery] = useState("");
  const [network, setnetwork] = useState("");
  const [security, setsecurity] = useState("");
  const [sensors, setsensors] = useState("");
  const [nfc, setnfc] = useState("");
  const [packagecontains, setpackagecontains] = useState("");
  const [price, setprice] = useState("");
  const [displayExtraOne, setDisplayExtraOne] = useState("");
  const [externalMemory, setExternalMemory] = useState("");
  const [processorExtraOne, setProcessorExtraOne] = useState("");
  const [processorExtraTwo, setProcessorExtraTwo] = useState("");
  const [processorExtraThree, setProcessorExtraThree] = useState("");
  const [displayExtraTwo, setDisplayExtraTwo] = useState("");
  const [displayExtraThree, setDisplayExtraThree] = useState("");
  const [displayExtraFour, setDisplayExtraFour] = useState("");
  const [displayExtraFive, setDisplayExtraFive] = useState("");
  const [cameraExtraOne, setCameraExtraOne] = useState("");
  const [cameraExtraTwo, setCameraExtraTwo] = useState("");
  const [cameraExtraThree, setCameraExtraThree] = useState("");
  const [batteryExtraOne, setBatteryExtraOne] = useState("");
  const [batteryExtraTwo, setBatteryExtraTwo] = useState("");
  const [batteryExtraThree, setBatteryExtraThree] = useState("");
  const [osExtraOne, setOsExtraOne] = useState("");
  const [osExtraTwo, setOsExtraTwo] = useState("");
  const [osExtraThree, setOsExtraThree] = useState("");
  const [sensorsExtraOne, setSensorsExtraOne] = useState("");
  const [sensorsExtraTwo, setSensorsExtraTwo] = useState("");
  const [sensorsExtraThree, setSensorsExtraThree] = useState("");
  const [networkExtraOne, setNetworkExtraOne] = useState("");
  const [networkExtraTwo, setNetworkExtraTwo] = useState("");
  const [networkExtraThree, setNetworkExtraThree] = useState("");
  const [nfcExtraOne, setNfcExtraOne] = useState("");
  const [nfcExtraTwo, setNfcExtraTwo] = useState("");
  const [nfcExtraThree, setNfcExtraThree] = useState("");
  const [securityExtraOne, setSecurityExtraOne] = useState("");
  const [securityExtraTwo, setSecurityExtraTwo] = useState("");
  const [packagecontainsExtraOne, setPackagecontainsExtraOne] = useState("");
  const [packagecontainsExtraTwo, setPackagecontainsExtraTwo] = useState("");

  const inputHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const updatePhoneSubmitHandler = (e) => {
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
    myForm.set("nfc", nfc);
    myForm.set("packagecontains", packagecontains);
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

    dispatch(updatePhone(id, myForm));
  };

  useEffect(() => {
    // dispatch(getSinglePhone(id));
    if (phone._id !== id) {
      dispatch(getSinglePhone(id));
    } else {
      setcompany(phone.company);
      setname(phone.name);
      setRAM(phone.RAM);
      setprocessor(phone.processor);
      setdisplay(phone.display);
      setstorage(phone.storage);
      setcamera(phone.camera);
      setos(phone.os);
      setcategory(phone.category);
      setbattery(phone.battery);
      setnetwork(phone.network);
      setsecurity(phone.security);
      setsensors(phone.sensors);
      setnfc(phone.nfc);
      setpackagecontains(phone.packagecontains);
      setprice(phone.price);
      setImagePreview(phone.image.map((img) => img.url));
      setDisplayExtraOne(phone.displayExtraOne);
      setExternalMemory(phone.externalMemory);
      setProcessorExtraOne(phone.processorExtraOne);
      setProcessorExtraTwo(phone.processorExtraThree);
      setProcessorExtraThree(phone.processorExtraTwo);
      setDisplayExtraTwo(phone.displayExtraTwo);
      setDisplayExtraThree(phone.displayExtraThree);
      setDisplayExtraFour(phone.displayExtraFour);
      setDisplayExtraFive(phone.displayExtraFive);
      setCameraExtraOne(phone.cameraExtraOne);
      setCameraExtraTwo(phone.cameraExtraTwo);
      setCameraExtraThree(phone.cameraExtraThree);
      setBatteryExtraOne(phone.batteryExtraOne);
      setBatteryExtraTwo(phone.batteryExtraTwo);
      setBatteryExtraThree(phone.batteryExtraThree);
      setOsExtraOne(phone.osExtraOne);
      setOsExtraTwo(phone.osExtraTwo);
      setOsExtraThree(phone.osExtraThree);
      setSensorsExtraOne(phone.sensorsExtraOne);
      setSensorsExtraTwo(phone.sensorsExtraTwo);
      setSensorsExtraThree(phone.sensorsExtraThree);
      setNetworkExtraOne(phone.networkExtraOne);
      setNetworkExtraTwo(phone.networkExtraTwo);
      setNetworkExtraThree(phone.networkExtraThree);
      setNfcExtraOne(phone.nfcExtraOne);
      setNfcExtraTwo(phone.nfcExtraTwo);
      setNfcExtraThree(phone.nfcExtraThree);
      setSecurityExtraOne(phone.securityExtraOne);
      setSecurityExtraTwo(phone.securityExtraTwo);
      setPackagecontainsExtraOne(phone.packagecontainsExtraOne);
      setPackagecontainsExtraTwo(phone.packagecontainsExtraTwo);
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      navigate("/creator/phones");
      dispatch({ type: UPDATE_PHONE_RESET });
    }
  }, [dispatch, alert, error, navigate, isUpdated, id, phone, isLoading]);

  if (!phone) {
    return <Loader />;
  }
  return (
    <Fragment>
      <MetaData title="Update Phone" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updatePhoneSubmitHandler}
          >
            <h1>Update Phone</h1>

            <div>
              <input
                type="text"
                id="company"
                placeholder="Company"
                name="company"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Phone Name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="RAM"
                placeholder="RAM"
                name="RAM"
                value={RAM}
                onChange={(e) => setRAM(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="processor"
                placeholder="Processor"
                name="processor"
                value={processor}
                onChange={(e) => setprocessor(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="processorExtraOne"
                placeholder="Processor Extra Information"
                name="processorExtraOne"
                value={processorExtraOne}
                onChange={(e) => setProcessorExtraOne(e.target.value)}
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
                onChange={(e) => setProcessorExtraTwo(e.target.value)}
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
                onChange={(e) => setProcessorExtraThree(e.target.value)}
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
                onChange={(e) => setdisplay(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraOne"
                placeholder="Display Extra Information"
                name="displayExtraOne"
                value={displayExtraOne}
                onChange={(e) => setDisplayExtraOne(e.target.value)}
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
                onChange={(e) => setDisplayExtraTwo(e.target.value)}
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
                onChange={(e) => setDisplayExtraThree(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="displayExtraFour"
                placeholder="Display Extra Information"
                name="displayExtraFour"
                value={displayExtraFour}
                onChange={(e) => setDisplayExtraFour(e.target.value)}
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
                onChange={(e) => setDisplayExtraFive(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="storage"
                placeholder="Storage"
                name="storage"
                value={storage}
                onChange={(e) => setstorage(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="externalMemory"
                placeholder="External Memory"
                name="externalMemory"
                value={externalMemory}
                onChange={(e) => setExternalMemory(e.target.value)}
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
                onChange={(e) => setcamera(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraOne"
                placeholder="Camera Extra Information"
                name="cameraExtraOne"
                value={cameraExtraOne}
                onChange={(e) => setCameraExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraTwo"
                placeholder="Camera Extra Information"
                name="cameraExtraTwo"
                value={cameraExtraTwo}
                onChange={(e) => setCameraExtraTwo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="cameraExtraThree"
                placeholder="Camera Extra Information"
                name="cameraExtraThree"
                value={cameraExtraThree}
                onChange={(e) => setCameraExtraThree(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="os"
                placeholder="Operating System"
                name="os"
                value={os}
                onChange={(e) => setos(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraOne"
                placeholder="Operating System Extra Information"
                name="osExtraOne"
                value={osExtraOne}
                onChange={(e) => setOsExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraTwo"
                placeholder="Operating System Extra Information"
                name="osExtraTwo"
                value={osExtraTwo}
                onChange={(e) => setOsExtraTwo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="osExtraThree"
                placeholder="Operating System Extra Information"
                name="osExtraThree"
                value={osExtraThree}
                onChange={(e) => setOsExtraThree(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="battery"
                placeholder="Battery"
                name="battery"
                value={os}
                onChange={(e) => setbattery(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraOne"
                placeholder="Battery Extra Information"
                name="batteryExtraOne"
                value={batteryExtraOne}
                onChange={(e) => setBatteryExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraTwo"
                placeholder="Battery Extra Information"
                name="batteryExtraTwo"
                value={batteryExtraTwo}
                onChange={(e) => setBatteryExtraTwo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="batteryExtraThree"
                placeholder="Battery Extra Information"
                name="batteryExtraThree"
                value={batteryExtraThree}
                onChange={(e) => setBatteryExtraThree(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="security"
                placeholder="Security"
                name="security"
                value={security}
                onChange={(e) => setsecurity(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="securityExtraOne"
                placeholder="Security Extra Information"
                name="securityExtraOne"
                value={securityExtraOne}
                onChange={(e) => setSecurityExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="securityExtraTwo"
                placeholder="Security Extra Information"
                name="securityExtraTwo"
                value={securityExtraTwo}
                onChange={(e) => setSecurityExtraTwo(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="nfc"
                placeholder="NFC"
                name="nfc"
                value={nfc}
                onChange={(e) => setnfc(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraOne"
                placeholder="NFC Extra Information"
                name="nfcExtraOne"
                value={nfcExtraOne}
                onChange={(e) => setNfcExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraTwo"
                placeholder="NFC Extra Information"
                name="nfcExtraTwo"
                value={nfcExtraTwo}
                onChange={(e) => setNfcExtraTwo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfcExtraThree"
                placeholder="NFC Extra Information"
                name="nfcExtraThree"
                value={nfcExtraThree}
                onChange={(e) => setNfcExtraThree(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="network"
                placeholder="Network"
                name="network"
                value={network}
                onChange={(e) => setnetwork(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraOne"
                placeholder="Network Extra Information"
                name="networkExtraOne"
                value={networkExtraOne}
                onChange={(e) => setNetworkExtraOne(e.tagert.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraTwo"
                placeholder="Network Extra Information"
                name="networkExtraTwo"
                value={networkExtraTwo}
                onChange={(e) => setNetworkExtraTwo(e.tagert.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="networkExtraTwo"
                placeholder="Network Extra Information"
                name="networkExtraTwo"
                value={networkExtraTwo}
                onChange={(e) => setNetworkExtraThree(e.tagert.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="sensors"
                placeholder="Sensors"
                name="sensors"
                value={sensors}
                onChange={(e) => setsensors(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraOne"
                placeholder="Sensors Extra Information"
                name="sensorsExtraOne"
                value={sensorsExtraOne}
                onChange={(e) => setSensorsExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraTwo"
                placeholder="Sensors Extra Information"
                name="sensorsExtraTwo"
                value={sensorsExtraTwo}
                onChange={(e) => setSensorsExtraTwo(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensorsExtraThree"
                placeholder="Sensors Extra Information"
                name="sensorsExtraThree"
                value={sensorsExtraThree}
                onChange={(e) => setSensorsExtraThree(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="category"
                placeholder="Category"
                name="category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontains"
                placeholder="Package Contains"
                name="packagecontains"
                value={packagecontains}
                onChange={(e) => setpackagecontains(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontainsExtraOne"
                placeholder="Package Contains Extra Information"
                name="packagecontainsExtraOne"
                value={packagecontainsExtraOne}
                onChange={(e) => setPackagecontainsExtraOne(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontainsExtraTwo"
                placeholder="Package Contains Extra Information"
                name="packagecontainsExtraTwo"
                value={packagecontainsExtraTwo}
                onChange={(e) => setPackagecontainsExtraTwo(e.target.value)}
              />
            </div>

            <div>
              <input
                type="number"
                id="price"
                placeholder="Price"
                name="price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={inputHandler}
                multiple
              />
            </div>
            {imagePreview && (
              <div id="createProductFormImage">
                <img src={imagePreview} alt="Old Product Preview" />
              </div>
            )}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreatorUpdatePhone;
