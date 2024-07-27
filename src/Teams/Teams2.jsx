import React from 'react';
import './teams2.css';
import image from '../assets/vinita.png';
const TeamMember = () => {
  return (
    <div className="team-container">
      <h1 className="team-header">OUR TEAM</h1>
      <div className="team-member">
        <div className="member-info">
          <h2 className="member-name">Mrs Vinita <span className="member-title">| Director</span></h2>
          <p className="member-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </p>
        </div>
        <div className="member-image">
          <img src={image} alt="Mrs Vinita" />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;