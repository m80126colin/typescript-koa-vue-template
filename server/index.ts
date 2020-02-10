import path   from 'path';
import Koa    from 'koa';
import Static from 'koa-static';

const port : number = 8080
const app = new Koa()

const resolvePath = (...dirs : string[]) : string => path.resolve(__dirname, '..', ...dirs)

app.use(Static(resolvePath('dist', 'site')))
app.listen(port, () => {
  console.log(`Server listen on port ${port}.`)
})