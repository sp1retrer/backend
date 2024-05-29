const gamesRouter = require("express").Router();
// Другие импорты
const { checkAuth } = require("../middlewares/auth.js");

const {
  createGame,
  findAllGames,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest
} = require("../middlewares/games.js");
const {
  sendGameCreated,
  sendGameById,
  sendAllGames,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games.js");

// Маршрут для создания игры
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  // Другие миддлвары и контроллеры
);

// Маршрут для обновления игры
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
  // Другие миддлвары и контроллеры
);

// Маршрут для удаления игры
gamesRouter.delete(
    "/games/:id", 
    checkAuth, 
    // Другие миддлвары и контроллеры
);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);

// gamesRouter.put(
//   "/games/:id",
//   findGameById,
//   checkIfUsersAreSafe,
//   checkIfCategoriesAvaliable,
//   checkEmptyFields,
//   updateGame,
//   sendGameUpdated
//);
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
module.exports = gamesRouter;
