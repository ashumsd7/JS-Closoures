function foo(){
    var b=1;
    function inner(){
        return b;
    }
    return inner;
}

var get_dunc_inner= foo();
console.log(get_dunc_inner());
console.log(get_dunc_inner());
console.log(get_dunc_inner());