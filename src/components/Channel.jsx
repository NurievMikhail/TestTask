import React from 'react';

function Channel({ channelName, channelLogo, channelPlan }) {
  return (
    <section className="channel-block">
      <div className="channel-block__logo-wrapper">
        <img className="channel-block__logo" src={channelLogo} alt="Channel logo" />
      </div>
      <div>
        <h2 className="channel-block__title">{channelName}</h2>
        {channelPlan.map(({ time, show }, index) => (
          <div key={`${time}_${show}`} className="channel-block__show">
            <span className="channel-block__show-time">{time}</span>
            <span className="channel-block__show-name">{show}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Channel;
