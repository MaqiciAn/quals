import React, { useState } from "react";
import './sidebar.css';
import {NavLink} from 'react-router-dom';
import {FaThList} from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi';
import analyticsIcon from '../assets/analytics.png'; 
import studentIcon from '../assets/students.png';
import goalsIcon from '../assets/goals.png';
import quizIcon from '../assets/quizzes.png';
import subscriptionIcon from '../assets/subscription.png';
import contentIcon from '../assets/content.png';

const Sidebar = ({children}) =>{
    const[isOpen,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/analytic',
            name:'Analytic',
            icon:<img src={analyticsIcon}/>
        },
        {
            path:'/student',
            name:'Student',
            icon:<img src={studentIcon}/>
        },
        {
            path:'/goals',
            name:'Goals',
            icon:<img src={goalsIcon}/>
        },
        {
            path:'/quiz',
            name:'Quiz',
            icon:<img src={quizIcon}/>
        },
        {
            path:'/subscription',
            name:'Subscription',
            icon:<img src={subscriptionIcon}/>
        },
        {
            path:'/content',
            name:'Content',
            icon:<img src={contentIcon}/>
        }
    ]

    return(
        <div className="container">
            <div style={{width: isOpen? "300px" : "70px"}} className="sidebar">
                <div className="topSection">
                    <h1 style={{display: isOpen? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen? "110px" : "5px"}} className="bars">
                        <FaThList onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen? "block" : "none"}} className="linkText">{item.name}</div>
                       </NavLink> 
                    ))
                } 
                <div className="footerSection">
                    <div className="icon"><FiLogOut/></div>
                    <h3 style={{display: isOpen? "block" : "none"}} className="linkText">Log out</h3>
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}
export default Sidebar;