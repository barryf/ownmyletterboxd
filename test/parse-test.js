const test = require('tape')
const fs = require('fs')
const path = require('path')
const parse = require('../src/scheduled/process/parse')

const xml = fs.readFileSync(path.join(__dirname, '/feed.xml'), 'utf8')

test('parsing feed xml returns a title', async t => {
  t.plan(1)
  const item = await parse.getFirstItem(xml)
  t.equal(item.title[0], 'No Time to Die, 2021 - ★★★★')
})
