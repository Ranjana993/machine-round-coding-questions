function cached(fn, ttl = 30000) {
  let cache = new Map();

  return async function (...args) {
    let key = JSON.stringify(args);
    let cachedVal = cache.get(key);
    if (cachedVal && Date.now() < expiresAt) {
      return cachedVal.value;
    }
    let res = await fn(args)

    cache.set(key, {
      data: res,
      expiresAt: Date.now() + ttl
    })
    return res;
  }
}


function pagination(array, page, perpage) {
  let start = (page - 1) * perpage;
  let end = start + perpage;
  const data = array.slice(start, end);
  return (data)
}  
//  pagination ....


let fnCall = cached( async () =>{
  let data =  await fetch("https://dummyjson.com/todos")
  return data.json()
})

let res = fnCall().then(res => {
  console.log(res)
  let data = res.todos
  console.log(pagination(data, 1, 10))
}
).catch(err => console.log(err))





