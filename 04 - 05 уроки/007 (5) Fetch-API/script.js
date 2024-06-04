'use strict';

    // Fetch API (GET)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
    
        //POST
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({name: 'Valera'}),
        headers: {
            'Content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => console.log(json));