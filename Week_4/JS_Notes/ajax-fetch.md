# AJAX

AJAX stands for **A**synchronous **J**avaScript And **X**ML. Ajax describes the process of exchanging data from a web server asynchronously with the help of  XML, HTML, CSS, and JavaScript. It just loads the data from the server and selectively updates some webpage parts without refreshing the page. 

## Fetch API

We can use Fetch API, which is modern and versatile. The Fetch API provides a `fetch()` method defined on the `window` object. This method used to send requests and returns a `Promise` that retrieved from the response. A **Promise** object represents a value that may not be available now but, will be resolved in the future. It allows us to write asynchronous code.

The syntax for fetch() method: `let promise = fetch(url, [options])`

The browser requests the server and returns a promise as a response.  When the request unable to make HTTP-request due to network problems or response has failure HTTP-status code is  404 or 500, then the Fetch API rejects the Promise object. When we get a response successfully form the server, the promise object returned in the **Response Body**.

The methods to access the response body in various formats:

* `response.text()` – read the response and return as text. 
* `response.json()` – parse the response as JSON.
* `response.formData()` – return the response as FormData object .
* `response.blob()` – return the response as Blob (binary data with type).
* `response.arrayBuffer()` – return the response as ArrayBuffer(low-level representation of binary data). 


We also use the `async` and `await` keyword with the `fetch()` method. The `async` keyword is added to functions to tell them to return a promise rather than directly returning the value. The `await` keyword only works inside async functions, used to pause the code on that line until promise gets complete.


*Example:*
```javascript
async function asyncFunc() {
  let response = await fetch(protectedUrl);
  let text = await response.text(); // response body consumed
  document.write(text);
}

asyncFunc();
```
**Response headers** - The response headers are available in a Map-like headers object in `response.headers`. To get individual headers by name or iterate over them.

*Example:*
```javascript
async function asyncFunc() {
  let response = await fetch(githubUrl);

  // get one header
  alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

  // iterate over all headers
  for (let [key, value] of response.headers) {
    alert(`${key} = ${value}`);
  }
}

asyncFunc();
```

**Request headers** - To set a request header inside the `fetch` method, we can use the `headers ` attribute.

*Example:*
```javascript
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});
```

**POST Request:**

To make a POST request, we need to mention the HTTP method (`method`)and request the body (`body`) inside the fetch method. The request body can be string, FormData object, or blob. If the request `body` is a string, then `Content-Type` header is set to `text/plain;charset=UTF-8`. If the request `body` is a JSON, then `Content-Type` header is set to `application/json;charset=UTF-8`. We don't set `Content-Type` manually for blob object.

*Example:* 
```javascript
async function asyncFunc() {
  let user = {
    name: 'John',
    surname: 'Smith'
  };
  // url is a server location 
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  let result = await response.json();
  alert(result.message);
}

asyncFunc();
```

## Handling Errors
The Fetch API generates a promise, meaning that if the request fails, it will cause the promise to enter the `reject` state. To handle this, we need to either surround our `await` instruction with a `try...catch` block or to append a `catch()` callback to our promise.

*Example:* 
```javascript
async function asyncFunc() {
  let user = {
    name: 'John',
    surname: 'Smith'
  };
  // url is a server location 
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  try {
    let result = await response.json();
    alert(result.message);
  } catch (error) {
    console.error(error);
  }
}

asyncFunc();
```

*Example:* 
```javascript
let user = {
  name: 'John',
  surname: 'Smith'
};
// url is a server location 
let response = fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
}).then((response)=>{
  let result = response.json();
  alert(result.message);
}).catch((error)=>{
  console.error(error);
});
```
