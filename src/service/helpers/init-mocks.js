'use strict';

const fs = require(`fs`).promises;
const path = require(`path`);

const initMocks = async () => {
  const fileContent = await fs.readFile(path.resolve(__dirname, `../mocks.json`));

  return JSON.parse(fileContent);
};

module.exports = initMocks;
