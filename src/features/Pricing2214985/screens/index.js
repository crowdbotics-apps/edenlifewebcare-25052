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
      <View style={styles.View_5_10}>
        <View style={styles.View_5_12}>
          <Text style={styles.Text_5_12}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ip
          </Text>
        </View>
      </View>
      <View style={styles.View_5_11}>
        <Text style={styles.Text_5_11}>Featured Products</Text>
      </View>
      <View style={styles.View_5_147}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4508/c978/60213ea38315d416ab3eb41bd839b077"
          }}
          style={styles.ImageBackground_5_108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3893/3bee/2b27573631d41b0781990c198d28623a"
          }}
          style={styles.ImageBackground_5_110}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/cf8e/c3d53661c8d8f9a7d5976c3cb56cea4e"
          }}
          style={styles.ImageBackground_5_111}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8813/0975/25b43ba92c9a10ca3e33e20a399a6142"
          }}
          style={styles.ImageBackground_5_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e76/8a84/b07cbeccf79c26a4def9f4cf87428c4c"
          }}
          style={styles.ImageBackground_5_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/572c/b1cf68d63601af62a01d47ac3778c29b"
          }}
          style={styles.ImageBackground_5_114}
        />
        <View style={styles.View_5_124}>
          <View style={styles.View_5_115}>
            <Text style={styles.Text_5_115}>Artist Name</Text>
          </View>
          <View style={styles.View_5_117}>
            <Text style={styles.Text_5_117}>Art Title</Text>
          </View>
          <View style={styles.View_5_118}>
            <Text style={styles.Text_5_118}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_116}>
            <Text style={styles.Text_5_116}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_5_123}>
          <View style={styles.View_5_119}>
            <Text style={styles.Text_5_119}>Artist Name</Text>
          </View>
          <View style={styles.View_5_120}>
            <Text style={styles.Text_5_120}>Art Title</Text>
          </View>
          <View style={styles.View_5_121}>
            <Text style={styles.Text_5_121}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_122}>
            <Text style={styles.Text_5_122}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_5_125}>
          <View style={styles.View_5_126}>
            <Text style={styles.Text_5_126}>Artist Name</Text>
          </View>
          <View style={styles.View_5_127}>
            <Text style={styles.Text_5_127}>Art Title</Text>
          </View>
          <View style={styles.View_5_128}>
            <Text style={styles.Text_5_128}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_129}>
            <Text style={styles.Text_5_129}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_5_130}>
          <View style={styles.View_5_131}>
            <Text style={styles.Text_5_131}>Artist Name</Text>
          </View>
          <View style={styles.View_5_132}>
            <Text style={styles.Text_5_132}>Art Title</Text>
          </View>
          <View style={styles.View_5_133}>
            <Text style={styles.Text_5_133}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_134}>
            <Text style={styles.Text_5_134}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_5_135}>
          <View style={styles.View_5_136}>
            <Text style={styles.Text_5_136}>Artist Name</Text>
          </View>
          <View style={styles.View_5_137}>
            <Text style={styles.Text_5_137}>Art Title</Text>
          </View>
          <View style={styles.View_5_138}>
            <Text style={styles.Text_5_138}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_139}>
            <Text style={styles.Text_5_139}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_5_140}>
          <View style={styles.View_5_141}>
            <Text style={styles.Text_5_141}>Artist Name</Text>
          </View>
          <View style={styles.View_5_142}>
            <Text style={styles.Text_5_142}>Art Title</Text>
          </View>
          <View style={styles.View_5_143}>
            <Text style={styles.Text_5_143}>Type of artwork</Text>
          </View>
          <View style={styles.View_5_144}>
            <Text style={styles.Text_5_144}>$ 2,600.00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_145}>
        <View style={styles.View_5_146}>
          <Text style={styles.Text_5_146}>Shop All Art</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_5_10: {
    width: wp("50.69444444444444%"),
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.65277777777778%"),
    top: 117,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_12: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_12: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_11: {
    width: wp("30.34722222222222%"),
    minWidth: wp("30.34722222222222%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.86111111111111%"),
    top: 46
  },
  Text_5_11: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_147: {
    width: wp("89.23611111111111%"),
    minWidth: wp("89.23611111111111%"),
    height: 1048,
    minHeight: 1048,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416666666666667%"),
    top: 247,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_5_108: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_5_110: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_5_111: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.88888888888889%"),
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_5_112: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 553,
    resizeMode: "cover"
  },
  ImageBackground_5_113: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: 553,
    resizeMode: "cover"
  },
  ImageBackground_5_114: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.88888888888889%"),
    top: 553,
    resizeMode: "cover"
  },
  View_5_124: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 365,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_115: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_117: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_5_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_118: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_5_118: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_116: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_5_116: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_123: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: 365,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_119: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_120: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_5_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_121: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_5_121: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_122: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_5_122: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_125: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.88888888888889%"),
    top: 365,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_126: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_127: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_5_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_128: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_5_128: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_129: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_5_129: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_130: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 918,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_131: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_132: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_5_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_133: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_5_133: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_134: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_5_134: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_135: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.944444444444446%"),
    top: 918,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_136: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_137: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_5_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_138: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_5_138: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_139: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_5_139: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_140: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.88888888888889%"),
    top: 918,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_141: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_5_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_142: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_5_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_143: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_5_143: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_144: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_5_144: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_145: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.40277777777779%"),
    top: 1350,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_5_146: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 16
  },
  Text_5_146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1466 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
