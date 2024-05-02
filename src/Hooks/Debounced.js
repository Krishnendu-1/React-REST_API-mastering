import React, { useState } from 'react'
import { useEffect } from 'react'


export const useDebounce=function (value,delay=200) {
  const [debouncedval,setDebouncedval]=useState(value)
  useEffect(()=>{
      const run=setTimeout(() => {
          setDebouncedval(value)
      }, delay);
      return ()=>{
          clearTimeout(run)
      }
  },[value,delay])
  return debouncedval;

}
