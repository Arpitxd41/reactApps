import React, { useState, useEffect } from 'react';
import Card from './eventsCard';
import block5 from "./falconblock5.jpeg";
import reflight from "./reflight.jpeg";
import dragon from "./dragon.webp";
import falcon1 from "./falcon1eve.jpeg";
import landing from "./landing.jpeg";

function CardTwo() {
    const [eventsData1, seteventsData1] = useState(null);
    const [eventsData2, seteventsData2] = useState(null);
    const [eventsData3, seteventsData3] = useState(null);
    const [eventsData4, seteventsData4] = useState(null);
    const [eventsData5, seteventsData5] = useState(null);

    useEffect (()=>{
        fetch('https://api.spacexdata.com/v3/history/19')
            .then(response => response.json())
            .then(data => seteventsData1(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/history/16')
            .then(response => response.json())
            .then(data => seteventsData2(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/history/17')
            .then(response => response.json())
            .then(data => seteventsData3(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/history/1')
            .then(response => response.json())
            .then(data => seteventsData4(data))
            .catch(error => console.error(error));
        fetch('https://api.spacexdata.com/v3/history/9')
            .then(response => response.json())
            .then(data => seteventsData5(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='p-4 rounded-lg' style={{boxShadow :"0px 5px 10px 0px rgba(0,255,255,0.7)"}}>
            <div className="card-section flex flex-row justify-between space-x-12 py-4 overflow-x-scroll w-7/8 shadow-inner">
            {eventsData1 && (
                <Card eventsData={eventsData1} image={block5} />
            )}
            {eventsData2 && (
                <Card eventsData={eventsData2} image={reflight} />
            )}
            {eventsData3 && (
                <Card eventsData={eventsData3} image={dragon} />
            )}
            {eventsData4 && (
                <Card eventsData={eventsData4} image={falcon1} />
            )}
            {eventsData5 && (
                <Card eventsData={eventsData5} image={landing} />
            )}
            </div>
        </div>
    )
}
export default CardTwo;
