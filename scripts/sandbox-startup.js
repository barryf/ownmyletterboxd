const arc = require('@architect/functions')

async function startup () {
  const data = await arc.tables()
  await data.users.put({
    url: 'http://localhost:4444/',
    micropub_endpoint: 'http://localhost:3333/micropub',
    micropub_token: 'foo',
    letterboxd_user: 'barryf',
    last_guid: 'bar'
  })
}

(async () => {
  await startup()
})()
