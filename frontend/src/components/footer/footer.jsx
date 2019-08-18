import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../index.css'

const Footer = () => (
    <div className="footer">
        <div><Link to={'/users'}>Hello</Link></div>
        <div>
            Copyright &copy; 2019 BabbleChat {'\u00A0'}{'\u00A0'}
        </div>
    </div>
)

export default Footer