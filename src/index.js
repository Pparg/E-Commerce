import React from 'react';
import ReactDOM from 'react-dom/client';
import { ECommerce } from './App';
import { ContextProvider } from './Context/context';
import './index.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<main>
  <ContextProvider>
    <ECommerce />
  </ContextProvider>
  
</main>
    
);

