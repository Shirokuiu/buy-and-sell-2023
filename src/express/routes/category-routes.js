'use strict';

const {Router} = require(`express`);
const categoryRouter = new Router();

categoryRouter.get(`/:id`, (req, res) => {
  res.render(`category`);
});

module.exports = categoryRouter;
