import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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


function NavBar() {
  
  return (
    <IconContext.Provider value={{ color: 'fff' }}>
      <Nav>
        
        <NavIcon to="/courses">
          <FaIcons.FaCode />
        </NavIcon>

      </Nav>
    </IconContext.Provider>
  )
}

export default NavBar;