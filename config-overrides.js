module.exports = {
  jest: config => ({
    ...config,
    setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each']
  })
};
