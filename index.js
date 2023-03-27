require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const sequelize = require('./api/')

const api = express();