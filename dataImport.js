import('node-fetch').then((fetchModule) => {
    const fetch = fetchModule.default;
    const apiURL = 'https://swapi.dev/api/people';
  
    fetch(apiURL)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log('All the data was received successfully');
      });
  
    console.log(`Getting the data`);
  });
  