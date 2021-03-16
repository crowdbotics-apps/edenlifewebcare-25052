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
      <View style={styles.View_16_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f51/e64e/b93c81645cdf51bec61dcab24288c887"
          }}
          style={styles.ImageBackground_16_14}
        />
        <View style={styles.View_16_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
            }}
            style={styles.ImageBackground_16_16}
          />
          <View style={styles.View_16_17}>
            <Text style={styles.Text_16_17}>Continue Reading</Text>
          </View>
        </View>
        <View style={styles.View_16_18}>
          <Text style={styles.Text_16_18}>
            “EACH PAINTING I DO IS AN EXPERIMENT, AN INVESTIGATION INTO THE
            NATURE OF AN IMAGE AND HOW IT FUNCTIONS.”
          </Text>
        </View>
      </View>
      <View style={styles.View_16_19}>
        <Text style={styles.Text_16_19}>
          Rives Granade drapes abstractions over narratives, adding dimension to
          their origins and finishing them with a surface as smooth as satin
          latex. The Los Angeles based artist, who works in a multitude of
          mediums, has a natural ability to turn meaning into myth and vice
          versa, using anything on hand to create a fluid palette while doing
          so. color-swirled tones about his new works in progress.
        </Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_16_13: {
    width: wp("77.13690062543434%"),
    height: 736,
    minHeight: 736,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466296038915914%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_16_14: {
    width: wp("42.11257817929118%"),
    minWidth: wp("42.11257817929118%"),
    height: 750,
    minHeight: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.62612925642808%"),
    top: -59
  },
  View_16_15: {
    width: wp("41.76511466296039%"),
    minWidth: wp("41.76511466296039%"),
    height: 714,
    minHeight: 714,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.5441278665740104%"),
    top: -2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_16_16: {
    width: wp("2.7102154273801253%"),
    height: 11,
    top: 589,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.39888811674774%")
  },
  View_16_17: {
    width: wp("9.589993050729674%"),
    minWidth: wp("9.589993050729674%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.76650451702571%"),
    top: 580
  },
  Text_16_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_18: {
    width: wp("43.29395413481584%"),
    minWidth: wp("43.29395413481584%"),
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.308547602501737%"),
    top: 0
  },
  Text_16_18: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_19: {
    width: wp("27.936066712995135%"),
    minWidth: wp("27.936066712995135%"),
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.061153578874219%"),
    top: 424
  },
  Text_16_19: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 943 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
