
import React , { useContext, useState } from "react";
import DesciprionContext from '../../contexts/DescriptionContext.tsx';
import './description.css'

export const Description = () => {
    const { descriptionData } = useContext(DesciprionContext);
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    
    const handleChange = (e) => {
        if(e.target.id === "input-author"){
            setAuthor(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    async function handleAddDescription() {
        const dataInfo = {
            description: description,
            date: descriptionData.date,
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
        {descriptionData &&
            <div className="description-container">
                <h2 className="description-title">{descriptionData.title}</h2>
                <h3 className="description-copyrigth">{descriptionData.copyright} ~ {descriptionData.date}</h3>
                <img className="description-image" src={descriptionData.hdurl} alt={descriptionData.media_type}/>
                <h5 className="description-description">{descriptionData.explanation}</h5>
                
                {descriptionData.description[0] && <h4>Comments</h4>}
                {(descriptionData.description).map( (element : string, index : number) => {
                    return  <div className="description-comments-container">
                                <h4 className="description-comments-author">Author : {descriptionData.description[index].author} </h4>
                                <h4 className="description-comments-description">"{descriptionData.description[index].description}"</h4>
                        </div>
                })}
                <h4>Add your comments...</h4>
                <form className="description-inputs-container">
                    <input id="input-author" value={author} onChange={handleChange} 
                    placeholder='Author' className="description-input-author" required/>
                    <input id="input-description" value={description} onChange={handleChange} 
                    placeholder='Description' className="description-input-description" required/>
                    <button onClick={() => handleAddDescription()}
                    type="submit" className="description-button">Add description</button>
                </form> 
            </div>
        }
        </>
    )
}
