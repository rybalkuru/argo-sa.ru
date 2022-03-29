import React from "react";

import Layout from "../components/Layout";
import MapDrawPoligon from "../components/map/MapDrawPoligon";

const Index = () => {
    return (
        <>
            <Layout
                title={"Main page"}
                description={"Description main page"}
                keywords="keywords"
            >
                <main>
                    <MapDrawPoligon />
                </main>
            </Layout>
        </>
    );
};
export default Index;
