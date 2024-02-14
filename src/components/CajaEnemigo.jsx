import { useEffect } from 'react'
import randomPlay from '../utils/randomPlay'

export const CajaEnemigo = ({runEnemigo}) => {

  useEffect(() => {
    console.log('runEnemigo')
  }, [runEnemigo])

  return (
    <div className="bg-red-500">{/* valor random */}</div>
  )
}

export default CajaEnemigo
