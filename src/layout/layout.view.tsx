import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, AppState, } from "react-native";
import styles from "./layout.styles";
import ViewCore from './core/view.core';
import { ViewCoreInterface } from './core/view.core.interface';

export default class LayoutView extends ViewCore implements ViewCoreInterface {
  constructor(props :any, attrs :any) {
    super(props, attrs)
  }

  render(state :any) {
    return (
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          {this.attrs.HermesInternal == null ? null : (
            <Text style={styles.footer}>This is a partial</Text>
          )}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.title}>Layout</Text>
      </View>
      <View>
        {this.props.children}
          <Text>{ state.title + ' Hi Title' }</Text>
          <Text>{ this.props.title + ' Hi Prop' }</Text>
      </View>
      </>
    );
  }
}
