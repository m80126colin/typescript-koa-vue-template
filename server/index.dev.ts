import path from 'path';
import Koa  from 'koa';
import koaWebpack from 'koa-webpack';

import config from '../webpack/config.dev.babel';

const port : number = 8080
const app  : Koa    = new Koa()

koaWebpack({ config }).then(middleware => {
  app.use(middleware)
  app.listen(port, () => {
    console.log(`Server listen on port ${port}.`)
  })
})