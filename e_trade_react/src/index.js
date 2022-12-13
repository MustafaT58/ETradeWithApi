import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CategoryProvider from './context/CatContext';
import ProductProvider from './context/ProContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>

    <CategoryProvider>
      <App />

    </CategoryProvider>
  </ProductProvider>
);

