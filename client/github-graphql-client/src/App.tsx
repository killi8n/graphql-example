import React, { FC } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
})

const App: FC = () => (
    <ApolloProvider client={client}>
        <div>Hello</div>
    </ApolloProvider>
)

export default App
