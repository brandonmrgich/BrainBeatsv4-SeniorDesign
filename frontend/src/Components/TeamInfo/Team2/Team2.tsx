import { useState } from 'react';

// Importing CSS
import '../../About/About.css'
import profileImage from '../../../images/blankProfile.png'

const Team2 = () => {

    // =============================  Enter values for TEAM info here ============================== 
    interface Team {
        number: number;
        yearsFound: string;
        objectives: string;
        contributions: string;
    }

    const teamInfo : Team = {
        "number": 2,  // Format as integer number
        "yearsFound": "2020-2021",  // format as string 'yyyy-yyyy'

        "objectives": "BrainBeats is a Senior Design project for computer science students at the University of Central Florida." +
                        "The project is sponsored by Dr. Leinecker, and has been ongoing since 2019. The premise of BrainBeats is" +
                        "to take the electrical waves in your brain (using an EEG device) and utilize them to generate ", 

        "contributions": "BrainBeats is a Senior Design project for computer science students at the University of Central Florida." +
        "The project is sponsored by Dr. Leinecker, and has been ongoing since 2019. The premise of BrainBeats is" +
        "to take the electrical waves in your brain (using an EEG device) and utilize them to generate ",
    }
    // ===============================  Enter TEAM MEMBERS info here =============================== 

    interface TeamMember {
        name: string;
        position: string;
        image: string;
    }

    const defaultImage = profileImage;
    var teamMembers : TeamMember[] = [
        {name: "First Last", position: "Project Manager • Machine Learning", image: defaultImage},
        {name: "First Last", position: "Music Generation • Backend Developer", image: defaultImage},
        {name: "First Last", position: "Database • Backend Developer", image: defaultImage},
        {name: "First Last", position: "Frontend Developer • Visual Designer", image: defaultImage},
    ];
    // ============================================================================================= 
    
    function PopulateTeamMembers() {
        const MAX_COLS:number = 2;
        const MAX_ROWS:number = 3;
        var gridArray:any[] = [];
        var currentMemberCounter:number = 0;

        for(let i = 0; i < MAX_ROWS; i++){
            for(let j = 0; j < MAX_COLS; j++) {
                let currentMember = teamMembers[currentMemberCounter++];
                if(currentMember == null) break;
                currentMember.image = currentMember.image === "" ? defaultImage : currentMember.image;
                let name = currentMember.name;
                let position = currentMember.position;
    
                gridArray.push(currentMember);
            }
        }
        return gridArray;
    }
    
    var memberList = PopulateTeamMembers();
    
    return (
    <div className='about-teams-body'>
        <div className='about-team-info'>
            <h1 className='about-team-title'>Team {teamInfo.number}</h1>
            <h6 className='about-team-year'>({teamInfo.yearsFound})</h6>
            <h3 className='about-team-subtitle'>Goals and Objectives</h3>
            <p>{teamInfo.objectives}</p>
            <h3 className='about-team-subtitle'>Contributions</h3>
            <p>{teamInfo.contributions}</p>
        </div>
        <div className='about-team-members'>
            {memberList.map((teamMember) => (
                    <div className="col track-col">
                        <button className=" btn btn-primary card" id='member-card-body'>
                            <img src={teamMember.image} className="card-img-top" id="card-img-ID" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{teamMember.name}</h5>
                                <div className="card-text">
                                    <p id='card-author'>{teamMember.position}</p>
                                </div>
                                
                            </div>
                        </button>
                    </div>
                ))}
        </div>
    </div>
    );
};

export default Team2;