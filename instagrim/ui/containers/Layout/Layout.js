import React, {Component} from "react";
import styled, {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";

const StyleDiv = styled.div `
    color: ${propos => props.theme.primary};
    font-size: ${propos => props.theme.fontSize};
`;

class Layout extends Component {
    render(){
        return (
            <BrowserRouter>
                <ThemeProvider thele = {theme}>
                    <StyleDiv>
                        <header> test </header>
                    </StyleDiv>
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default Layout;