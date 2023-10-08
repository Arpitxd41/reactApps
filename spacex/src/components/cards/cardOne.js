import React, { useState, useEffect } from 'react';
import Card from './missionCard';
import thaicom from './thaicom.jpeg';
import falcon9 from './falcon9.jpeg';
import iridiumnext from './iridiumnext.jpeg';
import asiasat from './asiasat.jpeg';
import Orbcomm from './Orbcomm2.png';

function CardOne() {
    const [missionData1, setMissionData1] = useState(null);
    const [missionData2, setMissionData2] = useState(null);
    const [missionData3, setMissionData3] = useState(null);
    const [missionData4, setMissionData4] = useState(null);
    const [missionData5, setMissionData5] = useState(null);

    useEffect (()=>{
        fetch('https://api.spacexdata.com/v3/missions/9D1B7E0')
            .then(response => response.json())
            .then(data => setMissionData1(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/missions/F4F83DE')
            .then(response => response.json())
            .then(data => setMissionData2(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/missions/F3364BF')
            .then(response => response.json())
            .then(data => setMissionData3(data))
            .catch(error => console.error(error));

        fetch('https://api.spacexdata.com/v3/missions/593B499')
            .then(response => response.json())
            .then(data => setMissionData4(data))
            .catch(error => console.error(error));
        fetch('https://api.spacexdata.com/v3/missions/CE91D46')
            .then(response => response.json())
            .then(data => setMissionData5(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='p-4 rounded-lg' style={{boxShadow :"0px 5px 10px 0px rgba(0,255,255,0.7)"}}>
            <div className="card-section flex flex-row justify-between space-x-12 py-4 overflow-x-scroll w-7/8 shadow-inner">
            {missionData1 && (
                <Card missionData={missionData1} image={thaicom} />
            )}
            {missionData2 && (
                <Card missionData={missionData2} image={falcon9} />
            )}
            {missionData3 && (
                <Card missionData={missionData3} image={iridiumnext} />
            )}
            {missionData4 && (
                <Card missionData={missionData4} image={asiasat} />
            )}
            {missionData5 && (
                <Card missionData={missionData5} image={Orbcomm} />
            )}
            </div>
        </div>
    )
}
export default CardOne;
