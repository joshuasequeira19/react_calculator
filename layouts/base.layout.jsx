import React from 'react'


function BaseLayout({ children }) {
  return (
    <main className='root_ctn'>{children}</main>
  )
}

export default BaseLayout