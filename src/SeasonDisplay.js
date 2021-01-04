import React from 'react';

const getSeason = (lat, month) => {
  if (month <= 2 ||  month === 11) {
    return lat > 0 ? 'winter' : 'spring'
  } else if (month >= 3 && month <= 6) {
    return lat > 0 ? 'spring' : 'summer'
  } else if (month >=7 && month <= 9) {
    return lat > 0 ? 'summer' : 'fall'
  } else if (month >= 9 && month <= 10) {
    return lat > 0 ? 'fall' : 'winter'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())

  console.log(season);
  
  return <div>Season Display</div>;
};

export default SeasonDisplay;