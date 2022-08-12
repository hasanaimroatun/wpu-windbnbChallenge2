import React, {useState} from 'react'
import './myStyle.css'
import {MdSearch, MdClear} from 'react-icons/md'
import Lokasi from './Lokasi'
import Guests from './Guests'
import Stays from './stays.json'

const Pencarian = ({
  isOpen, 
  toggleIsOpen, 
  pembungkusLBox, 
  tampilkanLokasi, 
  tampilkanKategoriTamu,
  tKategoriUsiaTamu,
  tTombolKurang,
  tHasilTambahKurang,
  tTombolTambah,
  handleTampilkanLokasi,
  handleTampilkanTamu,
  setApartments,
  setTambahLokasi,
  setTambahTamu
}) => {
    const [pilihLokasi, setPilihLokasi] = useState(<div className='tambahLokasiDanTamu'>Add location</div>)
    const [tambahkanTamu, setTambahkanTamu] = useState(<div className='tambahLokasiDanTamu'>Add guests</div>)

    let filterLoc = pilihLokasi.props.children[0] !== 'A' ? 
      (Stays && Stays.filter(stay => {return stay.city === pilihLokasi.props.children[0]})) 
      : Stays

    let filterGuest = tambahkanTamu.props.children[0] !== 'A' ? 
      (filterLoc && filterLoc.filter(f => {return f.maxGuests >= tambahkanTamu.props.children[0]})) 
      : filterLoc

    const handleClick5 = () => {
      setApartments(filterGuest)
      setTambahLokasi(pilihLokasi)
      tambahkanTamu.props.children[0] !== 0 && setTambahTamu(tambahkanTamu)
    }

  return (
    <div>
      {isOpen?
        <div className={pembungkusLBox}>
          <div className='containerTombolLBox'>
            <div>
              <span className='editSearch'>Edit your search</span>
              <MdClear color='#333' className='close' onClick={toggleIsOpen}/>
            </div>
            <span>
              <button className='tombolLokasi' onClick={handleTampilkanLokasi}>
                <div className='lokasiDanTamu'>LOCATION</div>
                <div>{pilihLokasi}</div>
              </button>
            </span>
            <span>
              <button className='tombolTamu' onClick={handleTampilkanTamu}>
                <div className='lokasiDanTamu'>GUESTS</div>
                <div>{tambahkanTamu}</div>
              </button>
            </span>
            <span>
              <button  onClick={() => {toggleIsOpen(); handleClick5()}} type='submit' className='tombolPencarian'>
                <MdSearch size='1.5em' color='#f2f2f2' className='gbrPencarian'/>
                <span className='pencarian'>Search</span>
              </button>
            </span>

            <div>
              <Lokasi setPilihLokasi={setPilihLokasi} tampilkanLokasi={tampilkanLokasi}/>
              <Guests 
                setTambahkanTamu={setTambahkanTamu} 
                tampilkanKategoriTamu={tampilkanKategoriTamu}
                tKategoriUsiaTamu={tKategoriUsiaTamu}
                tTombolKurang={tTombolKurang}
                tHasilTambahKurang={tHasilTambahKurang}
                tTombolTambah={tTombolTambah}
              />
            </div>

          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Pencarian