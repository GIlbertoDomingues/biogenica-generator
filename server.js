require('dotenv').config({ silent: true });

const chalk = require('chalk');
const debug = require('debug')('app:server');

const PORT = 3000;
const app = require('./server/app');

app.listen(PORT, () => {
    debug(`Listening on port ${chalk.green(PORT)}`);
});
