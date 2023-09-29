const printPrime = (num) => {
  const arr = [2];
  for (let i = 3; i < num; i++) {
    for(let j = 2; j < i; j++){
        if(i % j === 0){
            return
        }
        arr.push(i)
    }
  }
  return arr
};
console.log(printPrime(30))