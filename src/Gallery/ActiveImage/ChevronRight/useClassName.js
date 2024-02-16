import useGallery from '../../useGallery'

const useClassName = () => {
  const { activeImageIndex, activeSection } = useGallery() 
  const isLastImage = activeImageIndex >= activeSection.images.length - 1
  return 'chevron chevron-right' + (isLastImage ? ' inactive' : '')
}

export default useClassName