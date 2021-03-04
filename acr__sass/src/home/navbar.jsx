import React from 'react';
import Lock from '@material-ui/icons/Lock';
import Icon from '@material-ui/core/Icon';
import AddPerson from '@material-ui/icons/PersonAdd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import '../styles/homePageStyles/navigation.scss';
import Logo from "./images/logo.png";

function Navbar({handleView}) {

    return (
        <div className="navigationHome flex justify-between items-center">
            <div className="navigationHome--logo">
                {/* <p>Logo.</p> */}
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>
            </div>
            <div className="navigationHome--links">
                <ul className="flex justify-between align-center">
                    <li>resources</li>
                    <li>community</li>
                    <li>enterprise</li>
                    <li>partners</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div className="navigationHome--login flex align-center">
                <MenuItem style={{padding: "4px 10px"}} onClick={handleView} component={Link} to="/login" role="button">
                    <ListItemIcon className="min-w-10">
                        <Icon>lock</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                </MenuItem>
                <MenuItem style={{padding: "4px 10px"}} onClick={handleView} component={Link} to="/register" role="button">
                    <ListItemIcon className="min-w-10">
                        <Icon>person_add</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                </MenuItem>
            </div>
        </div>
    );
}

export default Navbar;