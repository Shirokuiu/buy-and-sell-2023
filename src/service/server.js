'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const {DEFAULT_PORT} = require(`./constants`);
const offersRoutes = require(`./routes/offers-routes.js`);

const app = express();

app.use(express.json());

app.use(`/api/offers`, offersRoutes);

app.listen(DEFAULT_PORT, (err) => {
  if (err) {
    console.error(chalk.red(`При создании сервера возникла ошибка`));
    console.error(err);

    return;
  }

  console.log(chalk.green(`Сервер успешно создан и ожидает запросов на порту ${DEFAULT_PORT} http://localhost:${DEFAULT_PORT}`));
});
