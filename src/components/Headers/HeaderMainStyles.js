import styled from "styled-components"
import { Link } from "gatsby";

export const HeaderMainStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`

export const ShopName = styled.h1`
    background: ${props => props.theme.colors.main};
    padding: 20px;
    width: 50%;
    text-align: center;
    font-family: Heebo, sans-serif;
    border: 4px solid ${props => props.theme.colors.secondaryAccent};
    font-size: 2.5em;
    font-weight: 900;
    @media (max-width: 600px) {
        width: 100%;
      }
`

export const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`