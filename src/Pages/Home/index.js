import React from "react";
import Navbare from'../../components/Navbare'
import Section1 from '../../components/Page/Home/Section1';
import Styles from './home.module.scss'

export const Home = () => {
    return (
        <div className={Styles.Container}>
            <Navbare></Navbare>
            <Section1/>
            hello
        </div>
        );
    };
    
    export default Home;  