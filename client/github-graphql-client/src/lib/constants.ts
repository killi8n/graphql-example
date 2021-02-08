const STORAGE_KEY_PREFIX = 'github-graphql-client'

// eslint-disable-next-line import/prefer-default-export
export const STORAGE_KEYS = {
    TOKEN: `${STORAGE_KEY_PREFIX}:token`,
}
export const GITHUB = {
    GRAPHQL_API_URI: 'https://api.github.com/graphql',
    OAUTH_AUTHORIZE_URI: 'https://github.com/login/oauth/authorize',
    OAUTH_GET_TOKEN_URI: 'https://github.com/login/oauth/access_token',
}
