const test = require('tape')
const sandbox = require('@architect/sandbox')
const process = require('../src/scheduled/process/process')

test('start', async t => {
  t.plan(1)
  const result = await sandbox.start()
  t.equal(result, 'Sandbox successfully started')
})

test('process exits cleanly', async t => {
  t.plan(1)
  const response = await process()
  t.equal(response, 'ok')
})

test('end', async t => {
  t.plan(1)
  const result = await sandbox.end()
  t.equal(result, 'Sandbox successfully shut down')
})
