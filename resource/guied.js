// function fromCallBack(callBackFucntion) {
//     console.log('from call back');
//     setTimeout(() => {
//         callBackFucntion()
//         setTimeout(() => {
//             callBackFucntion()
//         }, 5000);
//     }, 5000);

//     setTimeout(() => {
//         callBackFucntion()
//     }, 5000);
// }

// fromCallBack(()=> {
//     console.log('funcion completed');
// })

// function fromPromise () {
//     return new Promise ((resolve , reject )=> {
//         console.log('promise started');
//         setTimeout(() => {


            
//         console.log('promise completed');
            
//             // reject('my error')
//             resolve ('harish')
            
//         }, 3000);
//     } )
// }

// fromPromise()
// .then(myname =>{
//     console.log('promise compleded ', myname);
// })
// .catch(error =>{
//     console.log('error occured' , error);
// })


// async function usingAsyncFun  () {
//  try {

//     console.log('hey');
//     const myName =  fromPromise()

//     console.log('async compled ', myName );
//  } catch (error) {
//      console.log('error occured async' , error);
//  }   
// }
// usingAsyncFun()

const i = "i am #good #bad"

const item = i.split(" ").filter((item)=>{
   return item.includes("#")
})
console.log(item);