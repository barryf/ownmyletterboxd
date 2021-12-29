const fetch = require('node-fetch')

function propertiesFromItem (item) {
  const properties = {
    summary: [
      item.title[0]
    ],
    name: [
      item['letterboxd:filmTitle'][0]
    ],
    published: [
      new Date(item.pubDate[0]).toISOString()
    ],
    rating: [
      parseInt(item['letterboxd:memberRating'][0])
    ],
    content: [
      { html: item.description[0] }
    ]
  }
  return properties
}

async function post (endpoint, token, item) {
  const body = {
    type: ['h-review'],
    properties: propertiesFromItem(item)
  }
  await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

module.exports = {
  post,
  propertiesFromItem
}
