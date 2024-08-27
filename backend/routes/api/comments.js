/**
 * This file exports the router for handling API routes related to comments.
 * @module routes/api/comments
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;