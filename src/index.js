import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './state';
import { Sum } from './sum';
import { Welcome } from './welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <Welcome />
     <Sum />
     <Counter inicialValue={7} />
     </>
);
