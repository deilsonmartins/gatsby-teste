import React, { Component } from "react"

import { ShoppingCart } from "styled-icons/material/ShoppingCart"

import {
  HeaderMinorStyled,
  ShopName,
  LinkStyled,
  CartSummary,
} from "./HeaderMinorStyles"

class HeaderMinor extends Component {
  state = {
    items: 0,
  }

  updateItemTotal = qty => {
    this.setState({ items: qty })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", data => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }

  componentWillUnmount() {
    window.Snipcart.unsubscribe("cart.closed")
    window.Snipcart.unsubscribe("cart.ready")
  }

  render() {
    return (
      <HeaderMinorStyled>
        <ShopName>
          <LinkStyled to="/">{this.props.shopName}</LinkStyled>
        </ShopName>
        <CartSummary className="snipcart-summary">
          <a href="#" className="snipcart-checkout">
            {" "}
            <ShoppingCart size="40px" />
          </a>
          <p>{this.state.items} items</p>
        </CartSummary>
      </HeaderMinorStyled>
    )
  }
}

export default HeaderMinor
