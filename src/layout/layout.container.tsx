import React, { Component } from "react";
import { View, Text} from "react-native";
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
      global
    }

    this.view = new LayoutView(this.props, this.attrs)
  }

  componentDidMount = () => {
    this.setState({
      title: 'hi2'
    })
  }

  render() {
    return this.view.render(this.state)

    // return(
    //   <View>
    //     <Text>{this.state.title}</Text>
    //   </View>
    // )
  }
}


