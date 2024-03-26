import './userPro.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function UserPro() {
  const userData = {
    name: 'Dahoun Manel',
    firstName: 'Dahoun',
    lastName: 'Manel',
    situationFamiliale: 'Célibataire',
    email: 'm.dahoun@esi-sba.dz',
    phoneNumber: '0666666666',
    salary: 25000000,
    bankAccount: '12345678901234567890',
  };

  return (
    <div className="profile">
        <h1 className="profile-title">Employee Profile</h1>
        <hr className="profile-line" /> 
        <div className="user-profile">
         <div className="profile-picture">
        <img src="https://placehold.it/150x150" alt="Profile avatar" />
        </div>
      <div className="profile-info">
        <p className="left">First name: {userData.firstName} </p>
        <p className="right">Phone number: {userData.phoneNumber}</p>
        <p className="left">Last name: {userData.lastName}</p>
        <p className="right">Situation familiale: {userData.situationFamiliale}</p>
        <p className="left">Email address: {userData.email}</p>
        <p className="right">Salary: {userData.salary}</p>
        <p className="left">Bank account: {userData.bankAccount}</p>
        <button className="button">Change Password <FontAwesomeIcon icon={faPen} size="sm" /></button>
     </div>
 </div>
 </div>

  );
}


export default UserPro;


