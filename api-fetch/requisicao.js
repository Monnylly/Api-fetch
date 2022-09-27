const fetch = require('node-fetch');

// const getAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';

//   const request = fetch(url)
//     .then((response) => response.json())

//     .then(({ slip: { id, advice } }) => document.getElementById('teste').innerText = advice)
//     .catch((error) => console.log(`Algo deu errado \n${error}`))

// }

  const API_URL = 'https://api.adviceslip.com/advice';

    const fetchAdvice = () => {
      const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
      };

      fetch(API_URL, myObject)
        .then(response => response.json())
        .then(({slip: { advice }}) =>
          document.getElementById('teste').innerText = advice
        );

}
window.onload = () => fetchAdvice();

// fetchAdvice();


// window.onload = () => getAdvice();
// getAdvice();