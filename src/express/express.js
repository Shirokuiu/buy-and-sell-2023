'use strict';

const express = require(`express`);
const mainRoutes = require(`./routes/main-routes`);
const path = require(`path`);
const {DEFAULT_PORT, PUBLIC_DIR} = require(`./constants`);
const myRoutes = require(`./routes/my-routes`);
const offersRoutes = require(`./routes/offers-routes`);
const searchRoutes = require(`./routes/search-routes`);
const loginRoutes = require(`./routes/login-routes`);
const registerRoutes = require(`./routes/register-routes`);
const categoryRoutes = require(`./routes/category-routes`);

const app = express();

// Подключение шаблонизатора Pug
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

// Работа со статикой шаблонов верстки
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

// Маршруты
app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/search`, searchRoutes);
app.use(`/category`, categoryRoutes);

app.listen(DEFAULT_PORT);
