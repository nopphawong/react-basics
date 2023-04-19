import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url: string) => {
  const [hasError, setErrors] = useState<boolean>(false)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch(() => setErrors(true))
  }, [])

  return { data, hasError }
}

export default useFetch