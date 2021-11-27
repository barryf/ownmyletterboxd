const fetch = require('node-fetch')

/*
{
  "title": [
    "No Time to Die, 2021 - ★★★★"
  ],
  "link": [
    "https://letterboxd.com/barryf/film/no-time-to-die-2021/"
  ],
  "guid": [
    {
      "_": "letterboxd-watch-211332918",
      "$": {
        "isPermaLink": "false"
      }
    }
  ],
  "pubDate": [
    "Tue, 23 Nov 2021 02:53:05 +1300"
  ],
  "letterboxd:watchedDate": [
    "2021-11-21"
  ],
  "letterboxd:rewatch": [
    "No"
  ],
  "letterboxd:filmTitle": [
    "No Time to Die"
  ],
  "letterboxd:filmYear": [
    "2021"
  ],
  "letterboxd:memberRating": [
    "4.0"
  ],
  "description": [
    " <p><img src=\"https://a.ltrbxd.com/resized/film-poster/3/0/5/9/6/4/305964-no-time-to-die-0-500-0-750-crop.jpg?k=a1e5dd9760\"/></p> <p>Watched on Sunday November 21, 2021.</p> "
  ],
  "dc:creator": [
    "Barry Frost"
  ]
}
*/

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
  return response.ok
}

module.exports = { post }
