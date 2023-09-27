const Router = require('koa-router');
const { faker } = require('@faker-js/faker');
const uuid = require('uuid');

const router = new Router();

function generateMessage() {
  const id = uuid.v4();
  const from = faker.internet.email();
  const subject = faker.lorem.slug();
  const body = faker.lorem.paragraph(3);
  const received = Date.parse(faker.date.recent());

  return {
    id, from, subject, body, received,
  };
}

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getUreadMessages() {
  const messages = [];
  const count = randomInteger(1, 4);
  for (let i = 0; i < count; i += 1) {
    messages.push(generateMessage());
  }
  return messages;
}

router.get('/messages/unread/', async (ctx) => {
  const body = {
    status: 'ok',
    timestamp: Date.now(),
    messages: getUreadMessages(),
  };
  ctx.response.body = body;
});

module.exports = router;
