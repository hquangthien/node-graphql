module.exports = {
  port: process.env.PORT || 4000,
  db: {
    database: process.env.DB_NAME || 'skysound',
    user: process.env.DB_USER || 'thienhq',
    password: process.env.DB_PASS || 'test123'
  }
}
