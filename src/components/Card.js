import React, {useState, useEffect} from 'react'
import Stays from './stays.json'
import { MdGrade } from 'react-icons/md'
import './myStyle.css'
import JudulUtama from './JudulUtama'
import Tombol from './Tombol'

function Card() {
    const [apartments, setApartments] = useState([])
    const [tambahLokasi, setTambahLokasi] = useState('')
    const [tambahTamu, setTambahTamu] = useState('')

    useEffect(() => {
      setApartments(Stays)
      setTambahLokasi('Add location')
      setTambahTamu('Add guests')
    }, [])
    
  return (
    <div>
        <Tombol 
            tambahLokasi={tambahLokasi} 
            setTambahLokasi={setTambahLokasi}
            tambahTamu={tambahTamu}
            setTambahTamu={setTambahTamu}
            setApartments={setApartments}
        />
        <JudulUtama />
        <div className='containerGbrUtm'>
            {apartments && apartments.map(apartment => {
                return (
                    <div key={apartment.rating}>
                        <img src={apartment.photo} alt={apartment.city} className='gambarUtama'/>
                        <br/><br/>
                        <div>
                            {apartment.superHost? (<span className='super'>SUPER HOST</span>) : null}
                            <span className='detail'>{apartment.type} {apartment.beds !== null && (<span>. {apartment.beds} beds</span>)}</span> 
                            <span className='posisiRate'>
                                <MdGrade size='1.5em' color='#eb5757' className='bintang'/>
                                <span className='rate'>{apartment.rating}</span>
                            </span>
                        </div>
                        <div className='judul'>{apartment.title}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Card