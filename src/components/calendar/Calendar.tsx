import React, { useEffect, useState } from "react";
import {
	getISODay,
	startOfMonth,
	getDaysInMonth,
	getMonth,
	getYear,
	parse,
} from "date-fns";

import CalendarItem from "./CalendarItem.tsx";
import Loader from '../loader/Loader.tsx'
import "./calendar.css";
import arrow from "../../assets/icons/arrow.svg";

const monthsList = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Calendar = () => {
	const [month, setMonth] = useState(getMonth(new Date())-1);
	const [year, setYear] = useState(getYear(new Date()));
	const [days, setDays] = useState([]);
	const [loading , setLoading] = useState(false);

	const [data, setData] = useState([]);

	async function fetchData() {
		try {
			setLoading(true)
		  const response = await fetch(`http://localhost:3300/getCalendar?year=${year}&month=${month+1}`);
		  const data = await response.json();
		  setData(data.calendar);
		} catch (error) {
		//   console.error(error);
		}
		
		setLoading(false)
	}

	useEffect(() => {
		defineCalendar();
		fetchData();
	}, [month]);

	const defineCalendar = () => {
		const date = parse(`01-${month + 1}-${year}`, "dd-M-yyyy", new Date());
		const dias: number[] = [];
		let diasEnMes = getDaysInMonth(date);
		let primerDia = startOfMonth(date);
		let primerDiaSemana = getISODay(primerDia);

		let dia = 1;
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 7; j++) {
				if ((i === 0 && j < primerDiaSemana) || dia > diasEnMes) {
					dias.push(0);
				} else {
					dias.push(dia);
					dia++;
				}
			}
		}
		setDays(dias);
	};

	const handleMonthChangeClick = (e) => {
		if (e.target.id) {
			if (e.target.id === "prev") {
				if (month === 0) {
					setMonth(11);
					setYear(year - 1);
				} else {
					setMonth(month - 1);
				}
			} else {
				if (month === 11) {
					setMonth(0);
					setYear(year + 1);
				} else {
					setMonth(month + 1);
				}
			}
			defineCalendar();
		}
	};

	return (
		<>
			{loading ? <Loader/> :
				<div className="calendar-container">
					<div className="calendar-date-container">
						<button
							onClick={handleMonthChangeClick}
							className="calendar-date-button"
						>
							<img
								src={arrow}
								alt="arrow-img-prev"
								id="prev"
								className="calendar-date-arrow rotated"
							/>
						</button>
						<div className="calendar-date-texts-container">
							<h2 className="calendar-date-text">{monthsList[month]}</h2>
							<h2 className="calendar-date-text">{year}</h2>
						</div>
						<button
							disabled={year === 2023 && month === 1}
							onClick={handleMonthChangeClick}
							className="calendar-date-button"
						>
							<img
								src={arrow}
								alt="arrow-img-next"
								id="next"
								className="calendar-date-arrow"
							/>
						</button>
					</div>
					<table>
						<thead>
							<tr>
								<th>Sunday</th>
								<th>Monday</th>
								<th>Tuesday</th>
								<th>Wednesday</th>
								<th>Thursday</th>
								<th>Friday</th>
								<th>Saturday</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								{days.map((num: number, index: number) => {
									if (num !== 0) {
										return <CalendarItem key={index} num={num} data={data[num-1]} />;
									} else {
										return <td key={index}></td>;
									}
								})}
							</tr>
						</tbody>
					</table>
				</div>
			}
		</>
	);
};

export default Calendar;
