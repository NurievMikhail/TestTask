import React from 'react';

import { Channel } from '../components';

import fisrt from '../assets/logos/first.png';
import twoXtwo from '../assets/logos/2x2.png';
import rbk from '../assets/logos/rbk.png';
import amedia from '../assets/logos/amedia.png';

function Channels() {
  const CHANNELS = [
    {
      channelName: 'Первый канал',
      channelLogo: fisrt,
      channelPlan: [
        { time: '13:00', show: 'Новости(с субтитрами)' },
        { time: '14:00', show: 'Давай поженимся' },
        { time: '15:00', show: 'Другие новости' },
      ],
    },
    {
      channelName: '2x2',
      channelLogo: twoXtwo,
      channelPlan: [
        { time: '13:00', show: 'МУЛЬТ ТВ. Сезон 4, 7 серия' },
        { time: '14:00', show: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия' },
        { time: '15:00', show: 'БУРДАШЕВ. Сезон 1, 20 серия' },
      ],
    },
    {
      channelName: 'РБК',
      channelLogo: rbk,
      channelPlan: [
        { time: '13:00', show: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС' },
        { time: '14:00', show: 'ДЕНЬ. Главные темы' },
        { time: '15:00', show: 'Главные новости' },
      ],
    },
    {
      channelName: 'AMEDIA PREMIUM',
      channelLogo: amedia,
      channelPlan: [
        { time: '13:00', show: 'Клиент всегда мёртв' },
        { time: '14:00', show: 'Голодные игры: Сойка-пересмешница. Часть 1' },
        { time: '15:00', show: 'Секс в большом городе' },
      ],
    },
    {
      channelName: 'AMEDIA PREMIUM',
      channelLogo: amedia,
      channelPlan: [
        { time: '13:00', show: 'Клиент всегда мёртв' },
        { time: '14:00', show: 'Голодные игры: Сойка-пересмешница. Часть 1' },
        { time: '15:00', show: 'Секс в большом городе' },
      ],
    },
  ];

  return (
    <main className="container">
      <div className="channels-list">
        {CHANNELS.map(({ channelName, channelLogo, channelPlan }, index) => (
          <Channel
            key={`${channelName}_${index}`}
            channelName={channelName}
            channelLogo={channelLogo}
            channelPlan={channelPlan}
          />
        ))}
      </div>
    </main>
  );
}

export default Channels;
