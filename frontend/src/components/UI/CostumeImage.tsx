import React from 'react'

const CostumeImage = ({ src, alt, ...props }) => {
  return (
    <img src={`${process.env.PUBLIC_URL}/assets/images/${src}`} alt={alt} {...props} />
  )
}

export default CostumeImage