import React, { useState, useEffect} from 'react'
import ReactDom from 'react-dom'

export default function Modal(props) {
    const { setOpenModal} = props
    const [_document, _setDocument] = useState(null)

    useEffect(() => {
        _setDocument(document)
      }, [])
    
    if (!_document) { return null }

    return ReactDom.createPortal(
        <div className='fixed inset-0 bg-white text-slate-900 flex flex-col'>
            <div className='flex items-centre 
            p-4 justify-between border-b border-solid border-slate-900'>
                <h1>MENU</h1>
                <i onClick={() => setOpenModal(false)} className="fa-solid fa-xmark cursor-pointer"></i>
            </div>
            <div className='flex p-4 flex-col gap-3'>
                <h2 className='cursor-pointer'>Logout</h2>
            </div>
        </div>,
    _document.getElementById('portal')
    )
}
