import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, AppState, } from "react-native";
import styles from "./layout.styles";
import ViewBase from '../core/view.base';
import { ViewBaseInterface } from '../core/view.base.interface';

export default class LayoutView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {this.showFotter(component)}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Layout</Text>
      </View>
      <View>
        {component.props.children}
          <Text>{ component.state.title + ' Hi Title' }</Text>
          <Text>{ component.props.title + ' Hi Prop' }</Text>
      </View>
      </>
    );
  }

  private showFotter(component :Component) {
    return component.attrs.HermesInternal == null
      ? null
      :
        (
        <Text style={styles.footer}>This is a partial</Text>
      )
  }
}
