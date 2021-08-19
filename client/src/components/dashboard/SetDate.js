/* This example requires Tailwind CSS v2.0+ */
import React, {useState } from 'react'
import DatePicker from "react-datepicker";


export default function SetDate() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}