const fetch = require('node-fetch');

const requisitionDogs= () => {
   const url = 'https://dog.ceo/api/breeds/image/random';

   const respostDog = fetch(url)
                        .then((response) => response.json())
                        .then(({ message, status }) => console.log(message, status))
                        .catch((error) => console.log(`Algo deu errado \n${error}`))
}

requisitionDogs()