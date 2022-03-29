import React from "react";
import TemperatureSum from "../components/charts/TemperatureSum";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <>
            <Layout
                title={"Main page"}
                description={"Description main page"}
                keywords="keywords"
            >
                <main>
                    <TemperatureSum />
                </main>
            </Layout>

            <style jsx global>{`
                main {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
            `}</style>
        </>
    );
};
export default Index;
