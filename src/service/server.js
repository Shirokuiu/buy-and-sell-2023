'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const {DEFAULT_PORT, mocks} = require(`./constants`);
const offersRoutes = require(`./routes/offers-routes.js`);
const initMocks = require(`./helpers/init-mocks`);

const app = express();

app.set(`json spaces`, 2);
app.use(express.json());

app.use(`/api/offers`, offersRoutes);

(async () => {

  // Сначала читаем файл и записываем данные, потом создаем сервер
  mocks.offers = await initMocks();

  app.listen(DEFAULT_PORT, (err) => {
    if (err) {
      console.error(chalk.red(`При создании сервера возникла ошибка`));
      console.error(err);

      return;
    }

    console.log(chalk.green(`Сервер успешно создан и ожидает запросов на порту ${DEFAULT_PORT} http://localhost:${DEFAULT_PORT}`));
  });
})();
