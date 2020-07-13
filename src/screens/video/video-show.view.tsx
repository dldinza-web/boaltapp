
import React, { Component } from "react";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import { View, Text, Button, Platform } from "react-native";
import Layout from "../../layout/layout.container";
import globalStyles from "../../../assets/styles/global.styles"
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import styles from "./video-show.styles";
import { AirPlayButton } from 'react-native-airplay-btn';
import GoogleCast, { CastButton } from 'react-native-google-cast';

export default class VideoShowView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    return (
      <Layout title={"testing Pro"}>
        <View style={[styles.backgroundVideo, globalStyles.boderDebug]}>
            <Text>React Video Player Control</Text>
            <VideoPlayer
              source={
                { uri: component.state.video }
              }
              disableBack={true}
              paused={true}
            />
            { Platform.OS === 'ios' && <AirPlayButton style={{ height: 30, width: 30 }} />}
            { Platform.OS === 'android' &&
              <View>
                <CastButton style={[globalStyles.boderDebug, { width: 30, height: 30, borderColor: 'green' }]} />
                <Button onPress={component.onStartAndroidCasting} title={"Casting Chromecast"}/>
              </View>
            }
        </View>
      </Layout>
    )
  }
}
