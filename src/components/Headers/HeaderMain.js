import React from "react";

import { HeaderMainStyled, ShopName, LinkStyled} from './HeaderMainStyles';

const headerMain = (props) => {
    return (
        <HeaderMainStyled>
            <ShopName>
                <LinkStyled to='/'>
                    {props.shopName}
                </LinkStyled>
            </ShopName>
        </HeaderMainStyled>
    )
}

export default headerMain;