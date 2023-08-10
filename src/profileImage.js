import React from 'react';

import Photo from './lewisz.jpg'    
// import profile from '../images/profile.jpg';

const ProfileImage = () => {

    return ( 
    
    <span>
            <img 
            class="images"
            src={Photo}
            alt="Smiling Lewis with a red and black checkers blazer and white turtle neck t-shirt"> 
            </img>
    </span>
    )

}

export default ProfileImage