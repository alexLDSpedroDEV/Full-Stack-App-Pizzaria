import { useRouter } from 'next/navigation'
import React from 'react'

function FoodMenu() {

  const router = useRouter();
  const { type } = router.prefetch




  return (
    <div>
      <h1>dado recebido: {type}</h1>
      
      
    </div>
  )
}

export default FoodMenu