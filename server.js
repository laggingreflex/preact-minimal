const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const koaSSR = require('koa-ssr');

const app = new Koa();

const staticDir = __dirname + '/assets'
app.use(koaStatic(staticDir, { index: false }));
app.use(koaSSR(staticDir, {}));

const port = 8080;
app.listen(port, () => console.log('Listening on', port));
