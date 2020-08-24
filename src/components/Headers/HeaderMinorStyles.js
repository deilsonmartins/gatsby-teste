import styled from "styled-components"
import { Link } from "gatsby";

export const HeaderMinorStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.main};
    margin: 20px 0;
    border: 4px solid ${props => props.theme.colors.secondaryAccent};

`

export const ShopName = styled.h1`
    padding: 20px;
    font-family: Heebo, sans-serif;
    font-size: 2em;
    font-weight: 700;
`

export const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

export const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    font-weight: bold;
`