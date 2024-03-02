const koa = require('koa');
const route = require('koa-router');
const app = new koa();
const router = new route();


router.get('/', async (ctx) => {
  ctx.body = 'Welcome to the homepage';
  console.log(ctx);
});

router.get('/about', async (ctx) => {
  ctx.body = 'This is the about page';
  console.log(ctx);
});

router.get('/contact', async (ctx) => {
  ctx.body = 'hey welcome to contact page';
  console.log(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
