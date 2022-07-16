import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//import { CounterMemo } from './components/memos/CounterMemo';
//import { Layout } from './components/useLayout/Layout';
//import { RealRef } from './components/useRef/RealRef';
//import { MutiCustomHooks } from './components/examples/MutiCustomHooks';
//import { UseRef } from './components/useRef/UseRef';
//import { FormWithCustomHook } from './components/FormWithCustomHook';
//import { SimpleForm } from './components/SimpleForm';
//import { CallbackCounter } from './components/useCallback/CallbackCounter';
//import { Padre } from './components/task-memo/Padre';
//import { TodoApp } from './components/reducer/TodoApp';

import { MainApp } from './components/useContext/MainApp';

import './index.css';

//import './components/reducer';

 ReactDOM.render(
     <BrowserRouter>
        <MainApp />
     </BrowserRouter>,
   document.getElementById('root')
 );

