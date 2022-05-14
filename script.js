

async function pokemon(){
    
    console.log("inside function")
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    
    console.log("before response");
const pokemons=await response.json();

return pokemons;
    
}
console.log("before calling");


    let aa=pokemon();
console.log("after calling");
console.log(aa);

try{
    aa.then(data => console.log(data));
    console.log("try");
}
catch(e){
console.log(e.message);
}





let myfetch = document.getElementById('myfetch')
myfetch.addEventListener('click', ()=>{

    poke();

})





function poke()
{
    let bb;
    async function pokemon1(){
    
        
        const response = await fetch('https://pokeapi.co/api/v2/ability/');
        
        
    const pokemons=await response.json();
    
    return pokemons;
        
    }
    bb=pokemon1();
    console.log(bb);
   
    try{
       bb.then(data => console.log(data));
        console.log("try block");
    }
    catch(e){
    console.log(e.message);
    }
    
   
    
}
