'use strict';

let assert = require('assert');
let Sequelize = require('sequelize');

let dt_jobs_models = require('../lib/dt-jobz/models');

let sequelize = new Sequelize('drives_cloud',
                              'drives',
                              'drives',
                              {
                                  host: '127.0.0.1',
                                  port: '3306',
                                  dialect: 'mysql'
                              });

dt_jobs_models.initWithDB(sequelize);
dt_jobs_models.Job.findAll()
                  .then(function(jobs) {
                     console.log('Found jobs: %s', jobs);
                  });

