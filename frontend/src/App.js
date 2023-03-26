import logo from './logo.svg';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactDOM  } from 'react';

import Button, * as util from './utility/utility';
import * as layout from './layout/layout';

function App() {

  const des = "Hey this is the first static react app developerd by developer vick"

  return (
    <div className="App">
      <header>

      </header>
      <body className='m-0 p-0 d-flex column align-items-start'>
        <layout.Body></layout.Body>
        
      </body>
    </div>
  );
}

export default App;
