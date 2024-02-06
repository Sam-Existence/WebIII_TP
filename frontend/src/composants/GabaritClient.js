import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

export const GabaritClient = (props) => {
    return (
        <>
            <Header/>
            <Container className="py-2">
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}