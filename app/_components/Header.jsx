import { Button } from '@/components/ui/button'
import Image from 'next/image'

import React from 'react'

function Header() {
  
  return (
    <div className='flex justify-between p-5 shadow-sm'>
<Image 
  src="/seedofocode_logo.png" 
  width={150} 
  height={50} 
  style={{ width: 'auto', height: 'auto' }} 
  alt="logo"
/>        <Button><a href="/dashboard">Get Started</a></Button>
    </div>
  )
}

export default Header