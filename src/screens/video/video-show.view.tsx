
import React, { Component } from "react";
import ViewBase from "../../core/view.base";
import { ViewBaseInterface } from "src/core/view.base.interface";
import { View, Text, Button, Platform, ActivityIndicator } from "react-native";
import Layout from "../../layout/layout.container";
import commonStyles from "../../../assets/styles/global.styles"
import VideoPlayer from 'react-native-video-controls';
import styles from "./video-show.styles";
import { AirPlayButton } from 'react-native-airplay-btn';
import GoogleCast, { CastButton } from 'react-native-google-cast';
import CommentModel from "../../models/comment/comment.model";
import moment from 'moment'

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
        <View style={[styles.videoWrapper]}>
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
              <Button onPress={this.component.onStartAndroidCasting} title={"Casting Chromecast"}/>
            </View>
          }
        </View>

        { this.showVideoInformation() }

        <View>
          <Text style={[styles.commentsTitle]}>Comments:</Text>

          { this.component.state.comments.map((coment, index) =>
            this.showCommentCard(coment)
          ) }
        </View>
      </>
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

  showCommentCard(comment :CommentModel) {
    let authorParts = comment.author.split(' ')
    let time = moment(comment.time).format('MMMM Do YYYY, h:mm:ss a')

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
    )
  }
}
