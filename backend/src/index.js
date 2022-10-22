'use strict';
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routerConfig = require('./modules/route');
const config = require('./config/config');
const morgan = require('morgan')

const init = () => {
  // *** express instance *** //
  const app = express();
  // Configuraing the standard middlewares.
  setupStandardMiddlewares(app);
  configureApiEndpoints(app);
  app.listen(config.SERVER_PORT);
  console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
};

const setupStandardMiddlewares = (app) => {

  const whitelist = ['*']

  const configCors = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(configCors));
	app.use(morgan('dev'))
  return;
};

const configureApiEndpoints = (app) => {
  app.use("/api/v1/", routerConfig.init());
  // routerConfig.init(app);
  // define a route handler for the default home page
  app.get("/", (req, res) => {
    res.send("Welcome to express-create application!");
  });
};

init();
