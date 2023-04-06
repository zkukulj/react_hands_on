import styled from "styled-components";
import {ReactComponent as HamburgerIcon} from "../../assets/images/icon-hamburger.svg"
import {NavLink} from "react-router-dom"
import {Button} from "../../utils/style/generalStyles.js"
import { colors,breakpoints } from "../../utils/style/theme";

export const HeaderWrapper = styled.header`
    position: absolute;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 32px;
    ${ (props) => props.isSecondary &&
    `
        position:initial;
        background-color: var(--color-text-primary);
    `

    }

    @media screen and (${breakpoints.tablet}) {
        padding: 32px 0;
    }
`;

export const HeaderInner = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media screen and (${breakpoints.tablet}) {
          width: 960px;
          margin: 0 auto;
      }
      @media screen and (${breakpoints.desktop}) {
        width: 1260px;
      }
`;

export const Hamburger = styled(HamburgerIcon)`

    width: 30px;
    height: 30px;
    @media screen and (${breakpoints.tablet}) {
        display: none;
    }

`;

export const Link = styled(NavLink)`
    display: block;
      color: ${colors.secondary};
      text-decoration: none;
      letter-spacing: 1px;
      font-size: 16px;
      margin-right: 48px;
      transition: text-shadow 0.3s ease-out;

      &:hover {
        text-shadow: 0.7px 0 0 ${colors.secondary};
      }
`;

export const Nav = styled.nav`
        display: none;
      @media screen and (${breakpoints.tablet}) {
        display: flex;
        align-items: center;
      }
`;

export const HeaderButton = styled(Button)`

`;