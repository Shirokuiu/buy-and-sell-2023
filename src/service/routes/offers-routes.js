'use strict';

const {Router} = require(`express`);
const {HttpCode, mocks} = require(`../constants`);

const offersRouter = new Router();

offersRouter.get(`/`, (req, res) => {
  if (!mocks.offers) {
    res.status(HttpCode.OK).send([]);

    return;
  }


  res.status(HttpCode.OK).json(mocks.offers);
});

module.exports = offersRouter;
