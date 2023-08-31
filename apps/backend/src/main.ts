import { type Foo, utils } from '@fullstack/utils';
import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

const fooExample: Foo = {
  bar: 'barExample',
};

app.get('/', (req, res) => {
  res.send({ message: `Utils: ${utils()}`, payload: fooExample });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
