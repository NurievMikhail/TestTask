import React from 'react';

function Channel({ channelName, channelLogo, channelPlan }) {
  return (
    <section className="channel-block">
      <div className="channel-block__logo-wrapper">
        <img className="channel-block__logo" src={channelLogo} alt="Channel logo" />
      </div>
      <div>
        <span className="channel-block__title">{channelName}</span>
        {channelPlan.map(({ time, show }, index) => (
          <div key={`${time}_${show}`} className="channel-block__show">
            <span>{time}</span>
            <span>{show}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Channel;
