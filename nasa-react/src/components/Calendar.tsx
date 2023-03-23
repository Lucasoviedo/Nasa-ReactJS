import React, { useEffect, useState } from 'react'
import { getISODay, startOfMonth, getDaysInMonth, getMonth ,getYear, parse} from 'date-fns'
import CalendarItem from './CalendarItem.tsx';

const monthsList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const Calendar = ( ) => {

    const [month , setMonth] = useState(getMonth(new Date()))
    const [year , setYear] = useState(getYear(new Date()))
    const [days , setDays] = useState([])

    
    useEffect (() => {
        defineCalendar();
    },[month])

    const defineCalendar = () => {
        const date = parse(`01-${month + 1}-${year}`, 'dd-M-yyyy', new Date());
        const dias: number[] = [];
        let diasEnMes = getDaysInMonth(date);
        let primerDia = startOfMonth(date);
        let primerDiaSemana = getISODay(primerDia);
        
        let dia = 1;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if ((i === 0 && j < primerDiaSemana) || (dia > diasEnMes)) {
                    dias.push(0);
                } else {
                    dias.push(dia);
                    dia++;
                }
            }
        }
        setDays(dias)
    }

    const handleMonthChangeClick = (e) => {
        if(e.target.innerText === "Anterior"){
            if(month === 0){
                setMonth(11)
                setYear(year -1)
            } else{
                setMonth(month - 1)
            }
        } else {
            if(month === 11){
                setMonth(0)
                setYear(year + 1)
            } else{
                setMonth(month + 1)
            }
        }
        defineCalendar();
    }

    return (
        <div>
            <div>
                <button onClick={handleMonthChangeClick}> Anterior </button>
                <h2>{monthsList[month]} - {year}</h2>
                <button onClick={handleMonthChangeClick}> Siguiente </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Domingo</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {days.map((num : number , index : number) => {
                            if(num !== 0){
                                return <CalendarItem key={index} num={num}/>
                            } else {
                                return <td key={index}></td>
                            }
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar