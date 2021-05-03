import React from 'react';
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <React.Fragment>
            <ul>
             
                <li> <Link to='/information'> Information</Link></li>
            </ul>
            {/*  {false && <Redirect to='test'></Redirect>} */}
        </React.Fragment>
    );
};
export default Nav;