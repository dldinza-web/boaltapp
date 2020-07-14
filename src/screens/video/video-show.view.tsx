
import React, { Component } from "react";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import { View, Text, Button, Platform, ActivityIndicator, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from "react-native";
import Layout from "../../layout/layout.container";
import commonStyles from "../../../assets/styles/global.styles"
import VideoPlayer from 'react-native-video-controls';
import styles from "./video-show.styles";
import { AirPlayButton } from 'react-native-airplay-btn';
import GoogleCast, { CastButton } from 'react-native-google-cast';
import CommentModel from "../../models/comment/comment.model";
import moment from 'moment'
import {Animated} from "react-native";

export default class VideoShowView extends ViewBase implements ViewBaseInterface {
  render(component :Component) :Element {
    this.component = component

    return (
      <Layout>
        { this.component.state.isLoadingVideo
          ? this.showLoading()
          : this.showVideo()
        }
      </Layout>
    )
  }

  private showLoading() {
    return (
      <View
        style={[commonStyles.horizontal, styles.activityIndicator]}
      >
        <ActivityIndicator size="small" color="white"/>
        <Text style={[commonStyles.textWhite, commonStyles.ph5]}>Loading...</Text>
      </View>
    )
  }

  private showVideo() {
    return (
      <>
        <Animated.View
          style={[
            styles.videoWrapper,
            {
              opacity: this.component.state.animations.videoFadeValue
            }
          ]}
        >
          <VideoPlayer
            source={
              !this.component.state.video.isLocal
                ? { uri: this.component.state.video.source }
                : null
            }
            disableBack={true}
            paused={true}
          />
            <View style={[
              styles.broadcastingBar,
              commonStyles.horizontal
            ]}>
              <Text style={[ commonStyles.textWhite ]}>Broadcasting:</Text>

              { this.showGoogleChromecastBroadcastBtns() }
              { this.showAppleTVBroadcastBtns() }
            </View>

        </Animated.View>

        { this.showVideoInformation() }

        <View>
          <Text style={[styles.commentsTitle]}>Comments:</Text>

          { this.component.state.comments.map((comment, index) =>
            this.showCommentCard(index, comment)
          ) }
        </View>
      </>
    )
  }

  private showAppleTVBroadcastBtns() {
    return Platform.OS !== 'ios'
      ? null
      : (
          <View style={[
            commonStyles.horizontal
          ]}>
            <TouchableOpacity
              style={[
                styles.broadcastingBtn,
                commonStyles.alignMiddle,
                styles.broadcastingBtnLeft,
              ]}
            >
              <AirPlayButton style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
            <TouchableHighlight
              style={[
                styles.broadcastingBtn,
                styles.broadcastingBtnRight,
              ]}
            >
              <Text>AirPlay</Text>
            </TouchableHighlight>
          </View>
        )
  }

  private showGoogleChromecastBroadcastBtns() {
    return Platform.OS !== 'android'
      ? null
      : (
          <View style={[
            commonStyles.horizontal
          ]}>
            <TouchableOpacity
              style={[
                styles.broadcastingBtn,
                commonStyles.alignMiddle,
                styles.broadcastingBtnLeft,
              ]}
            >
              <CastButton style={[{ width: 30, height: 30, borderColor: 'green' }]} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.broadcastingBtn,
                styles.broadcastingBtnRight,
              ]}
            >
              <Text>Chromecast</Text>
            </TouchableOpacity>
          </View>
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

  showCommentCard(index: number, comment :CommentModel) {
    let authorParts = comment.author.split(' ')
    let time = moment(comment.time).format('MMMM Do YYYY, h:mm:ss a')

    return (
      <Animated.View
        key={`commentIndex-${index}`}
        style={[
          {
            transform: [
              {
                translateY: this.component.state.animations.commentsInitValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1000, 0]
                })
              }
            ]
          }
        ]}
      >
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
            <Text style={[styles.cardHeaderTitle, styles.cardContentTitleBg2]}>{authorParts[0]} <Text style={[commonStyles.strongText]}>{authorParts[1]}</Text></Text>
            <Text style={[styles.cardHeaderDate]}>{time}</Text>
          </View>
          <View
            style={[
              styles.cardContent
            ]}
          >
            <Text style={[commonStyles.fontSizeX]}>{comment.subject}</Text>
          <Text>{comment.comment}</Text>
          </View>
        </View>
      </Animated.View>
    )
  }
}
