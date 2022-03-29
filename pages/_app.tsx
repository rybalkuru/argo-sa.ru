import React, { FC } from "react";
import { AppProps } from "next/app";

const MyApp: FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return <React.Fragment>{<Component {...pageProps} />}</React.Fragment>;
};

export default MyApp;
