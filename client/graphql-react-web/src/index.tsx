import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetRates {
        books {
          title
          author
        }
      }
    `,
  })
  .then((result) => console.log(result));

// eslint-disable-next-line no-console
console.log(client.version);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
