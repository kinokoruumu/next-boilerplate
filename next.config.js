module.exports = {
  reactStrictMode: true,
  env: {
    ...require(`./src/config/${process.env.APP_ENV || "local"}.json`),
  },
}
