let options={
    method: "GET"
};
let url="https://gorest.co.in/public-api/users";
fetch(url,options)
.then(function (res){
    return res.url
}).then(function(url){
    console.log(url)
})


// Making HTTP Request using fetch()
// Accessing HTTP Response

let link="https://jsonplaceholder.typicode.com/todos/1"

fetch(link,options)
.then(function(response){
    return response.status;
})
.then(function(status){
    console.log(status)//Http status is 200
})             


// Http Response Object
// Properties and Methods 

// Response Object provides multiple
// Properties to give more information
// about the HTTO Response

// 1)status
// 2)statusText
// 3)Headers
// 4)url
// 5)text()
// 6)JSON()  methods ..


fetch('http://jsonplaceholder.typicode.com/posts',options)
.then(function(r){
    return r.headers;
}).then(function(d){
    console.log(d)
})


// by using JSON.parse(data) we get object
fetch('api.json',options)
.then(function(resp){
    // let parseData = JSON.parse(database);
    return resp.json();

}).then(function(parseData){
    console.log(parseData)
})
