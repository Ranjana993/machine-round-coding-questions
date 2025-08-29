/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./index.css"


function ChipsInput() {
  const [chips, setChips] = useState("")
  const [chipsContainer, setChipsContainer] = useState(() => {
    return localStorage.getItem("chips") ? JSON.parse(localStorage.getItem("chips")) : [];
  })



  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(chipsContainer));
  }, [chipsContainer]);

  useEffect(() => {
    const data = localStorage.getItem("chips")
    if (data) {
      setChipsContainer(JSON.parse(data))
    }
  }, [])


  const handleInputChange = (e) => setChips(e.target.value)


  const handleKeyDown = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault();
      const trimmedValue = chips.trim()
      if (trimmedValue) {
        const newcChips = {
          id: Date.now(),
          item: trimmedValue
        }

        setChipsContainer([...chipsContainer, newcChips])
        setChips("")
      }
    }
  }

  const handleRemoveChip = (chipToRemove) => () => {
    setChipsContainer((chipsContainer) => chipsContainer.filter((chip) => chip.id !== chipToRemove))
  }

  return (
    <div className='bg-black w-full h-screen p-5 flex flex-col items-center justify-center'>
      <h2 className='text-white text-7xl font-semibold mb-5 text-center '>CHIPS INPUTS</h2>
      <input
        type="text"
        value={chips}
        placeholder="Type a chip and press Enter"
        className="w-1/2 p-2 mt-5 rounded border-none outline-none "
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className='flex gap-3 mt-5 flex-wrap w-1/2 justify-center'>
        {
          chipsContainer.map((chips, index) => {
            return (
              <div key={index} className="bg-violet-700 text-white px-4 py-2 rounded-full flex items-center gap-2">
                {chips.item} <span onClick={handleRemoveChip(chips.id)} className='text-red-800 font-bold text-xl cursor-pointer'>X</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ChipsInput;