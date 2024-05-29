const categoriesRouter = require("express").Router();

const {
  createCategory,
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
} = require("../middlewares/categories");

const {
  sendCategoryById,
  sendCategoryCreated,
  sendAllCategories,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");

const { checkAuth } = require("../middlewares/auth")

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
// routes/categories.js
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;
