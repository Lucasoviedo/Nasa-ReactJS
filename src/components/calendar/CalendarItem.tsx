import React, { useContext } from 'react'
import DesciprionContext from '../../contexts/DescriptionContext.tsx';

const CalendarItem = ({num, data}) => {
    const { handleDescriptionChange } = useContext(DesciprionContext);

    const handleOpeningModal = () => {
        handleDescriptionChange(data)
    }

    return (
        <>
            <td>
                <img src={data?.url} className='calendar-item-background-image' alt={num}
                    onClick={handleOpeningModal}
                />
                <span className='calendar-item-background-num'>{num}</span>
            </td>
        </>
    )
}

export default CalendarItem