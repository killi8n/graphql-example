import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});
// eslint-disable-next-line no-console
console.log(client.version);

test('renders learn react link', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
