function myFetch (url) {
fetch (url)
.then(response =>  {
if (!response.ok) { 
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })

.then(data => {
console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
myFetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528');
