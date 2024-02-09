//PROMISE


setTimeout(function(){
    console.log("hello world");

},4000)

setInterval(function(){
    document.write("wow!")
})

//PROMISE ONE 

let PromiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("THIS IS FIRST PROMISE");
        resolve(); // Resolving the promise
    }, 1000); // Timeout set to 1000 milliseconds
});

PromiseOne.then(function() {
    console.log("PromiseOne has been resolved");
});



//PROMISE TWO



let PromiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ name: "ASAD", Password: "12345" });
    }, 2000);
});

PromiseTwo.then(function(user) {
    console.log(user);
});

//PROMISE THREE

let promiseThree = new Promise (function(resolve, reject){
    setTimeout (function(){
        resolve({username: "abc", email: "abc@gmail.com"})
    }, 2000)
})

promiseThree.then(function(elec){
    return elec.email;
}).then(function(userEmail){
    console.log(userEmail);
})


//PROMISE FOUR

let promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "abcd", password : "3456"})
        }
        else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    }, 4000)
})

promiseFour.then(function(apple){
    return apple.name;
})
.then(function(myName){
    console.log(myName);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("PROMISE HAS BEEN OR REJECT!");
})


// PROMISE FIVE

let PromiseFive = new (function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({party : "xyz", email : "abc@gmail.com"})

        }
        else{
            reject("ERROR IN THIS JS FUNCTION")
        }
    }, 3000)


})

async function consumedPromiseFive(){
    try{
        let resp = await PromiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFive()


//API WITH ASYNC


async function getAllUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        document.write(JSON.stringify(data))
        }
        catch(error){
            console.log(error);
        }
}
getAllUsers()
