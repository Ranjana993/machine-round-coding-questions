import React from 'react'

const Pagination = ({ products, total, page, setPage }) => {

  const handlePagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(total / 20)) {
      setPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  return (
    <>
      {
        products.length ? <div className='flex justify-center items-center gap-1 py-8'>
          <div className={`bg-white p-1 lg:p-2 text-black border-2 border-none rounded-xl transition-all shadow-2xl hover:scale-95 hover:shadow-2xl ${page <= 1 ? "bg-gray-600 cursor-not-allowed border-none" : "bg-black "}`} onClick={() => handlePagination(page - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <div className='font-semibold text-sm'>
            {
              [...Array(Math.ceil(total / 20))].map((_, id) => (
                <span
                  key={id}
                  onClick={() => handlePagination(id + 1)}
                  className='cursor-pointer text-sm  lg:text-2xl'
                  style={{ userSelect: 'none' }}
                >
                  {page === id + 1 ? '●' : '○'}
                </span>
              ))
            }
          </div>
          <div className={`bg-white p-1 lg:p-2 text-black border-2 rounded-xl transition-all shadow-2xl hover:scale-95 hover:shadow-2xl ${page >= (Math.ceil(total / 20)) ? "bg-gray-600 cursor-not-allowed border-none" : "bg-black "}`} onClick={() => handlePagination(page + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div> : null
      }

    </>

  )
}

export default Pagination