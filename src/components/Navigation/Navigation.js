import React from 'react'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn){
        return (
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <nav onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</nav>
            </div>
        )
    } else {
        return (
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <nav onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Sign In</nav>
                <nav onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</nav>
            </div>
        )
    }
}

export default Navigation