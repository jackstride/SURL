import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkBoard = () => {
  const [itemState] = useState([
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: false,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
    {
      link: 'surl.co/hf84p0',
      created: '2 days ago',
      isEnabled: true,
    },
  ]);
  return (
    <div className="link_board_container">
      <form>
        <div className="submit">
          <input type="submit" name="submit" value="Remove" />
          <FontAwesomeIcon icon="times" color="white" size="sm" />
        </div>
        {itemState.map((item, i) => (
          <Item data={item} />
        ))}
      </form>
    </div>
  );
};

export default LinkBoard;

const Item = ({ data }) => {
  return (
    <div className="link_item">
      <input type="checkbox"></input>
      <a href={data.link}>{data.link}</a>
      <p>{`Created: ${data.created}`}</p>
      <button className={data.isEnabled ? 'link_enabled' : 'link_disabled'}>
        {data.isEnabled ? 'Enabled' : 'Disabled'}
      </button>
    </div>
  );
};
