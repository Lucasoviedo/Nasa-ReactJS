import React, { useState } from 'react'
import { Modal } from '../modal/Modal.tsx'

const CalendarItem = ({num, data}) => {
    const [openModal , setOpenModal] = useState(false)

    const closeModal = () => {
        setOpenModal(!openModal)
    }

    return (
        <>
            <td>
                <img src={data?.url} className='calendar-item-background-image' alt={num}
                    onClick={() => setOpenModal(true)}
                />
                <span className='calendar-item-background-num'>{num}</span>
            </td>
            {openModal && 
                <Modal closeModal={closeModal}>
                    <div className='calendar-modal-container'>
                        <img src={data.hdurl} alt={data.media_type} className='calendar-modal-image'/>
                        <div className='calendar-modal-info'>
                            <h2>{data.title}</h2>
                            <h3>{data.copyright} ~ {data.date}</h3>
                            <h5>{data.explanation}</h5>
                        </div>
                    </div>
                    {/* <h6>{data?.description[0]}</h6> */}
                </Modal>
            }
        </>
    )
}

export default CalendarItem