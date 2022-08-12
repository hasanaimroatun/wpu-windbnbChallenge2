import React, {useState} from 'react'
import {MdSearch} from 'react-icons/md'
import imgBnb from './icon/logo.png'
import './myStyle.css'
import Pencarian from './Pencarian'
import Stays from './stays.json'

function Tombol({tambahLokasi, setTambahLokasi, tambahTamu, setTambahTamu, setApartments}) {
  const [isOpen, setIsOpen] = useState(false)
  const [pembungkusLBox, setPembungkusLBox] = useState('none')
  const [tampilkanLokasi, setTampilkanLokasi] = useState('none')
  const [tampilkanKategoriTamu, setTampilkanKategoriTamu] = useState('none')
  const [tKategoriUsiaTamu, setTKategoriUsiaTamu] = useState('none')
  const [tTombolKurang, setTTombolKurang] = useState('none')
  const [tHasilTambahKurang, setTHasilTambahKurang] = useState('none')
  const [tTombolTambah, setTTombolTambah] = useState('none')

  const toggleIsOpen = () => {
      setIsOpen(!isOpen)
      setPembungkusLBox('lbox')
  }

  const handleTampilkanLokasi = () => {
    setTampilkanLokasi('pilihanLokasi')
    setTampilkanKategoriTamu('none')
    setTKategoriUsiaTamu('none')
    setTTombolKurang('none')
    setTHasilTambahKurang('none')
    setTTombolTambah('none')
  }

  const handleTampilkanTamu = () => {
    setTampilkanKategoriTamu('kategoriTamu')
    setTKategoriUsiaTamu('kategoriUsiaTamu')
    setTTombolKurang('tombolKurang')
    setTHasilTambahKurang('hasilTambahKurang')
    setTTombolTambah('tombolTambah')
    setTampilkanLokasi('none')
  }
  
  return (
    <div>
        <Pencarian 
          isOpen={isOpen} 
          toggleIsOpen={toggleIsOpen} 
          pembungkusLBox={pembungkusLBox} 
          tampilkanLokasi={tampilkanLokasi}
          tampilkanKategoriTamu={tampilkanKategoriTamu}
          tKategoriUsiaTamu={tKategoriUsiaTamu}
          tTombolKurang={tTombolKurang}
          tHasilTambahKurang={tHasilTambahKurang}
          tTombolTambah={tTombolTambah}
          handleTampilkanLokasi={handleTampilkanLokasi}
          handleTampilkanTamu={handleTampilkanTamu}
          setApartments={setApartments}
          setTambahLokasi={setTambahLokasi}
          setTambahTamu={setTambahTamu}
        />
        <span>
            <img src={imgBnb} alt="logo" 
              className='bnb' 
              onClick={() => {
                setApartments(Stays); 
                setTambahLokasi(<div>Add location</div>);
                setTambahTamu(<div>Add guests</div>)
              }}/>
        </span>
        <span className='containerTombol'>
          <button 
            onClick={() => {toggleIsOpen(); handleTampilkanLokasi()}} 
            className='kotak1'
          >
              {tambahLokasi}
          </button>
          <button 
            onClick={() => {toggleIsOpen(); handleTampilkanTamu()}} 
            className='kotak2'
          >
            {tambahTamu}
          </button>
          <button  type='submit' className='kotak3'>
              <MdSearch size='1.5em' color='#eb5757'/>
          </button>
        </span>
    </div>
  )
}

export default Tombol