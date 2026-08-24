import { Router } from "express";
import { getAllTags } from "../controllers/tagController";

const tagRouter = Router();

tagRouter.route('/').get(getAllTags);

export { tagRouter };