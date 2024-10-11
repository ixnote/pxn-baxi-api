import axios from "axios";
import dotenv from "dotenv";
import asyncHandler from "../middleware/async.js";
dotenv.config();

const baseURL = process.env.BAXI_BASE_URL;
const token = process.env.BAXI_API_KEY;
// console.log(token)

const options = {
  timeout: 1000 * 60,
  headers: {
    "content-type": "application/json",
    "x-api-key": token,
  },
};

// const login = () => {
//   const header = {
//     timeout: 1000 * 60,
//     headers: {
//       "content-type": "application/json",
//       Authorization:
//         "Basic " +
//         new Buffer.from(
//           process.env.BAXI_USERNAME + ":" + process.env.BAXI_SECRET,
//           "utf8"
//         ).toString("base64"),
//     },
//   });

//   const response = await axios.post(`${baseURL}/api/v1/auth/login`, {},

// });

export const getAllBillerCategory = asyncHandler(async (req, res, next) => {
  console.log("hereeeeeee");
  const response = await axios.get(`${baseURL}/billers/category/all`, options);
  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const getBillerType = asyncHandler(async (req, res, next) => {
  const { type } = req.params;
  console.log("🚀 ~ getBillerType ~ type:", type);
  //console.log(auth)
  const response = await axios.get(
    `${baseURL}/services/${type}/providers`,
    options
  );

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const accountVerify = asyncHandler(async (req, res, next) => {
  const payload = req.body;
  const uri = `${baseURL}/services/namefinder/query`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, payload, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

//AIRTIME ENDPOINTS

export const airtimeRequest = asyncHandler(async (req, res, next) => {
  const { user_id, ...payload } = req.body;
  const uri = `${baseURL}/services/airtime/request`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, payload, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

//DATABUNDLE ENDPOINTS

export const getDataBundles = asyncHandler(async (req, res, next) => {
  const { service_type } = req.body;
  //console.log(auth)
  const uri = `${baseURL}/services/databundle/bundles`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, { service_type }, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const databundleRequest = asyncHandler(
  async ({ user_id, ...payload }) => {
    const uri = `${baseURL}/services/databundle/request`;
    const encodedURI = encodeURI(uri);
    const response = await axios.post(encodedURI, payload, options);

    console.log("🚀 ~ getBillerType ~ response:", response.data);
    return res.status(200).send(response.data);
  }
);

//ELECTRICITY ENDPOINTS

export const getElectricityBillers = asyncHandler(async (req, res, next) => {
  //console.log(auth)
  const response = await axios.get(
    `${baseURL}/services/electricity/
    billers`,
    options
  );
  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const elecricityRequest = asyncHandler(async (req, res, next) => {
  const payload = req.body;
  const uri = `${baseURL}/services/electricity/request`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, payload, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

//CABLE TV ENDPOINTS

export const getMultichoiceList = asyncHandler(async (req, res, nex) => {
  const { service_type } = req.body;
  //console.log(auth)
  const uri = `${baseURL}/services/multichoice/list`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, { service_type }, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const getMultichoiceAdons = asyncHandler(async (req, res, next) => {
  const payload = req.body;
  //console.log(auth)
  const uri = `${baseURL}/services/multichoice/addons`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, payload, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});

export const cabletvRequest = asyncHandler(async (req, res, next) => {
  const payload = req.body;
  const uri = `${baseURL}/services/multichoice/request`;
  const encodedURI = encodeURI(uri);
  const response = await axios.post(encodedURI, payload, options);

  console.log("🚀 ~ getBillerType ~ response:", response.data);
  return res.status(200).send(response.data);
});
