import React from 'react';

export default function TeamForm(props){
    const { values, update, submit } = props;

    return (
        <div>
            <form onSubmit={submit}>
                <div className='form-group inputs'>
                    <label>Name
                        <input name='name' type='text' onChange={update} value={values.name} placeholder='Enter your name...' maxLength='30'/>
                    </label>
                    <label>Email
                        <input name='email' type='email' onChange={update} value={values.email} placeholder='example@email.com'/>
                    </label>
                    <label>Occupation
                        <select value={values.occupation} name='occupation' onChange={update}>
                            <option value=''>--- Select Occupation ---</option>
                            <option value='Student'>Student</option>
                            <option value='Frontend_Dev'>Frontend Dev</option>
                            <option value='Backend_Dev'>Backend Dev</option>
                            <option value='Designer'>Designer</option>
                        </select>
                    </label>
                    <div className='submit'>
                        <button disabled={!values.name || !values.email || !values.occupation} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}