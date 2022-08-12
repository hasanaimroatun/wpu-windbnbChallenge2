import React, {useReducer, useEffect, useRef} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}

function Guests({
    setTambahkanTamu, 
    tampilkanKategoriTamu,
    tKategoriUsiaTamu,
    tTombolKurang,
    tHasilTambahKurang,
    tTombolTambah
}) {
    const [countAdult, dispatch1] = useReducer(reducer, initialState)
    const [countChildren, dispatch2] = useReducer(reducer, initialState)
    const tambahkanTamuRef = useRef()

    useEffect(() => {
      tambahkanTamuRef.current = setTambahkanTamu(<div className='tambahLokasiDanTamu2'>{countAdult + countChildren} guests</div>)
    }, [setTambahkanTamu, countAdult, countChildren])
    
  return (
    <div>
        <div className='containerTombolKategori'>
            <div className={tampilkanKategoriTamu}>Adults</div>
            <div className={tKategoriUsiaTamu}>Ages 13 or above</div>
            <div onClick={tambahkanTamuRef.current}>
                <button 
                onClick={() => dispatch1('decrement')}
                className={tTombolKurang}
                >
                    -
                </button>
                <span className={tHasilTambahKurang}>{countAdult}</span>
                <button 
                onClick={() => dispatch1('increment')}
                className={tTombolTambah}
                >
                    +
                </button>
            </div>
        </div>
        <div className='containerTombolKategori'>
            <div className={tampilkanKategoriTamu}>Children</div>
            <div className={tKategoriUsiaTamu}>Ages 2 - 12</div>
            <div onClick={tambahkanTamuRef.current}>
                <button 
                onClick={() => dispatch2('decrement')}
                className={tTombolKurang}
                >
                    -
                </button>
                <span className={tHasilTambahKurang}>{countChildren}</span>
                <button 
                onClick={() => dispatch2('increment')}
                className={tTombolTambah}
                >
                    +
                </button>
            </div>
        </div>
    </div>
  )
}

export default Guests