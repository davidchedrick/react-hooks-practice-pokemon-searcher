import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const { hp, name, sprites } = poke;
  const [showFront, setShowFront] = useState(true);

  function handleClick(){
    setShowFront(showFront => !showFront);  
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={showFront ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );

}

export default PokemonCard;
