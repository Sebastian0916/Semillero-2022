import React from 'react'
import {useState} from 'react';
import {Stack,TextField} from '@mui/material';
import {DatePicker, TimePicker} from '@mui/lab';

function DateTimePicker() {
    const [SelectedDate,setSelectDate] = useState<Date | null>(null)
    const [SelectedTime,setSelectTime] = useState<Date | null>(null)
    console.log(SelectedDate,SelectedTime)

  return (
    <Stack spacing={5} sx={{width:"250px"}}>
        <DatePicker
        label="Date Picker"
        renderInput={(params)=> <TextField{...params} />}
        value={SelectedDate}
        onChange={(NewValue) =>(
            setSelectDate(NewValue)
        )}
        />  
        <TimePicker
        label="Time Picker"
        renderInput={(params)=> <TextField{...params} />}
        value={SelectedTime}
        onChange={(NewValue) =>(
            setSelectTime(NewValue)
        )}
        />
    </Stack>
  )
}

export default DateTimePicker