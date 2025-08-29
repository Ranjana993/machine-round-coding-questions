import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const App = () => {
  const [product, setProduct] = useState([])
  const [page, setPage] = useState(1)
  const[total , setTotal] = useState(0)

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`)
      const data = await res.json()
      if(data && data.products){
        setProduct(data.products)
        setTotal(data.total)
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [page])
  return (
    <>
      <div className='w-[full] h-full flex flex-col items-center justify-center bg-gradient-to-bl from-violet-800 to-black  text-white min-h-screen'>
        <h1 className=' py-8 lg:py-12 px-4 text-center text-xl lg:text-5xl font-bold capitalize '>Buy your aasthetic products with Us </h1>
        <div className='py-8 px-4 w-[90%] lg:w-[80%] m-auto'>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 m-auto'>
            {
              product.map((item) => (
                <div className='bg-white text-black border-2 rounded-xl transition-all shadow-2xl hover:scale-95 hover:shadow-2xl border-gray-300 p-4' key={item.id} style={{ boxShadow: '0 8px 24px 0 rgba(255,255,255,0.5)' }} >
                  <img src={item.images[0]} alt="" className='w-24 object-cover rounded-xl lg:w-1/2' />
                  <h3>{item.title}</h3>
                  <p className='text-sm'>{item.description}</p>
                  <div>
                    <span>price :{item.price}</span>
                    <span>Rating :{item.rating}</span>
                  </div>
                </div>
              ))
            }
          </div>
          <Pagination products={product} total={total} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  )
}

export default App