function findPair(size){

    let socks = [];  //Array for storing input values
    let pair = 0;    //Number of pairs in array
    let unique = new Map();  //A Map object for counting the occurence of value in socks array


    for(i = 0; i < n; i++){
        //Taking the input and entering into array
        socks.push(prompt(`Enter ${i+1}${(i+1)===1 ? 'st':'th'} element: ` ))
    
        //Checking if the value exists in map and if does the incrementing the value
        if ( unique.has(socks[i])){
    
            unique.set(socks[i] , (unique.get(socks[i]) + 1))
            if (unique.get(socks[i]) % 2 === 0){
                pair += 1;
            }
        }else{
            //Entering the keys in map
            unique.set(socks[i], 1)
        }
    }

    console.log(`Total No. of pair are : ${pair}`)

    document.getElementById("button").addEventListener("click", () => {
        document.getElementById("result").innerHTML = pair;
    });

};

const n = prompt('Enter size : ');

if(n <= 1){
    alert('ENTER MORE THAN 1 ELEMENT');
    location.reload()
}else{
    findPair(n);
}
