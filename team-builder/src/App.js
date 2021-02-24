import React, { useState } from 'react';
import Team from './components/Team';
import TeamForm from './components/TeamForm';
import './App.css';

const teamMemberList = [{ name: 'Rory', email: 'rory@example.com', occupation: 'Student' }];
const initialFormVal = { name: '', email: '', occupation: '' };

export default function App() {
  const [ teamMember, setTeamMember ] = useState(teamMemberList);
  const [ formValues, setFormValues ] = useState(initialFormVal); // take and hold all values in form

  const updateForm = (inputName, inputValue) => { // take value passed in from input to update formValues
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const formSubmit = () => { // function to be used inside of forms onSubmit
    // making a new teamMember obj, trimming whitespace from submition
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      occupation: formValues.occupation.trim()
    }
    // prevent further action (submition) if any 3 options is empty string after trimming
    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.occupation){
      return;
    }
    // add newTeamMember values to the teamMember/teamMemberList state
    setTeamMember(teamMember.concat(newTeamMember));
    // reset input fields to blank (clearing what the teamMember typed into the input field)
    setFormValues(initialFormVal);
  }

  return (
    <div className="container">
      <h1>Team Members Form</h1>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={formSubmit}
      />
      {teamMember.map((member, idx) => {
        return (
          <Team key={member[idx]} details={member} />
        )
      })}
    </div>
  );
}

