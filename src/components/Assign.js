import React from 'react';

const Component=({isLogin,name})=>
{
    return(
        
        isLogin ? <h1>Welcome {name}</h1> : <h1>please login</h1>
    );
};

function changebg()
{
    <span style="backgroundcolor : black"></span>
}

export default Component;