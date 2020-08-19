import React from 'react';
import { Link } from 'react-router-dom';

function Tabs() {
  const TABS = [
    { tabName: 'Фильмы', tabRoute: '/' },
    { tabName: 'Телеканалы', tabRoute: '/channels' },
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  const changeActiveTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <ul>
        {TABS.map(({ tabName, tabRoute }, index) => (
          <Link key={`link_${tabName}_${index}`} to={tabRoute}>
            <li
              className={activeTab === index ? 'active' : ''}
              onClick={() => changeActiveTab(index)}
              key={`${tabName}_${index}`}>
              {tabName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
