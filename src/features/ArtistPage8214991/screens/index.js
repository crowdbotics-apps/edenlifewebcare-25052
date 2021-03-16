import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_51_462}>
        <View style={styles.View_51_463}>
          <View style={styles.View_51_464}>
            <View style={styles.View_51_465}>
              <View style={styles.View_51_466}>
                <Text style={styles.Text_51_466}>Shop Art</Text>
              </View>
              <View style={styles.View_51_467}>
                <Text style={styles.Text_51_467}>Explore</Text>
              </View>
              <View style={styles.View_51_468}>
                <Text style={styles.Text_51_468}>About us</Text>
              </View>
              <View style={styles.View_51_469}>
                <Text style={styles.Text_51_469}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_51_470}
            />
          </View>
          <View style={styles.View_51_471}>
            <View style={styles.View_51_472}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_51_473}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_51_476}
            />
          </View>
          <View style={styles.View_51_480} />
        </View>
      </View>
      <View style={styles.View_51_585}>
        <View style={styles.View_51_587}>
          <View style={styles.View_51_588}>
            <View style={styles.View_51_589}>
              <View style={styles.View_51_590}>
                <Text style={styles.Text_51_590}>LinkedIn</Text>
              </View>
              <View style={styles.View_51_591}>
                <Text style={styles.Text_51_591}>Facebook</Text>
              </View>
              <View style={styles.View_51_592}>
                <Text style={styles.Text_51_592}>Twitter</Text>
              </View>
              <View style={styles.View_51_593}>
                <Text style={styles.Text_51_593}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_51_594}>
              <Text style={styles.Text_51_594}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_51_595}>
            <View style={styles.View_51_596}>
              <View style={styles.View_51_597}>
                <Text style={styles.Text_51_597}>Services</Text>
              </View>
              <View style={styles.View_51_598}>
                <Text style={styles.Text_51_598}>App</Text>
              </View>
              <View style={styles.View_51_599}>
                <Text style={styles.Text_51_599}>About</Text>
              </View>
              <View style={styles.View_51_600}>
                <Text style={styles.Text_51_600}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_51_601}>
              <Text style={styles.Text_51_601}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_51_602}>
            <Text style={styles.Text_51_602}>
              All rights reserved. © 2021.{" "}
            </Text>
          </View>
          <View style={styles.View_51_603} />
          <View style={styles.View_51_604} />
          <View style={styles.View_51_605}>
            <View style={styles.View_51_606}>
              <Text style={styles.Text_51_606}>Stay in touch</Text>
            </View>
            <View style={styles.View_51_607}>
              <View style={styles.View_51_608}>
                <View style={styles.View_51_609} />
              </View>
              <View style={styles.View_51_610}>
                <Text style={styles.Text_51_610}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_51_611}
              />
            </View>
          </View>
          <View style={styles.View_51_613}>
            <Text style={styles.Text_51_613}>Gift3d</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fc/30b4/e33faf5900695e192ca51a27201f28fa"
        }}
        style={styles.ImageBackground_51_614}
      />
      <View style={styles.View_52_4}>
        <View style={styles.View_52_5}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/123d/d933/d0504d5c913ef4053608767b37f688e8"
            }}
            style={styles.ImageBackground_52_6}
          />
        </View>
        <View style={styles.View_52_23}>
          <View style={styles.View_52_24}>
            <Text style={styles.Text_52_24}>Featured Artist of the Week</Text>
          </View>
          <View style={styles.View_52_25}>
            <Text style={styles.Text_52_25}>
              Whether an identity or campaign, we make your brand visible,
              relevant and effective
            </Text>
          </View>
          <View style={styles.View_52_26}>
            <View style={styles.View_52_27}>
              <Text style={styles.Text_52_27}>Read More</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_52_28}>
        <Text style={styles.Text_52_28}>Featured Artists</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b7f/0fb9/e589a7e383cc984efc9f247052c7508e"
        }}
        style={styles.ImageBackground_52_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f52b/571e/12d76add61191ac3053fbd3c3901b4cf"
        }}
        style={styles.ImageBackground_52_98}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c77f/9a09/86eca0d92b58bbc83d737463cbc88619"
        }}
        style={styles.ImageBackground_52_99}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09f/3b1c/6691e39efe998197f38f8bba8507ee69"
        }}
        style={styles.ImageBackground_52_100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/6112/2cd715890cbf83042898ddd7f785056b"
        }}
        style={styles.ImageBackground_52_101}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0056/c79a/579c4aa62d620ea7b0fa020d0eb28b8c"
        }}
        style={styles.ImageBackground_52_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93d2/92cf/d18c188db740f62e3c6848b2943cae64"
        }}
        style={styles.ImageBackground_52_103}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0248/9ed1/e275f4ac2d322e04791dd56ed56b4aa4"
        }}
        style={styles.ImageBackground_52_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc9/c0d7/0294aa89868ce68df217c77d83053114"
        }}
        style={styles.ImageBackground_52_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b7f/0fb9/e589a7e383cc984efc9f247052c7508e"
        }}
        style={styles.ImageBackground_52_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f52b/571e/12d76add61191ac3053fbd3c3901b4cf"
        }}
        style={styles.ImageBackground_52_109}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c77f/9a09/86eca0d92b58bbc83d737463cbc88619"
        }}
        style={styles.ImageBackground_52_110}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b09f/3b1c/6691e39efe998197f38f8bba8507ee69"
        }}
        style={styles.ImageBackground_52_111}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3ff/6112/2cd715890cbf83042898ddd7f785056b"
        }}
        style={styles.ImageBackground_52_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0056/c79a/579c4aa62d620ea7b0fa020d0eb28b8c"
        }}
        style={styles.ImageBackground_52_113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93d2/92cf/d18c188db740f62e3c6848b2943cae64"
        }}
        style={styles.ImageBackground_52_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0248/9ed1/e275f4ac2d322e04791dd56ed56b4aa4"
        }}
        style={styles.ImageBackground_52_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adc9/c0d7/0294aa89868ce68df217c77d83053114"
        }}
        style={styles.ImageBackground_52_116}
      />
      <View style={styles.View_52_156}>
        <View style={styles.View_52_138} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_52_139}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_52_140}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ee3/c4c7/ee7c6f26b0895bb11bd0f6ae9ca468d0"
          }}
          style={styles.ImageBackground_52_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_52_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_52_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_52_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_52_145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d90/ba6d/db25c083993f9afc34903190b09e90d7"
          }}
          style={styles.ImageBackground_52_146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c117/4ac2/5ea182bb15d8057438fe83e07d0d9d60"
          }}
          style={styles.ImageBackground_52_147}
        />
        <View style={styles.View_52_148} />
        <View style={styles.View_52_149}>
          <Text style={styles.Text_52_149}>1</Text>
        </View>
        <View style={styles.View_52_150}>
          <Text style={styles.Text_52_150}>2</Text>
        </View>
        <View style={styles.View_52_151}>
          <Text style={styles.Text_52_151}>3</Text>
        </View>
        <View style={styles.View_52_152}>
          <Text style={styles.Text_52_152}>4</Text>
        </View>
        <View style={styles.View_52_153}>
          <Text style={styles.Text_52_153}>5</Text>
        </View>
        <View style={styles.View_52_154}>
          <Text style={styles.Text_52_154}>15</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_51_462: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_51_463: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_51_464: {
    flexGrow: 1,
    width: wp("88.88888888888889%"),
    height: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_465: {
    width: wp("23.958333333333336%"),
    minWidth: wp("23.958333333333336%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: 27,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_466: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_466: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_467: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_51_467: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_468: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_51_468: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_469: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_51_469: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_470: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    height: 33.99005126953125,
    minHeight: 33.99005126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3888888888888893%"),
    top: 18,
    resizeMode: "cover"
  },
  View_51_471: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.66666666666666%"),
    top: 44,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_472: {
    width: wp("1.6666666666666667%"),
    minWidth: wp("1.6666666666666667%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_51_473: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_51_476: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_51_480: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.069444444444445%"),
    top: 23
  },
  View_51_585: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 334,
    minHeight: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3194444444444444%"),
    top: 5904,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_51_587: {
    width: wp("77.08333333333334%"),
    height: 190,
    minHeight: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333334%"),
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_588: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.98611111111111%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_589: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    height: 136,
    minHeight: 136,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.027398003472221433%"),
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_590: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_590: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_591: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_51_591: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_592: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_51_592: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_593: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_51_593: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_594: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_594: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_595: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.185289171006943%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_596: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: 136,
    minHeight: 136,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 45,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_597: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_597: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_598: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_51_598: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_599: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_51_599: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_600: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_51_600: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_601: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_601: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_602: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_51_602: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_603: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    height: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_604: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: -24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_605: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 108,
    minHeight: 108,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.20795355902777%"),
    top: -5,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_606: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_606: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_607: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_608: {
    flexGrow: 1,
    width: wp("24.23611111111111%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 55,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_609: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_51_610: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_51_610: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_611: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%")
  },
  View_51_613: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_51_613: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  ImageBackground_51_614: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 5866
  },
  View_52_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 819,
    minHeight: 819,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 92,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_52_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 920,
    minHeight: 920,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_52_6: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 819,
    minHeight: 819,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_52_23: {
    width: wp("44.09722222222222%"),
    minWidth: wp("44.09722222222222%"),
    height: 336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111112%"),
    top: 154,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_52_24: {
    width: wp("44.09722222222222%"),
    minWidth: wp("44.09722222222222%"),
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_52_24: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 56,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_52_25: {
    width: wp("44.09722222222222%"),
    minWidth: wp("44.09722222222222%"),
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 184
  },
  Text_52_25: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_26: {
    width: wp("10.694444444444445%"),
    minWidth: wp("10.694444444444445%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 288,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_52_27: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%"),
    top: 16
  },
  Text_52_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_28: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.430555555555556%"),
    top: 1027
  },
  Text_52_28: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  ImageBackground_52_97: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06944444444444%"),
    top: 1105,
    resizeMode: "cover"
  },
  ImageBackground_52_98: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: 1864,
    resizeMode: "cover"
  },
  ImageBackground_52_99: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 1105,
    resizeMode: "cover",
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1
  },
  ImageBackground_52_100: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666665%"),
    top: 1105,
    resizeMode: "cover"
  },
  ImageBackground_52_101: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.583333333333336%"),
    top: 1864,
    resizeMode: "cover"
  },
  ImageBackground_52_102: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 1864,
    resizeMode: "cover"
  },
  ImageBackground_52_103: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666665%"),
    top: 2623,
    resizeMode: "cover"
  },
  ImageBackground_52_104: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06944444444444%"),
    top: 2623,
    resizeMode: "cover"
  },
  ImageBackground_52_107: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 2623,
    resizeMode: "cover"
  },
  ImageBackground_52_108: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06944444444444%"),
    top: 3382,
    resizeMode: "cover"
  },
  ImageBackground_52_109: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: 4141,
    resizeMode: "cover"
  },
  ImageBackground_52_110: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 3382,
    resizeMode: "cover",
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1
  },
  ImageBackground_52_111: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666665%"),
    top: 3382,
    resizeMode: "cover"
  },
  ImageBackground_52_112: {
    width: wp("28.194444444444443%"),
    minWidth: wp("28.194444444444443%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.583333333333336%"),
    top: 4141,
    resizeMode: "cover"
  },
  ImageBackground_52_113: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 4141,
    resizeMode: "cover"
  },
  ImageBackground_52_114: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666665%"),
    top: 4900,
    resizeMode: "cover"
  },
  ImageBackground_52_115: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.06944444444444%"),
    top: 4900,
    resizeMode: "cover"
  },
  ImageBackground_52_116: {
    width: wp("27.708333333333336%"),
    minWidth: wp("27.708333333333336%"),
    height: 695,
    minHeight: 695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.04166666666667%"),
    top: 4900,
    resizeMode: "cover"
  },
  View_52_156: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: 56,
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.263888888888886%"),
    top: 5722
  },
  View_52_138: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(95, 95, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_52_139: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.013888888888893%"),
    top: 2
  },
  ImageBackground_52_140: {
    width: wp("2.9899789903235313e-7%"),
    minWidth: wp("2.9899789903235313e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.104166666666671%"),
    top: 2
  },
  ImageBackground_52_141: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.291666666666671%"),
    top: 1
  },
  ImageBackground_52_142: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.583333333333336%"),
    top: 2
  },
  ImageBackground_52_143: {
    width: wp("3.035511832018124e-7%"),
    minWidth: wp("3.035511832018124e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.659722222222229%"),
    top: 1.5
  },
  ImageBackground_52_144: {
    width: wp("3.035511832018124e-7%"),
    minWidth: wp("3.035511832018124e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.88194444444445%"),
    top: 1.5
  },
  ImageBackground_52_145: {
    width: wp("3.035511832018124e-7%"),
    minWidth: wp("3.035511832018124e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.923611111111114%"),
    top: 1.5
  },
  ImageBackground_52_146: {
    width: wp("1.0416667328940497%"),
    minWidth: wp("1.0416667328940497%"),
    height: 0.00000131134129333077,
    minHeight: 0.00000131134129333077,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: 39
  },
  ImageBackground_52_147: {
    width: wp("1.0416667328940497%"),
    minWidth: wp("1.0416667328940497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.375%"),
    top: 39
  },
  View_52_148: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333357%"),
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_52_149: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: 0
  },
  Text_52_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_150: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625%"),
    top: 0
  },
  Text_52_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_151: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.263888888888893%"),
    top: 0
  },
  Text_52_151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_152: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.041666666666671%"),
    top: 0
  },
  Text_52_152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_153: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.81944444444445%"),
    top: 0
  },
  Text_52_153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_52_154: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.66666666666667%"),
    top: 0
  },
  Text_52_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 6911 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
