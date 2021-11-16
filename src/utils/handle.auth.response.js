module.exports = (statusCode, status, message, token, user) => {
  return {
    statusCode,
    status,
    message,
    token,
    user,
  };
};
