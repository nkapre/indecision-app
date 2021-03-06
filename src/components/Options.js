import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>No options to show</p>}
            <button onClick={props.handleDeleteOptions} >Remove All</button>
            {
                props.options.map ((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}/>
                ))
            }
        </div>
    );
}

export default Options;
