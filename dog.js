const fetch = require('node-fetch');
module.exports = {
  name: 'dog',
  description: 'fetch dog pics',
  cooldown: 10,
  execute(message, canal) {
    function loadDogs() {
      return (
        fetch('https://www.reddit.com/r/dog.json?limit=800&?sort=hot&t=all')
          .then((res) => res.json())
          .then((json) => json.data.children)
      );
    }

    function postRandomDog(message) {
      return loadDogs().then((posts) => {
        const { title, url } = posts[Math.floor(Math.random() * posts.length)].data;
        message.channel.send(`${url}`);
      });
    }
    postRandomDog(message);
  }
}