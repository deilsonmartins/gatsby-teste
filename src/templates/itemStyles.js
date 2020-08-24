import Img from "gatsby-image"
import styled from "styled-components"

export const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
`

export const ImgStyled = styled(Img)`
  width: 100%;
  height: 400px;
`

export const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
  background: ${props => props.theme.colors.primaryAccent};
`
export const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

export const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`
export const DropdownOption = styled.option`
  padding: 10px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`

export const BuyButton = styled.button`
  padding: 20px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
`