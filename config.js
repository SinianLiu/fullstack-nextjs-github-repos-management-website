const GITHUB_OAUTH_URL = "https://github.com/login/oauth/authorize"
const SCOPE = "user"
const client_id = "9c0aa1b5f04ca0cdf3cd"
module.exports = {
  github: {
    client_id,
    client_secret: "e2a12d434f2074985bff376fa0bf23a063422069",
    github_base_url: "https://api.github.com",
    request_token_url: "https://github.com/login/oauth/access_token",
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: "",
    family: 4
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`,
}
