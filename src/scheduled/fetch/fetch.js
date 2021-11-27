const fetch = require('node-fetch')

async function fetchFeed (letterboxdUser) {
  const url = `https://letterboxd.com/${letterboxdUser}/rss/`
  const response = await fetch(url)
  if (response.ok) {
    return await response.text()
  }
}

module.exports = fetchFeed
