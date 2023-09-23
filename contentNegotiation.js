import fetch from 'node-fetch';
var query =  'https://swapi.dev/api/people'; //'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeid/440?format=xml'
    fetch(query, {
            method: 'GET',
            headers: {
                'Content-type': 'application/xml',
                'accept': 'application/json',
                'User-Agent': '*'
            },
        }
        ).then(function(response){
            console.log(`response = ${response}`); //json
            return response.text();
        })
        .then(function(xml){
            console.log(`XML = ${xml}`); //json
        })
        .catch((error) => {
            console.log('Error:',error)
        });