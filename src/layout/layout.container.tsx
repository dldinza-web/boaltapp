import React, { Component } from "react";
import LayoutView from "./layout.view";

declare interface HermesInternal {
  HermesInternal  :null | {}
}

export default class Layout extends Component {
  private view :LayoutView
  private attrs :Object = {}

  state = {
    title: ''
  }

  constructor(props :any) {
    super(props)

    let global : HermesInternal = { HermesInternal: { hi: 'hi1' } }

    this.attrs = {
      ...this.attrs,
      ...global
    }

    this.view = new LayoutView()
  }

  componentDidMount = () => {
    this.setState({
      title: 'hi3'
    })
  }

  onPressHome() {
    console.log('go to home')
  }

  render() {
    return this.view.render(this)
  }
}


