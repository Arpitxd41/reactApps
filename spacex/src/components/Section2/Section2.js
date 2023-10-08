import React, { useEffect, useState } from "react";
import "./Section2.css";
function Section2() {
    const [missionData, setMissionData] = useState(null);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/110')
            .then(response => response.json())
            .then(response => setMissionData(response))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="section py-12 px-10 text-gray-50 object-bottom">
            {missionData && (
                <div className="space-y-3 px-6 pt-8 h-96 mt-96 bg-gray-900/30 rounded-md">
                    <img className="patch" src={missionData.links.mission_patch} alt="patch"/>
                    <h2 className="text-3xl text-white font-semibold">{missionData.rocket.rocket_name}</h2>
                    <h2 className="text-2xl text-gray-400 font-semibold">{missionData.mission_name}</h2>
                    <p className="text-xl">Launch Site : {missionData.launch_site.site_name_long} ( {missionData.launch_site.site_name} )</p>
                    <p className="sectionTwoDetails">{missionData.details}</p>
                    <button className="rounded-md px-8 py-2" style={{boxShadow :"0px 5px 10px 0px rgba(0,255,255,0.7)"}}>
                        <a href="#google.com">Know More</a>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Section2;
