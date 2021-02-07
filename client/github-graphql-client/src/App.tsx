import React, { FC } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Main, OAuthCode } from './pages'
import './App.css'

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
})

const App: FC = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/oauth/github">
                    <OAuthCode />
                </Route>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
)

export default App
