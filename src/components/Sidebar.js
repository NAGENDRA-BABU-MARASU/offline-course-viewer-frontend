import React, { useState } from 'react'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenu from './SubMenu';
// import { SidebarData } from './SidebarData';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 350px;
  display: flex;
  justify-content: center;
  position: fixed;
  max-height: 100%;
  overflow-y: scroll;
  top: 0;
  left: ${({ sidebar }) => (sidebar? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

function Sidebar({ sidebarData }) {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  console.log("sidebarData recieved" , sidebarData)

  return (
    <IconContext.Provider value={{ color: 'fff'}}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {sidebarData.map((item, index) => {
              if(item){
                return <SubMenu item={item} key={index} />;
              }
            })}
          </SidebarWrap>
        </SidebarNav>
      </Nav>
    </IconContext.Provider>
  )
}

export default Sidebar