import React from 'react'
import { useId,useState,useEffect } from 'react'
import axios from'axios'
import { useDebounce } from './Hooks/Debounced';

function App() {
  const id=useId();
  const [chapter,setChapter]=useState(1)
  const Search=useDebounce(chapter)
  const [chaptername,setChaptername]=useState('')
    useEffect(()=>{
      (async ()=>{
        try{
          const response=await axios.get(`https://www.anapioficeandfire.com/api/books/${Search}`)
        console.log(response.data);
        setChaptername(response.data.name);
        }
        catch(error){
            window.alert(error);
        }
      })()
        },[Search]);

  return (
    <div>
      <label htmlFor={id}>Enter the Chapter number to get insights</label>
      <input type="number" name="chapternumber" id={id} placeholder='Stay tuned' min={1} onChange={(e)=>{setChapter(e.target.value)}} className=' w-[10vw] h-5 placeholder:text-center text-center'/>
      <div>
      <h1>chpter (Default=1) : {Search}</h1>
      <h1>chpter name : {chaptername}</h1>
    </div>
    </div>
  )
}

export default App
