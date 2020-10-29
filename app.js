// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// async function exercise1() {
//     console.log('I should log before the data!');
//     const res = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json = await res.json();
//     console.log(json);
//     console.log('I should log after the data!');
// }

// exercise1();
// // console.log('I should log before the data!');
// // fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// // .then((res) => res.json()).then((json) => {
// //     console.log(json)
// //     console.log('I should log after the data!');
// // })
// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => {
//     console.log(json)
//     console.log('I should be between the cats and dogs');
// }).then(
//     fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => {console.log(json)
//     console.log('I should be last');
// })
// )






// console.log('I should be before the cats data');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be between the cats and dogs');
// fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
// .then((res) => res.json()).then((json) => console.log(json))
// console.log('I should be last');

// async function exercise2(){
//     console.log('I should be before the cats data');
//     const res1 = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     const json1 = await res1.json();
//     console.log(json1);
//     console.log('I should be between the cats and dogs');
//     const res2 = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//     const json2 = await res2.json();
//     console.log(json2);
//     console.log('I should be last');
// }

// exercise2();

//promises!!!!


// const successfulPromise = new Promise(function(resolve, reject) {
// //     resolve()
// // })
// console.log(successfulPromise);



// const successfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve()
//     }, 3000)
//   })

//   console.log(successfulPromise)

// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//     reject()
// // })
// // console.log(unsuccessfulPromise); 

// const unsuccessfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(reject, 3000)
//   })
//   console.log(unsuccessfulPromise)

//   setTimeout(function(){
//       console.log(successfulPromise);
//       console.log(unsuccessfulPromise);
//   }, 4000);

  const status="OK";
  const conditionalPromise = new Promise (function(resolve, reject){
      if(status==="OK"){
          resolve('this will');
      }else{
          reject('this wont');
      }
  })
  conditionalPromise.then((res) => console.log(res)).catch((err)=> console.error(err))

//   console.log(conditionalPromise);
// const myPromiseToConsume = new Promise(function(resolve, reject) {
//     // to be filled in
//   })
//   myPromiseToConsume
//   .then((result) => console.log(result))
//   .catch((error) => console.log('There was an error: ' + error))

function myFetch(url){
    const myPromise = new Promise(function(resolve, reject){
        //get the data from the web
        const webData = somehowGetWebData()
        if(webData.statusCode < 400) {
            resolve()
        }else {400 <= webData.statusCode <= 599
            reject()
        }
    })
    return myPromise;
}
// myFetch('some-url.com').then(...).catch(...);