import React from 'react';
function DisplayBot({bot}){
    return(
        <div className="single-bot">
            <img src={bot.avatar_url}/>
            <p>Name: {bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armour: {bot.armor}</p>


        </div>
    )
}
export default DisplayBot;
