
import React, { Component } from "react";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import { View, Text, Button, Platform } from "react-native";
import Layout from "../../layout/layout.container";
import commonStyles from "../../../assets/styles/global.styles"
import VideoPlayer from 'react-native-video-controls';
import styles from "./video-show.styles";
import { AirPlayButton } from 'react-native-airplay-btn';
import GoogleCast, { CastButton } from 'react-native-google-cast';

export default class VideoShowView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    this.component = component

    return (
      <Layout title={"testing Pro"}>
        <View style={[styles.backgroundVideo]}>
          <VideoPlayer
            source={
              !this.component.state.video.isLocal
                ? { uri: this.component.state.video.source }
                : null
            }
            disableBack={true}
            paused={true}
          />
          { Platform.OS === 'ios' && <AirPlayButton style={{ height: 30, width: 30 }} />}
          { Platform.OS === 'android' &&
            <View>
              <CastButton style={[{ width: 30, height: 30, borderColor: 'green' }]} />
              <Button onPress={component.onStartAndroidCasting} title={"Casting Chromecast"}/>
            </View>
          }
        </View>

        { this.showVideoInformation() }

        <View>
          <Text style={[styles.commentsTitle]}>Comments:</Text>

          { this.showCommentCard() }
          { this.showCommentCard() }
          { this.showCommentCard() }
        </View>
      </Layout>
    )
  }

  private showVideoInformation() {
    return (
      <View
        style={[
          styles.cardInfo
        ]}
      >
        <View
          style={[
            commonStyles.horizontal,
          ]}
        >
          <Text style={[styles.cardHeaderTitle, styles.cardContentTitleBg1]}>Meet <Text style={[commonStyles.strongText]}>Blue</Text></Text>
          <Text style={[styles.cardHeaderDate]}>February 29, 2020</Text>
        </View>

        <View
          style={[
            styles.cardContent,
            commonStyles.horizontal
          ]}
        >
          <View
            style={[
              styles.cardContentLeft
            ]}
          >
            <Text style={[commonStyles.fontSizeX]}>YOUR NEXT TEAM MEMBER</Text>
            <Text>The intelligence that powers ORCA</Text>
          </View>

          <View
            style={[
              styles.cardContentRight
            ]}
          >
            <Text style={[commonStyles.fontSizeX, styles.cardContentRightText, commonStyles.strongText]}>Midwinter Conference 2020</Text>
            <Text style={[styles.cardContentRightText]}>ORCA Release at Chicago</Text>
          </View>
        </View>


      </View>
    )
  }

  showCommentCard() {
    return (
      <View
        style={[
          styles.cardInfo,
        ]}
      >
        <View
          style={[
            commonStyles.horizontal,
          ]}
        >
          <Text style={[styles.cardHeaderTitle, styles.cardContentTitleBg2]}>Dr. <Text style={[commonStyles.strongText]}>Baker</Text></Text>
          <Text style={[styles.cardHeaderDate]}>March 2, 2020 at 8:00 am</Text>
        </View>
        <View
          style={[
            styles.cardContent
          ]}
        >
          <Text style={[commonStyles.fontSizeX]}>Successfully Presentation</Text>
          <Text>Many hospitals and clinics accepted to use Meet Blue.</Text>
        </View>
      </View>
    )
  }
}
