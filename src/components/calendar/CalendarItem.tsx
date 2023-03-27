import React, { useContext } from 'react'
import DesciprionContext from '../../contexts/DescriptionContext.tsx';

const CalendarItem = ({num, data}) => {
    const { handleDescriptionChange } = useContext(DesciprionContext);

    const handleOpeningModal = () => {
        handleDescriptionChange(data)
        // window.scroll
        window.scrollTo({
            top: 550,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <td>
                <img style={{backgroundImage: data.url}} src={data?.url} className='calendar-item-background-image' alt={num}
                    onClick={handleOpeningModal}
                />
                <span className='calendar-item-background-num'>{num}</span>
            </td>
        </>
    )
}

export default CalendarItem