import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Blockurly SCM</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/todolist/chain">유통 과정</Link></li>
          <li><Link to="/blockexplorer">트랜잭션</Link></li>
          <li><Link to="/ipfs/upload">이미지 업로드</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
