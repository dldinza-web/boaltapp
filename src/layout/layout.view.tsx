import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from "react-native";
import styles from "./layout.styles";
import ViewBase from '../core/view.base';
import { ViewBaseInterface } from '../core/view.base.interface';
import commonStyles, { colors } from '../../assets/styles/global.styles';
import { Header } from 'react-native-elements'

export default class LayoutView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    this.component = component

    return (
      <>
      <StatusBar
        backgroundColor={colors.statusBarColor}
        barStyle = {'light-content'}
        hidden={false}
      />
      <SafeAreaView
        style={[
          styles.appWrapper
        ]}
      >
        { this.showHeader() }

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View
            style={[
              styles.body,
              commonStyles.p10
            ]}
          >
            {this.component.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }

  private showHeader() {
    return (
      <View
        style={[
          styles.header,
          commonStyles.p5,
          commonStyles.pb10
        ]}
      >
        { this.showHeaderTitle() }
      </View>
    )
  }

  private showHeaderTitle() {
    return (
      <View
        style={[
          styles.headerTitle,
        ]}
      >
        <Image source={ require("../../assets/images/logos/dental-whale-logo.png") } />
      </View>
    )
  }
}
