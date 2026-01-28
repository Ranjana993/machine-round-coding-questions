import React from 'react'

const Pagination = ({ page, setPage, total }) => {

  const totalPage = Math.ceil(total / 12)

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPage) {
      setPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
  }
  return (
    <div className='pagination'>
      <p onClick={() => handlePagination(page - 1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg></p>
      <div>
        {
          [...Array(totalPage)].map((_, index) => (
            <span
              key={index}
              className='page'
              style={{
                backgroundColor: page === index + 1 ? 'red' : '',
                color: page === index + 1 ? 'white' : '',
                fontWeight: page === index + 1 ? 'bold' : 'normal',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {index + 1}
            </span>
          ))
        }
      </div>
      <p onClick={() => handlePagination(page + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></p>
    </div>
  )
}

export default Pagination