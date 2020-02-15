import React from 'react';

const seasonConfig = {
  spring: {
    text: `It's spring!`,
    iconName: 'tree'
  },
  summer: {
    text: `It's summer!`,
    iconName: 'sun'
  },
  autumn: {
    text: `It's autumn!`,
    iconName: 'leaf'
  },
  winter: {
    text: `It's winter!`,
    iconName: 'snowflake'
  }
};

function getSeason(lat, month) {
  if (month >= 3 && month <= 5) {
    return lat > 0 ? 'spring' : 'winter';
  } else if (month >= 6 && month <= 8) {
    return lat > 0 ? 'summer' : 'winter';
  } else if (month >= 9 && month <= 10) {
    return lat > 0 ? 'autumn' : 'summer';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const { text, iconName } = seasonConfig[season];
  const { main, name, temp, feels_like, temp_min, temp_max, humidity } = props;

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`}></i>
      <div className="text__container" style={{ textAlign: 'center' }}>
        <h1>{text}</h1>
        <h3>
          현재 위치
          <span role="img" aria-label="location">
            📍
          </span>{' '}
          {name}
        </h3>
        <h3>
          현재 날씨
          <span role="img" aria-label="temp">
            ⛅
          </span>{' '}
          {main}
        </h3>
        <h3>
          현재 기온
          <span role="img" aria-label="temp">
            ⛅
          </span>{' '}
          {temp}°C
        </h3>
        <h3>
          체감 온도
          <span role="img" aria-label="feels_like">
            ⛅
          </span>{' '}
          {feels_like}°C
        </h3>
        <h3>
          최저 기온
          <span role="img" aria-label="temp_min">
            ⛅
          </span>{' '}
          {temp_min}°C
        </h3>
        <h3>
          최고 기온
          <span role="img" aria-label="temp_max">
            ⛅
          </span>{' '}
          {temp_max}°C
        </h3>
        <h3>
          현재 습도
          <span role="img" aria-label="humidity">
            💧
          </span>{' '}
          {humidity}°C
        </h3>
      </div>
      <i className={`icon-right ${iconName} icon massive`}></i>
    </div>
  );
};

export default SeasonDisplay;
