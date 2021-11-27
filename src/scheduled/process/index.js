const process = require('./process')

exports.handler = async function scheduled (event) {
  return await process()
}
