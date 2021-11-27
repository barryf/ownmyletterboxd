const fetch = require('./fetch')
const parse = require('./parse')
const data = require('./data')
const micropub = require('./micropub')

async function process () {
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
  // console.log('itemGuid', itemGuid)
  if (itemGuid !== lastGuid) {
    const ok = await micropub.post(endpoint, token, item)
    if (ok) await data.updateUserLastGuid(url, itemGuid)
  }
  return 'ok'
}

module.exports = process
