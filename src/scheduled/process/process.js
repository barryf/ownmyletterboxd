const fetch = require('./fetch')
const parse = require('./parse')
const data = require('./data')
const micropub = require('./micropub')

async function processUser (user) {
  const feed = await fetch(user.letterboxd_user)
  const item = await parse.getFirstItem(feed)
  const lastGuid = await data.getUserLastGuid(user.url)
  const itemGuid = item.guid[0]._

  if (itemGuid === lastGuid) return
  const ok = await micropub.post(user.micropub_endpoint, user.micropub_token, item)
  if (!ok) return
  await data.updateUserLastGuid(user.url, itemGuid)
}

async function process () {
  const users = data.getUsers()
  for (const user of users) {
    await processUser(user)
  }
}

module.exports = process
