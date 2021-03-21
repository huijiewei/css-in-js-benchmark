import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {benchmarkTheme} from "../../utils";

const Div = styled.div`
  width: 200px;
  height: 200px;
  border-width: 3px;
  border-color: white;

  :hover {
    background-color: ${props => props.theme.palette.secondary.dark};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    background-color: ${props => props.theme.palette.primary.main};
    border-style: dashed;
  }
`;

const theme = benchmarkTheme;

export default function StyledSC() {
    return (
        <ThemeProvider theme={theme}>
            {new Array(1000).fill().map(() => (
                <Div>test case</Div>
            ))}
        </ThemeProvider>
    );
}
