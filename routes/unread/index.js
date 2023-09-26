const Router = require('koa-router');
import { faker } from '@faker-js/faker';

const router = new Router();

router.get('/messages/unread/', async (ctx) => {
  ctx.response.body = 'hello';
});

module.exports = router;
