import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { PRODUCTS } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const root = React.ReactDOM.createRoot(document.getElementById('container'));
// root.render(<FilterableProductTable products={PRODUCTS} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
