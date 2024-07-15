function receivesAFunction(j){
    return j();
}
function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction(){
    return function(){};
}