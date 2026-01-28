import { useEffect, useState } from 'react'
import Pagination from './component/Pagination'

const App = () => {
  const [data, setData] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes?limit=12&skip=${(totalPage*currPage)/12}`)
        const jsonData = await res.json()
        if (jsonData && jsonData.recipes) {
          console.log("jsonData", jsonData.recipes)
          setData(jsonData.recipes)
          setTotalPage(jsonData.total)
        }
      } catch (error) {
        console.log("error", error)
      }
    }
    console.log("data", data)
    fetchData()
  }, [currPage])


  return (
    <>
      <div className='wrapper'>
        <h1>Your receipe app is here to instruct you</h1>
        <div className='container'>
          <div className='data_container'>
            {
              data.map((item) => ( 
                <div key={item.id} className='card'>
                  <img src={item?.image} alt={item?.image} />
                  <p>{item?.name} </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Pagination item={data} page={currPage} setPage={setCurrPage} total={totalPage}/>
    </>
  )
}

export default App