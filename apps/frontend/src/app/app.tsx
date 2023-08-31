// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { type Foo, utils } from '@fullstack/utils';

const fooExample: Foo = {
  bar: 'barExample',
};

export function App() {
  return (
    <div>
      <h1>{utils()}</h1>
      <h2>{JSON.stringify(fooExample, null, 2)}</h2>
    </div>
  );
}

export default App;
