import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

export const GabaritAdmin = (props) => {
    return (
        <>
            <Header type="admin"/>
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}