const express = require("express");
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');


const routes = express.Router();
// GET, POST, PUT, DELETE

/**METHOD GET */
routes.get("/devs", DevController.index);

/**METHOD POST */
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

//exporta a variavel para ser utilizada em outros arquivos
module.exports = routes;