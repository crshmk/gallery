import useGallery from '../../useGallery'

const useClassName = () => {
  const { activeImageIndex } = useGallery() 
  const isFirstImage = activeImageIndex === 0
  return 'chevron chevron-right' + (isFirstImage ? ' inactive' : '')
}

export default useClassName