//!   debounce 
// function debounce(func, delay = 300) {
//   let timerId;
//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }
// const searchInput = document.getElementById('search');
// const search = debounceFn((query) => {
//   console.log('Searching for:', query);
// }, 500);

// searchInput.addEventListener('input', (e) => {
//   search(e.target.value);
// });


// ! Practice ...
// function debounceFn(fn , delay = 300){
//   let timer ;
//   return function(...args){
//     if(timer){
//       clearTimeout(timer);
//     }
//     timer = setTimeout(()=>{
//       fn.apply(this , args)
//     },[delay])
//   }
// }
// const searchInput = document.getElementById("search")
// const res = debounceFn((q)=>{
//   console.log(q)
// })
// searchInput.addEventListener("input" , (e)=>{
//   res(e.target.value)
// })






















// throttle..
function throttle(func, limit = 300) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= limit) {
      lastTime = now;
      return func.apply(this, args);
    }
  };
}
// const searchInput = document.getElementById("search")
// const res = throttle((q)=>{
//   console.log(q)
// })
// searchInput.addEventListener("input" , (e)=>{
//   res(e.target.value)
// })


function throttleFn(fn , delay=500) {
  let lastTime = 0 ;
  return function(...args){
    const now = Date.now();
    if(now - lastTime >= delay){
      lastTime = now;
      return fn.apply(this , args)
    }
  }
}
const searchInput = document.getElementById("search")
const res = throttleFn((q) => {
  console.log(q)
})
searchInput.addEventListener("input", (e) => {
  res(e.target.value)
})