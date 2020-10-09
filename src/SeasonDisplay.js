import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
    text2: "It's summer in your region"
  },
  winter: {
    text:'Damn it is cold!!',
    iconName: 'snowflake',
    text2: "It's winter in your region"
  }
};

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {

  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, text2 } = seasonConfig[season]

return (
<div className={`season-display ${season}`}>
  <i className={` icon-left massive ${iconName} icon`} />
  <div className="seasonText">
  <h4>{ text2 }</h4>
  <h1 >
    { text }
  </h1>
  </div>
  
  <i className={`icon-right massive ${iconName} icon`} />
</div>
)
};

export default SeasonDisplay;
