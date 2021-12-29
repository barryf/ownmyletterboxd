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
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const text = await response.text()
  console.log(`Response from Micropub endpoint ${endpoint}`, text)
  return response.ok
}

module.exports = {
  post,
  propertiesFromItem
}
