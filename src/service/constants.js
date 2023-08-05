'use strict';

const DEFAULT_PORT = 3000;

const HttpCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const mocks = {
  offers: []
};

module.exports = {
  DEFAULT_PORT,
  HttpCode,
  mocks
};
