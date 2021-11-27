const { parseString } = require('xml2js')

function parse (xmlString) {
  return new Promise((resolve, reject) => {
    parseString(xmlString, function (err, ok) {
      if (err) return
      return resolve(ok)
    })
  })
}

async function getFirstItem (xmlString) {
  const rss = await parse(xmlString)
  if (!rss) return
  return rss.rss.channel[0].item[0]
}

module.exports = { getFirstItem }
