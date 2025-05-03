import React from 'react';
import { Panel, Avatar, List } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const getBadgeColor = (index, type) => {
  const colors = {
    ranked: ['#81e6d9', '#63b3ed', '#a3d977', '#f6ad55', '#f687b3'],
    alert: ['#f56565', '#fc8181', '#feb2b2', '#fbd38d', '#f6e05e']
  };
  return type === 'ranked' ? colors.ranked[index] || '#ccc' : colors.alert[index] || '#ccc';
};

const getScoreColor = (score) => {
  if (score >= 80) return '#38a169';
  if (score >= 60) return '#d69e2e';
  return '#e53e3e';
};

const DriverListCard = ({ title, icon, drivers, type = 'ranked', driversLength }) => {
  return (
    <Panel className="shadow-sm" style={{ borderRadius: '12px', minHeight: '400px', backgroundColor:'#F7F8FA' }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className=" mb-0" style={{ fontSize: '1rem'}}>{title}</h6>
        {icon}
      </div>
      <h2 style={{fontSize:'48px',color:'#3856A6'}} className="mb-2 mt-2">{driversLength}</h2>

      <div className="d-flex justify-content-between text-muted fw-bold mb-2 px-1">
        <span style={{color:'#777777', fontWeight:'400'}}>Driver</span>
        <span style={{color:'#777777', fontWeight:'400'}}>Score</span>
      </div>

      <div style={{ maxHeight: 280, overflowY: 'auto' }}>
        <List hover bordered style={{ borderRadius: '10px' }}>
          {drivers.map((driver, index) => (
            <List.Item
              key={index}
              className="d-flex justify-content-between align-items-center px-3 py-2"
              style={{ borderBottom: index !== drivers.length - 1 ? '1px solid #eee' : 'none' }}
            >
              <div className="d-flex align-items-center gap-2">
                {/* Rank badge or avatar */}
                {type === 'ranked' ? (
                  <div
                    style={{
                      backgroundColor: getBadgeColor(index, title.toLowerCase().includes('least') ? 'alert' : 'ranked'),
                      color: '#fff',
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </div>
                ) : (
                  <Avatar circle size="sm" src={driver.avatar} />
                )}
                <div className="d-flex align-items-center gap-2">
                  {type === 'ranked' && <Avatar circle size="sm" src={driver.avatar} />}
                  <span style={{ fontSize: '0.95rem' }}>{driver.name}</span>
                </div>
              </div>
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  color: getScoreColor(driver.score)
                }}
              >
                {driver.score}
              </span>
            </List.Item>
          ))}
        </List>
      </div>
    </Panel>
  );
};

export default DriverListCard;