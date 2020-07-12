
import React, { Component } from "react";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import { View, Text } from "react-native";
import Layout from "../../layout/layout.container";

export default class VideoShowView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    return (
      <Layout title={"testing Pro"}>
        <View>
          <Text>Ready to show the video</Text>
          <Text>{component.state.videoTime}</Text>
        </View>
      </Layout>
    )
  }
}
