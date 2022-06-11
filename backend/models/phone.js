const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  RAM: {
    type: String,
    required: true,
  },
  externalMemory: {
    type: String,
    default: "No",
  },
  processor: {
    type: String,
    required: true,
  },
  processorExtraOne: {
    type: String,
    default: "",
  },
  processorExtraTwo: {
    type: String,
    default: "",
  },
  processorExtraThree: {
    type: String,
    default: "",
  },
  display: {
    type: String,
    required: true,
  },
  displayExtraOne: {
    type: String,
    default: "",
  },
  displayExtraTwo: {
    default: "",
    type: String,
  },
  displayExtraThree: {
    type: String,
    default: "",
  },
  displayExtraFour: {
    type: String,
    default: "",
  },
  displayExtraFive: {
    type: String,
    default: "",
  },
  storage: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    required: true,
  },
  cameraExtraOne: {
    type: String,
    default: "",
  },
  cameraExtraTwo: {
    type: String,
    default: "",
  },
  cameraExtraThree: {
    type: String,
    default: "",
  },
  battery: {
    type: String,
    require: true,
  },
  batteryExtraOne: {
    type: String,
    default: "",
  },
  batteryExtraTwo: {
    type: String,
    default: "",
  },
  batteryExtraThree: {
    type: String,
    default: "",
  },
  os: {
    type: String,
    require: true,
  },
  osExtraOne: {
    type: String,
    default: "",
  },
  osExtraTwo: {
    type: String,
    default: "",
  },
  osExtraThree: {
    type: String,
    default: "",
  },
  sensors: {
    type: String,
    require: true,
  },
  sensorsExtraOne: {
    type: String,
    default: "",
  },
  sensorsExtraTwo: {
    type: String,
    default: "",
  },
  sensorsExtraThree: {
    type: String,
    default: "",
  },
  network: {
    type: String,
    require: true,
  },
  networkExtraOne: {
    type: String,
    default: "",
  },
  networkExtraTwo: {
    type: String,
    default: "",
  },
  networkExtraThree: {
    type: String,
    default: "",
  },
  nfc: {
    type: String,
    require: true,
  },
  nfcExtraOne: {
    type: String,
    default: "",
  },
  nfcExtraTwo: {
    type: String,
    default: "",
  },
  nfcExtraThree: {
    type: String,
    default: "",
  },
  security: {
    type: String,
    require: true,
  },
  securityExtraOne: {
    type: String,
    default: "",
  },
  securityExtraTwo: {
    type: String,
    default: "",
  },
  packagecontains: {
    type: String,
    require: true,
  },
  packagecontainsExtraOne: {
    type: String,
    default: "",
  },
  packagecontainsExtraTwo: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },

  image: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  creator: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Phone", phoneSchema);
