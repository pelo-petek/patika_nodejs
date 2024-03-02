const koa = require('koa');
const route = require('koa-router');
const app = new koa();
const router = new route();


router.get('/', async (ctx) => {
  ctx.body = '<h1>Welcome to the homepage</h1>';
  console.log(ctx);
});

router.get('/about', async (ctx) => {
  ctx.body = '<h1>welcome to the about page</h1>';
  console.log(ctx);
});

router.get('/contact', async (ctx) => {
  ctx.body = '<h1>welcome to the contact page</h1>';
  console.log(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
