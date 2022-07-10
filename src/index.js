import React from 'react';
import ReactDOM from 'react-dom';
//import { CounterMemo } from './components/memos/CounterMemo';
//import { Layout } from './components/useLayout/Layout';
//import { RealRef } from './components/useRef/RealRef';
//import { MutiCustomHooks } from './components/examples/MutiCustomHooks';
//import { UseRef } from './components/useRef/UseRef';
//import { FormWithCustomHook } from './components/FormWithCustomHook';
//import { SimpleForm } from './components/SimpleForm';
import { MemorizedMemo } from './components/memos/MemorizedMemo';
import './index.css';


ReactDOM.render(
    <MemorizedMemo />,
  document.getElementById('root')
);

