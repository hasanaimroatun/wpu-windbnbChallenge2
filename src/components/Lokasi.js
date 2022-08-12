import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import Stays from './stays.json'

function Lokasi({setPilihLokasi, tampilkanLokasi}) {
  const location = []

  Stays && Stays.map(stay => {
    return (
      !location.includes(stay.city)? (location.push(stay.city)) : null
    )
  })
   
  return (
    <div>
      {location && location.map((l) => {
        return (
          <div 
          key={l.charCodeAt(0)} 
          onClick={() => {setPilihLokasi(<div className='tambahLokasiDanTamu2'>{l}, Findland</div>)}}
          className={tampilkanLokasi}
          >
            <MdLocationPin size='1.5em' color='#4f4f4f' className='pin'/>
            <span>{l}, Findland</span>
          </div>
        )
      })}
    </div>
  )
}

export default Lokasi