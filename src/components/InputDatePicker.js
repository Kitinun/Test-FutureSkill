import React, { forwardRef, useEffect } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import th from 'date-fns/locale/th';
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import "react-datepicker/dist/react-datepicker.css";

function InputDatePicker({ title, star, value, placeholder, classLabel, handleChange, invalid, handleInvalid, classFormGroup, disabled,
    maxDate, minDate }) {

    const years = range(1927, getYear(new Date()) + 10, 1);

    const months = [
        { en: "January", th: "มกราคม" },
        { en: "February", th: "กุมภาพันธ์" },
        { en: "March", th: "มีนาคม" },
        { en: "April", th: "เมษายน" },
        { en: "May", th: "พฤษภาคม" },
        { en: "June", th: "มิถุนายน" },
        { en: "July", th: "กรกฏาคม" },
        { en: "August", th: "สิงหาคม" },
        { en: "September", th: "กันยายน" },
        { en: "October", th: "ตุลาคม" },
        { en: "November", th: "พฤศจิกายน" },
        { en: "December", th: "ธันวาคม" }
    ];

    const selectStyle = {
        borderRadius: "5px", padding: "0 .5em"
    }

    const buttonStyle = {
        height: "2em", padding: "5px .25em"
    }

    const isInvalid = {
        border: "1px solid #dc3545 !important"
    }

    return (
        <Form.Group className={classFormGroup}>
            {title && <Form.Label className={`${classLabel} mb-1`}>{title} <span className="text-danger">{star ? "*" : ""}</span></Form.Label>}
            <InputGroup>
                <DatePicker
                    selected={value}
                    onChange={(value) => {
                        handleChange(value)
                        if (handleInvalid) {
                            handleInvalid()
                        }
                    }}
                    className="form-control"
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholderText={placeholder}
                    customInput={
                        <input
                            type="text"
                            className={invalid ? "is-invalid date-picker" : "date-picker"}
                        />
                    }
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled
                    }) => (
                        <div
                            style={{
                                margin: 5,
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <Button style={buttonStyle}
                                onClick={decreaseMonth}
                                disabled={prevMonthButtonDisabled}
                            >
                                <i className="fa fa-chevron-left text-white" aria-hidden="true"></i>
                            </Button>
                            <select style={selectStyle}
                                value={getMonth(date)}
                                onChange={({ target: { value } }) => {
                                    changeMonth(value)
                                }}
                            >
                                {months.map((month, i) => (
                                    <option key={i} value={i}>
                                        {month.th}
                                    </option>
                                ))}
                            </select>
                            <select style={selectStyle}
                                value={getYear(date)}
                                onChange={({ target: { value } }) => changeYear(value)}
                            >
                                {years.map(option => (
                                    <option key={option} value={option}>
                                        {option + 543}
                                    </option>
                                ))}
                            </select>

                            <Button style={buttonStyle}
                                onClick={increaseMonth}
                                disabled={nextMonthButtonDisabled}
                            >
                                <i className="fa fa-chevron-right text-white" aria-hidden="true"></i>
                            </Button>
                        </div>
                    )}
                />
                {invalid ? <div className="invalid-error">{invalid}</div> : ""}
            </InputGroup>

            <style jsx="true" global="true">{`
                .date-picker.form-control[readonly] {
                    background-color: #fff !important;
                }
                .date-picker.form-control[disabled] {
                    background-color: #e9ecef !important;
                }
            `}</style>
        </Form.Group>
    )
}

export default InputDatePicker;
