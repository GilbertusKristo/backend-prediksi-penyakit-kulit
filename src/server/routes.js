const {postPredictHandler, getPredictHistoriesHandler, } = require("../server/handler");

const routes = [
  {
      path: "/predict",
      method: "POST",
      handler: postPredictHandler,
      options: {
          payload: {
              allow: "multipart/form-data",
              maxBytes: 10000000,
              multipart: true,
          },
      },
  },
  {
      path: "/predict/histories",
      method: "GET",
      handler: getPredictHistoriesHandler,
  },
];

module.exports = routes;