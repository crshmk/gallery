
import useGallery from '../../../useGallery'

const useOnKeyDown = (i) => {
  const { decrement, increment, setActiveImageIndex } = useGallery()
  
  const onKeyDown = e => {
    if(e.key === 'Enter') {
      setActiveImageIndex(i)
      return 
    } 
    if(e.key === 'ArrowLeft') {
      decrement()
      return 
    } 
    if(e.key === 'ArrowRight') {
      increment()
      return 
    }
  }
  return onKeyDown
}

export default useOnKeyDown 