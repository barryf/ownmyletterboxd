const arc = require('@architect/functions')

async function updateUserLastGuid (url, guid) {
  const data = await arc.tables()
  const user = await data.users.get({ url })
  if (!user) return
  user.last_guid = guid
  await data.users.update(user)
}

async function getUserLastGuid (url) {
  const data = await arc.tables()
  const user = await data.users.get({ url })
  if (!user) return
  return user.last_guid
}

module.exports = {
  updateUserLastGuid,
  getUserLastGuid
}
