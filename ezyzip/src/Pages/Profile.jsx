import React from 'react';
import UserPro from '../components/UserPro';
import Demands from '../components/Demands';

const Profile = () => {
  return (
    <div className="profile">
      <div className="Infos-section">
        <UserPro />
      </div>
      <div className="Demand-section">
        <Demands />
      </div>
    </div>
  );
};

export default Profile;
