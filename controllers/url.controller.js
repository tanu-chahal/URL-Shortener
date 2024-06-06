import URL from "../models/url.model.js";
import { nanoid } from "nanoid";

export const handleGetURLAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if(!result) return res.status(404).json({error:"Short url doesn't exist."})
  return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
};

export const handleRedirection = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  return res.redirect(entry.redirectURL);
};

export const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required." });
  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.status(201).json({ id: shortId });
};
