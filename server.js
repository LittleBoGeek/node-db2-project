const express = require('express');
const server = express();
const helmet = require('helmet');

const carsRouter = require('./carsRouter/cars-router')


server.use('/api/cars', carsRouter);
const {json} = require('express')
server.use(helmet());
server.use(express.json())

module.exports = server

