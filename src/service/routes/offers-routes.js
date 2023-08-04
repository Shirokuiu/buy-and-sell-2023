'use strict';

const {Router} = require(`express`);
const fs = require(`fs`).promises;
const path = require(`path`);

const offersRouter = new Router();

offersRouter.get(`/`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(path.resolve(__dirname, `mocks.json`));

    const mocks = JSON.parse(fileContent);

    res.json(mocks);
  } catch (e) {
    res.send([]);
  }
});

module.exports = offersRouter;
