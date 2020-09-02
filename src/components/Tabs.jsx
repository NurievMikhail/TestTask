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
      <ul className="tabs__list">
        {TABS.map(({ tabName, tabRoute }, index) => (
          <li
            className={`tabs__element ${activeTab === index ? 'tabs__element_active' : ''}`}
            onClick={() => changeActiveTab(index)}
            key={`${tabName}_${index}`}>
            <Link key={`link_${tabName}_${index}`} to={tabRoute}>
              {tabName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
