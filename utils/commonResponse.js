function Resp(res, status, next, type, message, token, data) {
  res.status(status).json({
    status: type === 'err' ? 'error' : 'success',
    message,
    token,
    data,
  });
  return next();
}

module.exports = Resp;
