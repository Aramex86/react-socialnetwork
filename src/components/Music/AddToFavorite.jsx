import Item from 'antd/lib/list/Item';
import React from 'react'

const AddToFavorite = ({favorite}) => {

    console.log(favorite);
const faforiteList = favorite.map(item =><span>{item.name}</span>) 

    return (
        <div className="favoriteSomgs-wrapp">
            <h1>FAVORITE SONGS LIST</h1>
            {faforiteList}
        </div>
    )
}

export default AddToFavorite;
