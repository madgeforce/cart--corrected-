import React from "react";
import Section1 from '../../components/pages/Home/Section1';
import Styles from './home.module.scss'
import Layout from "../../components/Layout"

export const Home = () => {
    return (
        <Layout>
            <div className={Styles.Container}>
                <Section1 />
            </div>
        </Layout>
    );
};

export default Home;  