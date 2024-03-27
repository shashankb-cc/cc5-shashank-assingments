function assert(condition,message){
    if(condition){
        throw new Error(message);
        // console.error(message);
    }
}


function prime(a){
    //pre-contions
    //must be a number
    //must be greater than 1
    //must not be prime
    let isNotPrime=false;
    assert(typeof a!=='number',"a non-number parameter is detected");
    assert(a<2,"parameter must be greater that or equal to 2");

    for(let i=2;i<=Math.sqrt(a);i++){
        if(a%i===0){
            isNotPrime=true;
            assert(isNotPrime,`${a} is not prime number`);
            break;
        }
        // assert(a%i===0,`${a} is not prime number`);
    }
   if(!isNotPrime && typeof a==='number' && a>1){
    console.log(`${a} is a prime number`)
   }    
    
}

//post-conditions
prime(2);
prime(7);
prime(1);
prime();
prime("Hello");
prime(93);
prime(10);

