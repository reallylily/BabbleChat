import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../index.css'

const Footer = () => (
    <div className="footer">
        <div><Link to={'/about'}>Meet the Team</Link></div>
        <div>
            Copyright &copy; 2019 <Link to="/">BabbleChat</Link> {'\u00A0'}{'\u00A0'}
        </div>
    </div>
)

export default Footer