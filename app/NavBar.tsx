import React from 'react'
import { UserButton } from "@clerk/nextjs";


function NavBar() {
  return (
    <div>
        
        <UserButton afterSignOutUrl="/"/>
    </div>
    
  )
}

export default NavBar