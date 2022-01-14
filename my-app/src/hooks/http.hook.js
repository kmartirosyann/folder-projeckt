import { useCallback, useState } from 'react'

export  const useHttp =()=>{
  const [error,setError]= useState(false)
  const [loading,setLoading] = useState(null)
  const request =useCallback( async (url,method='GET',body=null,headers={}) => {
    setLoading(true)

    try{
      if(body){
       body=JSON.stringify(body)
        headers= {
          'Content-Type': 'application/json'
        }
      }
    const response = await fetch(url,{method, headers,body})
    const data = await response.json()

      if(!response.ok){
        throw new Error(data.message || "warning")
      }
      setLoading(false)
      return data
    }catch (e){
      setLoading(false)
      setError(e.message)
      throw e
    }

  },[])
  return {error,loading,request}
}
