import React from 'react';
import Musicnavigation from './Navigation';

const PlayerFooter = ({music,playMusic, moveRigth,moveLeft}) => {
    return (
        <div className="palyerfooter-wrapper">
           <Musicnavigation music={music} playMusic={playMusic} moveRigth={moveRigth} moveLeft={moveLeft}/>
        </div>
    )
}

export default PlayerFooter
