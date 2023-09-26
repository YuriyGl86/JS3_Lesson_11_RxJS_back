const combineRouters = require('koa-combine-routers');

const unread = require('./unread/index');


const router = combineRouters(
  unread,
);

module.exports = router;
