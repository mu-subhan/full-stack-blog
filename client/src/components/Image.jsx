import { IKImage } from 'imagekitio-react'

const Image = ({src,className,alt,w,h}) => {
  return (
    <IKImage
         urlEndpoint={import.meta.env.VITE_IK_ENDPOINT_URL}
         path={src}
         className={className}
         loading='lazy'
         alt={alt}
         lqip={{active:true,quality:20}} 
         width={w}
         height={h}
         transformation={[
          {
            width:w,
            height:h,
          },
         ]}
         />
  )
}

export default Image