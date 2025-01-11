const Article = require("../models/Article.js");
const mongoose = require("mongoose");

const createArticle = async (req, res) => {
  try {
    const { title, desc, author } = req.body;
    // const img = req.file ? req.file.path : '';

    const newArticle = new Article({
      title,
      desc,
      author,
      // img
    });

    const savedArticle = await newArticle.save();

    res.status(201).json({
      message: "Article created successfully.",
      article: savedArticle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error." });
  }
};

const getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error." });
  }
};

const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error." });
  }
};

const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, author } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid article ID." });
    }
    if (!title || !desc || !author) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, desc, author },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json({
      message: "Article updated successfully.",
      article: updatedArticle,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error." });
  }
};


const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.status(200).json({
      message: "Article deleted successfully.",
      article,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Internal Server Error." });
  }
};

module.exports = {
  createArticle,
  getAllArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
