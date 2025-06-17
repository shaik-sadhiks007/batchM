
console.log("js is started");


// error handling (exception handling)


try {

    let age = 17;

    if(age < 18) {
        throw new Error('you are not allowed to this website because u r under 18')
    }

} catch(e) {
    console.log(e.message,'error')
}


console.log("js is ended");