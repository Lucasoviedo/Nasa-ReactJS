import React, { useState } from 'react'
import { Modal } from '../modal/Modal.tsx'

const CalendarItem = ({num, data}) => {
    const [openModal , setOpenModal] = useState(false)
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")

    const handleChange = (e) => {
        if(e.target.id === "input-author"){
            setAuthor(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    const closeModal = () => {
        setOpenModal(!openModal)
    }

    const handleOpeningModal = () => {
        setOpenModal(true);
    }

    async function handleAddDescription() {


        const dataInfo = {
            description: description,
            date: data.date,
            author: author
          };

          console.log(dataInfo);
          
          // Crear las opciones para la solicitud Fetch
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataInfo)
          };
          
          // Realizar la solicitud Fetch
          if(author !== "" && description !== ""){
              fetch('http://localhost:3300/postDescriptionCalendar', options)
                .then(response => {
                  // Manejar la respuesta del servidor
                  if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error('Error en la solicitud');
                  }
                })
                .then(dataInfo => {
                  window.location.reload();
                })
                .catch(error => {
                  console.error(error);
                });
          }
    }

    return (
        <>
            <td>
                <img src={data?.url} className='calendar-item-background-image' alt={num}
                    onClick={handleOpeningModal}
                />
                <span className='calendar-item-background-num'>{num}</span>
            </td>
            {openModal && 
                <Modal closeModal={closeModal}>
                    <div className='calendar-modal-container'>
                        <div className='calendar-modal-info'>
                            <h2 className='calendar-modal-title'>{data.title}</h2>
                            <h3 className='calendar-modal-date'>{data.copyright} ~ {data.date}</h3>
                        </div>
                        <img src={data.hdurl} alt={data.media_type} className='calendar-modal-image'/>
                        <h6 className='calendar-modal-description'>{data.explanation}</h6>
                    </div>
                    <div className='calendar-modal-add-descriptions'>
                        <input id="input-author" value={author} onChange={handleChange} className='calendar-modal-add-author' placeholder='Author' />
                        <input id="input-description" value={description} onChange={handleChange} className='calendar-modal-add-description' placeholder='Description' />
                        <button className='calendar-modal-button' onClick={() => handleAddDescription()}>Add description</button>
                    </div> 
                    {(data.description).map( (element : string, index : number) => {
                        return <h6 className='calendar-modal-list-descriptions'>Author : {data.description[index].author} - Description : {data.description[index].description}</h6>
                    })}
                </Modal>
            }
        </>
    )
}

export default CalendarItem