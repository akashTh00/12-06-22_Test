// Q. What will be returned if you look for the index of something that does not exist? 
// sol 

var arr= ['a','b','c','d']; 
for(let i=0;i<arr.length;i++){
    if(arr[i]=='e'){
        console.log('index of b is ',i);
    }
}
// no output gets print in this case.