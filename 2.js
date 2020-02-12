function foo(outer_Arg){
    function inner(inner_arg){
        return outer_Arg+inner_arg;
    }
    return inner;

}

var get_function_inner= foo(5);

console.log(get_function_inner(4));
console.log(get_function_inner(3));
