import PropTypes from "prop-types";
import NextHead from "next/head";
const Layout = (props: {
    title: string;
    description: string;
    keywords: string;
    children: React.ReactNode;
}) => (
    <>
        <NextHead>
            <title>{props.title || ""}</title>
            <meta name="description" content={props.description || ""} />
            <meta name="Keywords" content={props.keywords || ""} />
        </NextHead>

        {props.children}
        <style jsx global>{`
            body {
                background: #0e1116;
            }
        `}</style>
    </>
);

export default Layout;
