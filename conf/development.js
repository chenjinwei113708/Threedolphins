const serverConf = require('./serverConfig');

module.exports = {
  network: {
    // port: 3026,
    ...serverConf,
  },
  database: {
    host: '',
    port: 3306,
    user: 'root',
    password: '',
    database: ''
  },
  NODE_ENV: 'development'
};
