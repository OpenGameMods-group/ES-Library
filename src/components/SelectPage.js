import React from 'react';
import {Link} from 'react-router-dom';

import Preloader from './Preloader';
import PrevButton from './PrevButton';

const SelectPage = ({title, links, children, match, relative}) => {
  if(links || children) {
    return (
      <section>

        {match && match.url ? <PrevButton url={match.url} /> : ''}

        <ul className="collection with-header">
          <li className="collection-header">
            <h4>{title}</h4>
          </li>

        {links.map((link) => {
          let to = relative ? `${match.url}/${link}` : `/${link}`;
          return (
            <Link key={link} to={to} className="collection-item">{link}</Link>
          );
        })}

        {children}

        </ul>
      </section>
    );
  } else {
    return <Preloader />;
  }
  
};

export default SelectPage;
