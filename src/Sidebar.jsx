import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';
import { Link } from 'react-router-dom';
const Sidebar = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right:0} : {}}>
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="E:\recpro\react25\react-miniproject3\src\assets\images\user23.jpg" alt="" />
                </li>
                <li>
                    <Link to="/">کاربران</Link>
                </li>
                <li>
                    <Link to="/post">پست ها</Link>
                </li>
                <li>
                    <Link to="/gallery">گالری</Link>
                </li>
                <li>
                    <Link to="/todo">کارها</Link>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar;