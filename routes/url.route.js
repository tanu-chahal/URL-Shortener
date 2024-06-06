import express from "express";
import {handleGetURLAnalytics, handleGenerateNewShortURL} from "../controllers/url.controller.js"

const router = express.Router();

router.get("/analytics/:shortId",handleGetURLAnalytics);
router.post("/",handleGenerateNewShortURL);

export default router;