// function outer(){
//     var arr=[];
//     var i;
//     for (i=0;i<4;++i)
//     {
//         arr[i]= function()
//         { 
//             return i;
//         }
//     }
//     return arr;
// }

// var get_arr= outer();

// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());




var ob={

    "pin":23
    
    
};


var ob1={

    "pin":23
    
    
};





ob= JSON.stringify(ob);

ob1= JSON.stringify(ob1);
console.log(typeof(JSON.stringify(ob)));


console.log(ob==ob1);


// var arr=["1",2];
// var arr1= ["1","2"]
// arr= JSON.stringify(arr);
// arr1=JSON.stringify(arr1);


// console.log(arr);
