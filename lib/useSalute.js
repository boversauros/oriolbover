import { useEffect, useState } from 'react'
const hour = new Date().getHours()

const useSalute = () => {
  const [salute, setSalute] = useState('Hello world')

  useEffect(() => {
    if (hour > 5 && hour <= 12) {
      setSalute('Good Morning!')
    } else if (hour > 12 && hour <= 18) {
      setSalute('Good Afternoon!')
    } else {
      setSalute('Good Evening!')
    }
  }, [])

  return salute
}

export default useSalute
