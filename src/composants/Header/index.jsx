import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../../context';

export default function Header() {
    const { language, setLanguage } = useContext(AppContext);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (

        <div style={{ marginBottom: "5px", width: "100%", height: "50px", backgroundColor: 'blue', display: "flex", flexDirection: 'row', fontSize: "19px", fontWeight: 'bold', color: '#FFF', alignItems: 'center', justifyContent: 'space-between' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <span style={{ marginLeft: 10 }}>
                    <Link to={'/home'} style={{ textDecorationLine: 'none', color: 'white' }} >home </Link>
                </span>
                <span style={{ marginLeft: 10 }}>
                    <Link to={'/dashboard'} style={{ textDecorationLine: 'none', color: 'white' }} >dashbord </Link>
                </span>
                <span style={{ marginLeft: 10 }}>
                    <Link to={'/course'} style={{ textDecorationLine: 'none', color: 'white' }} >course </Link>
                </span>
            </div>
            <div style={{ marginRight: 20 }}>
                <spam style={{ marginRight: 10 }}>Langue</spam>
                <select
                    id="language-select"
                    value={language}
                    onChange={handleLanguageChange}
                >
                    <option value="EN">English</option>
                    <option value="FR">Français</option>
                </select>
            </div>

        </div>
    )
}
