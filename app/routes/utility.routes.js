import express from "express";
import * as UtilityCntrl from "../controllers/utility.controller.js";
const router = express.Router();

router
  .get("/getAllBillerCategory", UtilityCntrl.getAllBillerCategory)
  .get("/getBillerType/:type", UtilityCntrl.getBillerType)
  .post("/accountVerify", UtilityCntrl.accountVerify)
  .post("/airtimeRequest", UtilityCntrl.airtimeRequest)
  .post("/getDataBundles", UtilityCntrl.getDataBundles)
  .post("/databundleRequest", UtilityCntrl.databundleRequest)
  .get("/getElectricityBillers", UtilityCntrl.getElectricityBillers)
  .post("/elecricityRequest", UtilityCntrl.elecricityRequest)
  .post("/getMultichoiceList", UtilityCntrl.getMultichoiceList)
  .post("/getMultichoiceAdons", UtilityCntrl.getMultichoiceAdons)
  .post("/cabletvRequest", UtilityCntrl.cabletvRequest);
export default router;
