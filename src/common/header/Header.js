import React,{Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <img src={logo} className="app-logo" alt="logo"/>
                <Button variant="contained" color="default" className="login-btn">Login</Button>
            </div>
        )
    }
}
export default Header;