fetch('https://api.edgescraper.com/scrape', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key: '${apiKey}',
    url: 'http://samples.edgescraper.com/traversal/',
  }),
})
  .then(async (res) => {
    const response = await res.json()
    const html = response.data.html
    console.log(html)
  })
  .catch((error) => {
    console.log(error)
  })
