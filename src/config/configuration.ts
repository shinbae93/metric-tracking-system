export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/metric-tracking-system',
  },
  environment: process.env.NODE_ENV || 'dev',
})
