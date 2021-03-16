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
      <View style={styles.View_1_48}>
        <View style={styles.View_1_49}>
          <View style={styles.View_1_50}>
            <Text style={styles.Text_1_50}>01 / 03</Text>
          </View>
          <View style={styles.View_1_51}>
            <Text style={styles.Text_1_51}>Featured Artist Title</Text>
          </View>
          <View style={styles.View_1_52}>
            <Text style={styles.Text_1_52}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </Text>
          </View>
          <View style={styles.View_1_147}>
            <View style={styles.View_1_148}>
              <Text style={styles.Text_1_148}>Read more</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_54}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb99/c9d3/f650080706c1ec476321700ec09e03c6"
            }}
            style={styles.ImageBackground_1_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a61/3bb7/8b75a07357bd7495e402856cea0413a7"
            }}
            style={styles.ImageBackground_1_56}
          />
        </View>
      </View>
      <View style={styles.View_1_115}>
        <View style={styles.View_1_116}>
          <View style={styles.View_1_117}>
            <View style={styles.View_1_118}>
              <Text style={styles.Text_1_118}>Shop Art</Text>
            </View>
            <View style={styles.View_1_119}>
              <Text style={styles.Text_1_119}>Explore</Text>
            </View>
            <View style={styles.View_1_120}>
              <Text style={styles.Text_1_120}>About</Text>
            </View>
          </View>
          <View style={styles.View_1_121}>
            <Text style={styles.Text_1_121}>LOGO</Text>
          </View>
        </View>
        <View style={styles.View_1_122}>
          <View style={styles.View_1_131}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
              }}
              style={styles.ImageBackground_1_132}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
            }}
            style={styles.ImageBackground_1_135}
          />
        </View>
      </View>
      <View style={styles.View_1_58}>
        <View style={styles.View_1_108}>
          <View style={styles.View_1_109}>
            <Text style={styles.Text_1_109}>01</Text>
          </View>
          <View style={styles.View_1_110}>
            <View style={styles.View_1_111} />
            <View style={styles.View_1_112} />
            <View style={styles.View_1_113} />
          </View>
          <View style={styles.View_1_114}>
            <Text style={styles.Text_1_114}>03</Text>
          </View>
        </View>
        <View style={styles.View_1_95}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/bc26/93d34ef37d97cb0b4557bd17ec8f3811"
            }}
            style={styles.ImageBackground_1_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
            }}
            style={styles.ImageBackground_1_102}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_48: {
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
  View_1_49: {
    width: wp("38.125%"),
    minWidth: wp("38.125%"),
    height: 502,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777779%"),
    top: 209,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_50: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_50: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_1_51: {
    width: wp("38.125%"),
    minWidth: wp("38.125%"),
    minHeight: 152,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46
  },
  Text_1_51: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 56,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_1_52: {
    width: wp("35.41666666666667%"),
    minWidth: wp("35.41666666666667%"),
    minHeight: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 230
  },
  Text_1_52: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_147: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 454,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_1_148: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%"),
    top: 16
  },
  Text_1_148: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("60.69444444444444%"),
    minWidth: wp("60.69444444444444%"),
    height: 628,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.638888888888886%"),
    top: 155.5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_55: {
    width: wp("30.833333333333336%"),
    height: 628,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1_56: {
    width: wp("27.77777777777778%"),
    height: 567,
    top: 30.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.91666666666667%"),
    resizeMode: "cover"
  },
  View_1_115: {
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
  View_1_116: {
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
  View_1_117: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: 27,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_118: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_118: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_119: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_1_119: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_120: {
    width: wp("2.9166666666666665%"),
    minWidth: wp("2.9166666666666665%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_1_120: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_121: {
    width: wp("6.458333333333334%"),
    minWidth: wp("6.458333333333334%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 15
  },
  Text_1_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  View_1_122: {
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
  View_1_131: {
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
  ImageBackground_1_132: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_1_135: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_1_58: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.638888888888886%"),
    top: 827,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_108: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.916666666666671%"),
    top: 2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_109: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_1_109: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_110: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: 9,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_111: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_1_112: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 0,
    backgroundColor: "rgba(140, 140, 143, 1)"
  },
  View_1_113: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: 2,
    minHeight: 2,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555557%"),
    top: 0,
    backgroundColor: "rgba(140, 140, 143, 1)"
  },
  View_1_114: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222229%"),
    top: 0
  },
  Text_1_114: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_95: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_100: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_102: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_2: { height: 920 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
