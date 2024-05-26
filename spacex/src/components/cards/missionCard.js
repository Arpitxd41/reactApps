import React from 'react';

function Card({ missionData, image }) {
    return (
        <div className="cardbox bg-gray-200/80 rounded-lg p-6">
            <div className="space-y-8 w-64">
                <img className="rounded-lg shadow-inner" src={image} alt="mission" />
                <h2 className="title font-bold">{missionData.mission_name}</h2>
                <div className="para-container overflow-y-auto h-40 p-2 rounded-md bg-gray-500/70 shadow-inner">
                    <p className="description">{missionData.description}</p>
                </div>
                <button className='cursor-pointer text-stone-900 text-sm hover:text-stone-500'>
                    <a href={missionData.website} target="_blank" rel="noopener noreferrer">Go to Website...</a>
                </button>
            </div>
        </div>
    );
}

export default Card;
