const fetch = require('./fetch')
const parse = require('./parse')
const data = require('./data')
const micropub = require('./micropub')

exports.handler = async function scheduled (event) {
  // const users = data.getUsers()
  // for (user of users) {
  // }
  const url = 'http://localhost:3333/'
  const endpoint = 'http://localhost:3333/micropub'
  const token = 'foo'
  const letterboxdUser = 'barryf'

  const feed = await fetch(letterboxdUser)
  const item = await parse.getFirstItem(feed)
  const lastGuid = await data.getUserLastGuid(url)
  const itemGuid = item.guid[0]._
  if (itemGuid !== lastGuid) {
    const ok = await micropub.post(endpoint, token, item)
    if (ok) await data.updateUserLastGuid(url, itemGuid)
  }
}
