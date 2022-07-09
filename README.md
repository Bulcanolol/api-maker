![api-maker](https://cdn.discordapp.com/attachments/985865573722382336/995382633443901531/api-maker-img.png)
# api-maker

api maker is a simple api creator. using express

## Installation


```bash
npm install api-maker
```

## Example

```javascript
const api_maker = require("api-maker") //import the package
let api = new api_maker.Api();

api.runOn(3200); //run the api on the selected port

let data = {
    name: "juan",
    id: 1023021
} //the data you prefer to insert in the api

api.write(data); //write in the page your data

api.onStart("Api started") //the message left after the server is online
api.server.run(); //start the server (express)
```



## Other examples
```javascript
const api_maker = require("api-maker") //import the package
let api = new api_maker.Api();

api.runOn(3000); //run the api on the selected port

let data = {
    name: "john",
    id: "hello"
} //the json you prefer to insert in the api

api.write(data) //write in the page your data

api.onStart("SERVER START") //the message left after the server is online


let 2ndData = {
   pro: true
}
api.newPage({
   pageName: "helloworld",
   data: 2ndData
})

//simple js example
if(1 < 30) {
   api.write(data)
} else {
   console.log("no")
}
api.server.run(); //run the server (express)


```
