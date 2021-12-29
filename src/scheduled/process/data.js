const arc = require('@architect/functions')

async function updateUserLastGuid (url, guid) {
  const data = await arc.tables()
  const user = await data.users.get({ url })
  if (!user) return
  user.last_guid = guid
  await data.users.put(user)
  console.log(`Updated ${url} last_guid with ${guid}.`)
}

async function getUserLastGuid (url) {
  const data = await arc.tables()
  const user = await data.users.get({ url })
  if (!user) return
  console.log(`Found last_guid ${user.last_guid} for ${url}.`)
  return user.last_guid
}

async function getUsers () {
  const data = await arc.tables()
  const users = await data.users.scan()
  return users.Items
}

module.exports = {
  updateUserLastGuid,
  getUserLastGuid,
  getUsers
}
