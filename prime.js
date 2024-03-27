function assert(condition,message){
    if(condition){
        throw new Error(message);
    }
}


function prime(a){
    //pre-contions
    //must be a number
    //must not be prime
    
    assert(typeof a!=='number',"a non-number parameter is detected");
    assert(a<2,"parameter must be greater that or equal to 2");

    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
        return true;
        }
    }   
    return false;
}

//post-conditions
assert(prime(2), "2 is not a prime number");
assert(prime(7), "7 is not a prime number");
assert(prime(1), "1 is not a prime number");
assert(prime(), "No parameter is detected");
assert(prime("Hello"), "Hello is not a prime number");
assert(prime(93), "93 is not a prime number");
assert(prime(10), "10 is not a prime number");
assert(prime(47), "47 is not a prime number");

