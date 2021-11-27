const test = require('tape')
const fs = require('fs')
const path = require('path')
const micropub = require('../src/scheduled/process/micropub')

const json = fs.readFileSync(path.join(__dirname, '/item.json'), 'utf8')
const item = JSON.parse(json)

test('properties should contain the correct name value', async t => {
  t.plan(1)
  const properties = await micropub.propertiesFromItem(item)
  t.equal(properties.name[0], 'No Time to Die')
})

test('properties should have the correct published date string', async t => {
  t.plan(1)
  const properties = await micropub.propertiesFromItem(item)
  t.equal(properties.published[0], '2021-11-22T13:53:05.000Z')
})
