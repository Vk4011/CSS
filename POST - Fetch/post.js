
//Creating  New User
let data={
    name: "Mark",
    gender:"Male",
    email: "gvikramram63@gmail.com",
    status: 'Active',
}




//Request configuration
let options = {
    method: "POST",
    headers:{
        'Content-Type': 'application/json',
        Accept : 'application/json', //send data in json form
        Authorization: 'Bearer  3d6eec66dd01522804b7df21908657ae330aaeacd9aecf4a914d8655b277d7bb'
    }
,
        body: JSON.stringify(data)


}
let url = "https://gorest.co.in/public-api/users";

fetch(url,options)
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
})