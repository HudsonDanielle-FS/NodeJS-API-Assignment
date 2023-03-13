const jokeService = async () => {
  console.log("Mocked Jokes");
  return Promise.resolve({
    data:[ {
      "type": "general",
      "setup": "Who did the wizard marry?",
      "punchline": "His ghoul-friend",
      "id": 301
  },
  {
      "type": "general",
      "setup": "Why are oranges the smartest fruit?",
      "punchline": "Because they are made to concentrate. ",
      "id": 308
  },
  {
      "type": "programming",
      "setup": "Why do programmers always mix up Halloween and Christmas?",
      "punchline": "Because Oct 31 == Dec 25",
      "id": 23
  },
  {
      "type": "general",
      "setup": "My older brother always tore the last pages of my comic books, and never told me why.",
      "punchline": "I had to draw my own conclusions.",
      "id": 393
  },
  {
      "type": "general",
      "setup": "Why did the scarecrow win an award?",
      "punchline": "Because he was outstanding in his field.",
      "id": 339
  },
  {
      "type": "general",
      "setup": "Why was Cinderalla thrown out of the football team?",
      "punchline": "Because she ran away from the ball.",
      "id": 380
  },
  {
      "type": "general",
      "setup": "What do you call an alligator in a vest?",
      "punchline": "An in-vest-igator!",
      "id": 220
  },
  {
      "type": "general",
      "setup": "Did you hear about the guy whose whole left side was cut off?",
      "punchline": "He's all right now.",
      "id": 90
  },
  {
      "type": "general",
      "setup": "What's the difference between a guitar and a fish?",
      "punchline": "You can tune a guitar but you can't \"tuna\"fish!",
      "id": 275
  },
  {
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
      "punchline": "I didn't know you could yodel!",
      "id": 14
  }]
  })
};

const jokeServiceById = async (id) => {
  console.log("Mocked Jokes by id");
  return Promise.resolve({
    data:[ {
      "type": "knock-knock",
      "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
      "punchline": "I didn't know you could yodel!",
      "id": 14
  }]
  })
};

module.exports = { jokeService, jokeServiceById };
