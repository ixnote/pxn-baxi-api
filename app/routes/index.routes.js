import { verifyToken } from "../middleware/auth.js";
import router from "./utility.routes.js";
export default function (app) {
  app.use("/v1/utility", [verifyToken], router);
}
