import styled from "styled-components";
import { breakpoints, colors } from "../../utils/style/theme";

export const Input = styled.input`

    padding:0 15px;
    line-height:40px;
    border:2px solid ${colors.textSecondary};
    border-radius:6px;
    font-size:14px;
    max-width: 400px;

    @media screen and (${breakpoints.mobileLarge}) {
        
    }

    @media screen and (${breakpoints.tablet}) {
        font-size:16px;
    }

    @media screen and (${breakpoints.tabletSmall}) {
        
    }

    @media screen and (${breakpoints.desktop}) {
        font-size:18px;
    }

    @media screen and (${breakpoints.desktoplarge}) {
        
    }

`