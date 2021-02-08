import React, { FC } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Main, OAuthCode } from './pages'
import PageLayout from './components/PageLayout'
import { GITHUB } from './lib/constants'

const client = new ApolloClient({
    uri: GITHUB.GRAPHQL_API_URI,
    cache: new InMemoryCache(),
})

const App: FC = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <PageLayout>
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/oauth/github">
                        <OAuthCode />
                    </Route>
                </Switch>
            </PageLayout>
        </BrowserRouter>
    </ApolloProvider>
)

export default App
