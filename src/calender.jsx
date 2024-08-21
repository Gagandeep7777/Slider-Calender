

import React, { useState, useCallback } from "react";
import { Calendar } from "@natscale/react-calendar";

export default function CalendarNew() {
    const [value, setValue] = useState();

    const onChange = useCallback(
        (value) => {
            setValue(value);
        },
        [setValue]
    );

    return (
        <div className="calender">
            <h1>Calendar</h1>
            <Calendar value={value} onChange={onChange} />
        </div>
    );
}
