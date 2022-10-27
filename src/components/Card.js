import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
background-color: #444;
color: #fff;
border-radius: 5px;
font-size: 150%;
transition: transform .2s;
background-color: ${props => props.currentDay ? '#4CBB17' : props.pastDay ? '#5F8575' : props.futureDay ? '#EBEBE4' : ""};
&:hover {
    transform: ${props => props.currentDay ? 'scale(1.05)' : props.pastDay ? 'scale(1.05)' : ""};
    cursor: ${props => props.currentDay ? 'pointer' : props.pastDay ? 'pointer' : ""}
}
`

const Day = styled.div`
    font-size: 30px;
`

export default function Card(props) {

    const [date, setDate] = React.useState()

    React.useEffect(() => {
        setDate(new Date().getDate().toString())
    }, [])

    function butt() {
        console.log(date)
    }

    return (
        <DateWrapper currentDay={date == props.day ? true : false} pastDay={date > props.day ? true : false} futureDay={date < props.day ? true : false}>
            <Day>{props.day}</Day>
        </DateWrapper>
    )
}