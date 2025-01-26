import { IKImage } from 'imagekitio-react'
import React from 'react'

const IK = ({src,className,alt,w,h}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_ENDPOINT}
    path={src}
    className={className}
    loading='lazy'
    lqip={{active:true,quality:20}}
    alt={alt}
    width={w}
    height={h}
    />
  )
}

export default IK
