import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setRandomText } from '../../reducer/AppReducer';

function Login(props) {

    const dispatch = useDispatch();

    const randomText = useSelector((state) => state.app.randomText);

    const [localRandomText, setLocalRandomText] = useState(randomText);



    const setTextGlobal = (text) => {
      console.log(text);
      dispatch(setRandomText(text));
    }

    return (
        <div>
            <h1>{randomText}</h1>
            <input type="text" value={localRandomText} onChange={(e) => setLocalRandomText(e.target.value)} />
            <br/>
            <button onClick={() => setTextGlobal(localRandomText)}>changetext</button>
        </div>
    );
}

export default Login;