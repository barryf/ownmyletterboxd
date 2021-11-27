// const arc = require('@architect/functions')

exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: 'Own My Letterboxd'
  }
}
