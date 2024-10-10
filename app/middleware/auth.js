import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "./async.js";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = asyncHandler(async (req, res, next) => {
  //Get token from headers
  let token = req.headers["x-access-token"];

  if (!token) {
    return next(new ErrorResponse("No token provided", 401));
  }
  if (token !== process.env.API_TOKEN)
    return next(new ErrorResponse("Invalid token provided", 401));
  //verify and decode token

  console.log("here");
  next();
});
