const fetch = require('node-fetch');
module.exports = {
	name: 'cat',
  description: 'fetch cat pics',
	cooldown: 10,
	execute(message, args) {
    function loadCats() {
      return (
       fetch('https://www.reddit.com/r/cats.json?limit=800&?sort=hot&t=all')
        .then((res) => res.json())
        .then((json) => json.data.children)
      );
     }
    
     function postRandomCat(message) {
      return loadCats().then((posts) => {
       // Get a random post's title and URL
       const { title, url } = posts[Math.floor(Math.random() * posts.length)].data;
       message.channel.send(`${url}`);
      });
     }
     postRandomCat(message);
    }}