function facto(n){
    let result =1;
    for(let i=2; i<=n; i++){
        result= result*i
    }
    return result
}


function factorial(n)
{
    return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);
}
  


function fact( n ){
    if(n==1 || n==0 ){return 1}
    return n*fact(n-1);
}
