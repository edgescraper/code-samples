const axios = require('axios')

axios
  .post('https://api.edgescraper.com/scrape', {
    body: {
      key: '{{apiKey}}',
      url: 'http://samples.edgescraper.com/traversal/',
    },
  })
  .then((response) => {
    const html = response.data.html
    console.log(html)
  })
  .catch((error) => {
    console.log(error)
  })
