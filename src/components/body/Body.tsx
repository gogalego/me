import React, { Component } from 'react';
import Profile from './Profile';
import Education from './Education';
import Experience from './Experience';
import Abilites from './Abilites';

export default class Body extends Component {
  render() {
    return (
      <>
        <Profile></Profile>
        <Education></Education>
        <Experience></Experience>
        <Abilites></Abilites>

        
      </>
    )
  }
}
