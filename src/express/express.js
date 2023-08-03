'use strict';

const express = require(`express`);
const {DEFAULT_PORT} = require(`./constants`);
const myRoutes = require(`./routes/my-routes`);
const offersRoutes = require(`./routes/offers-routes`);
const searchRoutes = require(`./routes/search-routes`);
const loginRoutes = require(`./routes/login-routes`);
const registerRoutes = require(`./routes/register-routes`);
const mainRoutes = require(`./routes/main-routes`);

const app = express();

// Маршруты
app.use(`/register`, registerRoutes);
app.use(`/login`, loginRoutes);
app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);
app.use(`/offers`, offersRoutes);
app.use(`/search`, searchRoutes);

app.listen(DEFAULT_PORT);
