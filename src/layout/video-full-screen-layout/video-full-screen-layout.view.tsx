import React, { Component } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import commonStyles from "../../../assets/styles/global.styles";
import styles from "./video-full-screen.layout.styles";

export default class VideoFullScreenLayoutView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    this.component = component

    return(
      <>
        <StatusBar
          hidden={true}
        />
        <SafeAreaView
          style={[
            commonStyles.sizeCoverAll,
            styles.videoFullScreenWrapper
          ]}
        >
          {this.component.props.children}
        </SafeAreaView>
      </>
    )
  }
}
