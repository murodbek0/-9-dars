// forEach

// 1 misol

// function sum(arr) {
//     let res = [];
//     arr.forEach(function(value) {
//       res.push(value * 2);
//     });
//     return res;
//   }
//   let arr = [1, 2, 3, 4, 5];
//   let res = sum(arr);
//   console.log(res);

// 2 misol

// function sum(arr) {
//     let res = [];
//     arr.forEach(function(value) {
//       res.push(value.toUpperCase());
//     });
//     return res;
//   }
//   let arr = ['salom','alik','hayr'];
//   let res = sum(arr);
//   console.log(res);

// 3 misol
// function sum(arr) {
//     let res = [];
//     arr.forEach(function(value) {
//       res.push(value + 5);
//     });
//     return res;
//   }
//   let arr = [10,20,30,40,50];
//   let res = sum(arr);
//   console.log(res);

// 4 misol

//   let arr = [
//     { name: 'Ali', grade: 85 },
//     { name: 'Vali', grade: 92 },
//     { name: 'Hasan', grade: 78 }
//   ];

//   function name(arr) {
//     arr.forEach(function(value) {
//       console.log(value.name + ': ' + value.grade);
//     });
//   }

//   name(arr);

// map ===

// 1 misol

// function sum(arr) {
//    return arr.map(function(value) {
//     return value * 2;
//     });
//   }
//   let arr = [1,2,3,4,5];
//   let res = sum(arr);
//   console.log(res);

// 2 misol

// function sum(arr) {
//    return arr.map(function(value) {
//     return value.toUpperCase();
//     });
//   }
//   let arr = ['salom','salomat','hayr'];
//   let res = sum(arr);
//   console.log(res);

// 3 misol

// function sum(arr) {
//    return arr.map(function(value) {
//     return value + 5;
//     });
//   }
//   let arr = [10,20,30,40,50];
//   let res = sum(arr);
//   console.log(res);

// 4 misol

const students = [
    {name: 'Ali', grade: 85},
    {name: 'Vali', grade: 92},
    {name: 'Hasan', grade: 78}
  ];

  let res = students.map(function (value) {
    let natija = value.grade += 10

    return natija
    
  })

  console.log(res);

// filter


// 1 misol

// function sum(arr) {
//     return arr.filter(function(value) {
//       return value % 2 === 0;
//     });
//   }
//   let res = [1, 2, 3, 4, 5];
//   let arg = sum(res);
//   console.log(arg);
  

// 2 misol


// function sum(arr) {
//     return arr.filter(function(value) {
//         return value.length > 5
//     });
//   }
//   let res = ['apple', 'banana', 'cherry', 'date'];
//   let arg = sum(res);
//   console.log(arg);


// 3 misol

// function sum(arr) {
//     return arr.filter(function(value) {
//         return value >= 18
//     });
//   }
//   let res = [1,2,3,4,45,69,32];
//   let arg = sum(res);
//   console.log(arg);

// 4 misol
 
// shu misolga shumadim 

  
// some/every 

// 1 misol

//   function sum(arr) {
//     return arr.some(function(value){
//     return value > 0;
    
//     })
    
//   }
//   let res = [1,2,3,-4,-5];
//   console.log(sum(res));
  

// 2 misol
//   function sum(arr) {
//     return arr.some(function(value){
//     return value.length >5;
    
//     })
    
//   }
//   let res = ['salomat','hayr'];
//   console.log(sum(res));

// 3 misol


//   function sum(arr) {
//     return arr.every(function(value){
//     return value > 0;
    
//     })
    
//   }
//   let res = [1,2,3,4,5];
//   let res1 = [1,2,-3,4,5]
//   console.log(sum(res));
//   console.log(sum(res1));


// 4 misol
// function sum(arr) {
//     return arr.every(function(res) {
//       return res.grade > 50;
//     });
//   }
  
//   let arg = [ 
//     { name: 'Ali', grade: 60 },
//     { name: 'Vali', grade: 70 },
//     { name: 'Hasan', grade: 80 }
//   ];
//   let result = sum(arg);
//   console.log(result); 
  

// find


// 1 misol
//       function sum(arr) {
//     return arr.find(function(value){
//     return value > 10;
    
//     })
    
//   }
//   let res = [1,2,3,4,5,66,77];
//   console.log(sum(res));


// 2 misol

// function sum(arr) {
//     return arr.find(function(value) {
//       return value > 85;
//     });
//   }
  
//   let arg = [ 
//     { name: 'Ali', grade: 60 },
//     { name: 'Vali', grade: 70 },
//     { name: 'Hasan', grade: 80 }
//   ];
//   let result = (sum(arg))
//   console.log(result); 