import express from "express";
import NumberController from "./controllers/Number/NumberController";

const numberController = new NumberController();

const routes = express.Router();

routes.get('/numbers/getNumberInformation/:number', numberController.getNumberInformation);

export default routes;