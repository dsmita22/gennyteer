module.exports = {
  rootDir: process.env.NODE_ENV === 'LOCAL' ? 'src': 'dist',
  testMatch: ['<rootDir>/**/tests/**/*.js'],
  preset: 'jest-puppeteer',
  bail: true
};
