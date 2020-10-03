import React from 'react'

const AddToFavorite = ({favorite}) => {

    console.log(favorite);
const faforiteList = favorite.map(item =><div key={item.id}>{item.name} {item.artist}</div>) 

    return (
        <div className="favoriteSomgs-wrapp">
            <h1>FAVORITE SONGS LIST</h1>
            {faforiteList}
        </div>
    )
}

export default AddToFavorite;
