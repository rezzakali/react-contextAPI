import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState=(props)=>{
    const [stateValue,setStateValue]=useState('blue');
    return(
        <noteContext.Provider value={stateValue}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;