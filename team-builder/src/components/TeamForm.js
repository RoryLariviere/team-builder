import React from 'react';

export default function TeamForm(props){
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group inputs'>
                    <label>Name
                        <input name='name' type='text' onChange={onChange} value={values.name} placeholder='Enter your name...' maxLength='30'/>
                    </label>
                    <label>Email
                        <input name='email' type='email' onChange={onChange} value={values.email} placeholder='example@email.com'/>
                    </label>
                    <label>Occupation
                        <select value={values.occupation} name='occupation' onChange={onChange}>
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