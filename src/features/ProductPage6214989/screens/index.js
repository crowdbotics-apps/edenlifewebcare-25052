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
      <View style={styles.View_48_805}>
        <View style={styles.View_48_807}>
          <View style={styles.View_48_808}>
            <View style={styles.View_48_809}>
              <View style={styles.View_48_810}>
                <Text style={styles.Text_48_810}>LinkedIn</Text>
              </View>
              <View style={styles.View_48_811}>
                <Text style={styles.Text_48_811}>Facebook</Text>
              </View>
              <View style={styles.View_48_812}>
                <Text style={styles.Text_48_812}>Twitter</Text>
              </View>
              <View style={styles.View_48_813}>
                <Text style={styles.Text_48_813}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_48_814}>
              <Text style={styles.Text_48_814}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_48_815}>
            <View style={styles.View_48_816}>
              <View style={styles.View_48_817}>
                <Text style={styles.Text_48_817}>Services</Text>
              </View>
              <View style={styles.View_48_818}>
                <Text style={styles.Text_48_818}>App</Text>
              </View>
              <View style={styles.View_48_819}>
                <Text style={styles.Text_48_819}>About</Text>
              </View>
              <View style={styles.View_48_820}>
                <Text style={styles.Text_48_820}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_48_821}>
              <Text style={styles.Text_48_821}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_48_822}>
            <Text style={styles.Text_48_822}>
              All rights reserved. © 2021.{" "}
            </Text>
          </View>
          <View style={styles.View_48_823} />
          <View style={styles.View_48_824} />
          <View style={styles.View_48_825}>
            <View style={styles.View_48_826}>
              <Text style={styles.Text_48_826}>Stay in touch</Text>
            </View>
            <View style={styles.View_48_827}>
              <View style={styles.View_48_828}>
                <View style={styles.View_48_829} />
              </View>
              <View style={styles.View_48_830}>
                <Text style={styles.Text_48_830}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_48_831}
              />
            </View>
          </View>
          <View style={styles.View_48_833}>
            <Text style={styles.Text_48_833}>Gift3d</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_834}>
        <View style={styles.View_48_838}>
          <View style={styles.View_48_839}>
            <View style={styles.View_48_840}>
              <View style={styles.View_48_841}>
                <Text style={styles.Text_48_841}>Shop Art</Text>
              </View>
              <View style={styles.View_48_842}>
                <Text style={styles.Text_48_842}>Explore</Text>
              </View>
              <View style={styles.View_48_843}>
                <Text style={styles.Text_48_843}>About us</Text>
              </View>
              <View style={styles.View_48_844}>
                <Text style={styles.Text_48_844}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_48_845}
            />
          </View>
          <View style={styles.View_48_846}>
            <View style={styles.View_48_847}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_48_848}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_48_851}
            />
          </View>
          <View style={styles.View_48_855} />
        </View>
      </View>
      <View style={styles.View_48_1028}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3074/8c17/6c066605c0bf38b9398cf160bdebb59d"
          }}
          style={styles.ImageBackground_48_1068}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/e528/5c897eafabb00351b45adb99f5f644c7"
          }}
          style={styles.ImageBackground_48_1069}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b336/de86/80f7f093e66fe6c171184222af0626a8"
          }}
          style={styles.ImageBackground_48_1070}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6847/c415/d6fd051ca5aa61b901bc8ac2a744ca80"
          }}
          style={styles.ImageBackground_48_1071}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8252/3952/10b7839ee04aa949e1aba4dfe60f61ae"
          }}
          style={styles.ImageBackground_48_1072}
        />
        <View style={styles.View_48_1073}>
          <Text style={styles.Text_48_1073}>Artist’s Name</Text>
        </View>
        <View style={styles.View_48_1074}>
          <Text style={styles.Text_48_1074}>Art Title</Text>
        </View>
        <View style={styles.View_48_1075}>
          <Text style={styles.Text_48_1075}>Sculpture</Text>
        </View>
        <View style={styles.View_48_1076}>
          <Text style={styles.Text_48_1076}>$2,600</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e940/b0f0/939168fb0af5ec2b98da28ec0a327701"
          }}
          style={styles.ImageBackground_48_1077}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88e7/e616/23ea4b52eb3a0dcb19c8d58736e10889"
          }}
          style={styles.ImageBackground_48_1080}
        />
        <View style={styles.View_48_1083}>
          <Text style={styles.Text_48_1083}>Add to cart</Text>
        </View>
        <View style={styles.View_48_1088}>
          <Text style={styles.Text_48_1088}>ADD TO WISHLIST</Text>
        </View>
        <View style={styles.View_48_1090}>
          <Text style={styles.Text_48_1090}>
            Description + Authenticity + Dimension +
          </Text>
        </View>
      </View>
      <View style={styles.View_48_1127}>
        <Text style={styles.Text_48_1127}>Artist’s Name</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e41f/f90a/35849a61e763f0c8c009b42ec53c6b67"
        }}
        style={styles.ImageBackground_48_1092}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36c/9d5f/e2733889c60bae06d8b4403add2a6f92"
        }}
        style={styles.ImageBackground_48_1093}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c04/23db/7e94f01cfad9bde862a9b5ec5b21c2df"
        }}
        style={styles.ImageBackground_48_1094}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ae4/ac2c/52b2ac51306ec77893bb39790119a4ae"
        }}
        style={styles.ImageBackground_48_1095}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ef/b5ef/84b2ee126d5d17bbe2ca886b719d5b72"
        }}
        style={styles.ImageBackground_48_1096}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/792d/e7ef/36198282afec2ad51d5c241d512bae82"
        }}
        style={styles.ImageBackground_48_1097}
      />
      <View style={styles.View_48_1098}>
        <View style={styles.View_48_1099}>
          <Text style={styles.Text_48_1099}>Art Title</Text>
        </View>
        <View style={styles.View_48_1100}>
          <Text style={styles.Text_48_1100}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1101}>
          <Text style={styles.Text_48_1101}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1102}>
        <View style={styles.View_48_1103}>
          <Text style={styles.Text_48_1103}>Art Title</Text>
        </View>
        <View style={styles.View_48_1104}>
          <Text style={styles.Text_48_1104}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1105}>
          <Text style={styles.Text_48_1105}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1106}>
        <View style={styles.View_48_1107}>
          <Text style={styles.Text_48_1107}>Art Title</Text>
        </View>
        <View style={styles.View_48_1108}>
          <Text style={styles.Text_48_1108}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1109}>
          <Text style={styles.Text_48_1109}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1110}>
        <View style={styles.View_48_1111}>
          <Text style={styles.Text_48_1111}>Art Title</Text>
        </View>
        <View style={styles.View_48_1112}>
          <Text style={styles.Text_48_1112}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1113}>
          <Text style={styles.Text_48_1113}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1114}>
        <View style={styles.View_48_1115}>
          <Text style={styles.Text_48_1115}>Art Title</Text>
        </View>
        <View style={styles.View_48_1116}>
          <Text style={styles.Text_48_1116}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1117}>
          <Text style={styles.Text_48_1117}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1118}>
        <View style={styles.View_48_1119}>
          <Text style={styles.Text_48_1119}>Art Title</Text>
        </View>
        <View style={styles.View_48_1120}>
          <Text style={styles.Text_48_1120}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1121}>
          <Text style={styles.Text_48_1121}>$ 2,600.00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c24d/4c74/1e8fe50e9bffc3510c997ddb13dd9a47"
        }}
        style={styles.ImageBackground_48_1136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf71/730c/72f81ea12218068eecb8cfbf7186d0cf"
        }}
        style={styles.ImageBackground_48_1137}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c048/ff74/512a572e5f073ec286dec1466de1e777"
        }}
        style={styles.ImageBackground_48_1138}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129b/b959/1962b0b82c9a2b47a2fb9710e6ea01c4"
        }}
        style={styles.ImageBackground_48_1166}
      />
      <View style={styles.View_48_1142}>
        <View style={styles.View_48_1143}>
          <Text style={styles.Text_48_1143}>Art Title</Text>
        </View>
        <View style={styles.View_48_1144}>
          <Text style={styles.Text_48_1144}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1145}>
          <Text style={styles.Text_48_1145}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1146}>
        <View style={styles.View_48_1147}>
          <Text style={styles.Text_48_1147}>Art Title</Text>
        </View>
        <View style={styles.View_48_1148}>
          <Text style={styles.Text_48_1148}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1149}>
          <Text style={styles.Text_48_1149}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1150}>
        <View style={styles.View_48_1151}>
          <Text style={styles.Text_48_1151}>Art Title</Text>
        </View>
        <View style={styles.View_48_1152}>
          <Text style={styles.Text_48_1152}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1153}>
          <Text style={styles.Text_48_1153}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1167}>
        <View style={styles.View_48_1168}>
          <Text style={styles.Text_48_1168}>Art Title</Text>
        </View>
        <View style={styles.View_48_1169}>
          <Text style={styles.Text_48_1169}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1170}>
          <Text style={styles.Text_48_1170}>$ 2,600.00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f513/be2d/68f30da53d91b244cfffd97cc54bbd4d"
        }}
        style={styles.ImageBackground_48_1171}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/877a/e7ef/4024c90ec7377915d8ab80ac76e5d2ef"
        }}
        style={styles.ImageBackground_48_1172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11b3/89e9/88c55e23c9e923181df8abf564efa81f"
        }}
        style={styles.ImageBackground_48_1173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bb/4e2a/52ff2d394e53731c31e116e7dd22bd9a"
        }}
        style={styles.ImageBackground_48_1174}
      />
      <View style={styles.View_48_1175}>
        <View style={styles.View_48_1176}>
          <Text style={styles.Text_48_1176}>Art Title</Text>
        </View>
        <View style={styles.View_48_1177}>
          <Text style={styles.Text_48_1177}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1178}>
          <Text style={styles.Text_48_1178}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1179}>
        <View style={styles.View_48_1180}>
          <Text style={styles.Text_48_1180}>Art Title</Text>
        </View>
        <View style={styles.View_48_1181}>
          <Text style={styles.Text_48_1181}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1182}>
          <Text style={styles.Text_48_1182}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1183}>
        <View style={styles.View_48_1184}>
          <Text style={styles.Text_48_1184}>Art Title</Text>
        </View>
        <View style={styles.View_48_1185}>
          <Text style={styles.Text_48_1185}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1186}>
          <Text style={styles.Text_48_1186}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1187}>
        <View style={styles.View_48_1188}>
          <Text style={styles.Text_48_1188}>Art Title</Text>
        </View>
        <View style={styles.View_48_1189}>
          <Text style={styles.Text_48_1189}>Artist Name</Text>
        </View>
        <View style={styles.View_48_1190}>
          <Text style={styles.Text_48_1190}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_1122}>
        <Text style={styles.Text_48_1122}>More Works by Artist Name</Text>
      </View>
      <View style={styles.View_48_1123} />
      <View style={styles.View_48_1124}>
        <Text style={styles.Text_48_1124}>Shop All Artworks</Text>
      </View>
      <View style={styles.View_48_1193} />
      <View style={styles.View_48_1194}>
        <Text style={styles.Text_48_1194}>Explore similar artists</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3799/d8a8/ccfb8126cd21fad40317a82a41ac45b1"
        }}
        style={styles.ImageBackground_48_1126}
      />
      <View style={styles.View_48_1128}>
        <Text style={styles.Text_48_1128}>
          “EACH PAINTING I DO IS AN EXPERIMENT, AN INVESTIGATION INTO THE NATURE
          OF AN IMAGE AND HOW IT FUNCTIONS.”
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
        }}
        style={styles.ImageBackground_48_1129}
      />
      <View style={styles.View_48_1130}>
        <Text style={styles.Text_48_1130}>About the artist</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
        }}
        style={styles.ImageBackground_48_1132}
      />
      <View style={styles.View_48_1133}>
        <Text style={styles.Text_48_1133}>Shop all works</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
        }}
        style={styles.ImageBackground_48_1191}
      />
      <View style={styles.View_48_1192}>
        <Text style={styles.Text_48_1192}>More by Artist</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
        }}
        style={styles.ImageBackground_48_1134}
      />
      <View style={styles.View_48_1135}>
        <Text style={styles.Text_48_1135}>Artist’s Interview</Text>
      </View>
      <View style={styles.View_48_1131}>
        <Text style={styles.Text_48_1131}>
          Rives Granade drapes abstractions over narratives, adding dimension to
          their origins and finishing them with a surface as smooth as satin
          latex. The Los Angeles based artist,
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fc/30b4/e33faf5900695e192ca51a27201f28fa"
        }}
        style={styles.ImageBackground_48_1195}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_48_805: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 334,
    minHeight: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4477,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_48_807: {
    width: wp("77.08333333333334%"),
    height: 190,
    minHeight: 190,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_808: {
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
  View_48_809: {
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
  View_48_810: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_810: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_811: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_811: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_812: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_812: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_813: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_813: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_814: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_814: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_815: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    height: 181,
    minHeight: 181,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.185289171006946%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_816: {
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
  View_48_817: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_817: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_818: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_818: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_819: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_819: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_820: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_820: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_821: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_821: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_822: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_822: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_823: {
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
  View_48_824: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: -24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_825: {
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
  View_48_826: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_826: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_827: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_828: {
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
  View_48_829: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_48_830: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_830: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_831: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%")
  },
  View_48_833: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_48_833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  View_48_834: {
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
  View_48_838: {
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
  View_48_839: {
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
  View_48_840: {
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
  View_48_841: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_841: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_842: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_48_842: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_843: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_48_843: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_844: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_48_844: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_845: {
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
  View_48_846: {
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
  View_48_847: {
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
  ImageBackground_48_848: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_48_851: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_48_855: {
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
  View_48_1028: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 808,
    minHeight: 808,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 112,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_48_1068: {
    width: wp("41.31944444444444%"),
    minWidth: wp("41.31944444444444%"),
    height: 791,
    minHeight: 791,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.194444444444444%"),
    top: 17,
    resizeMode: "cover"
  },
  ImageBackground_48_1069: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: 17,
    resizeMode: "cover"
  },
  ImageBackground_48_1070: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: 218,
    resizeMode: "cover"
  },
  ImageBackground_48_1071: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: 419,
    resizeMode: "cover"
  },
  ImageBackground_48_1072: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.97222222222222%"),
    top: 622,
    resizeMode: "cover"
  },
  View_48_1073: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 38
  },
  Text_48_1073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1074: {
    width: wp("12.430555555555555%"),
    minWidth: wp("12.430555555555555%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 88
  },
  Text_48_1074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1075: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 145
  },
  Text_48_1075: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1076: {
    width: wp("4.652777777777778%"),
    minWidth: wp("4.652777777777778%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 178
  },
  Text_48_1076: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1077: {
    width: wp("36.31944444444444%"),
    minWidth: wp("36.31944444444444%"),
    height: 69,
    minHeight: 69,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 335
  },
  ImageBackground_48_1080: {
    width: wp("4.856815394305159e-8%"),
    minWidth: wp("4.856815394305159e-8%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.56944444444444%"),
    top: 282
  },
  View_48_1083: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.58333333333333%"),
    top: 360
  },
  Text_48_1083: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1088: {
    width: wp("11.25%"),
    minWidth: wp("11.25%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.72222222222223%"),
    top: 416
  },
  Text_48_1088: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1090: {
    width: wp("36.11111111111111%"),
    minWidth: wp("36.11111111111111%"),
    minHeight: 180,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.15277777777778%"),
    top: 485
  },
  Text_48_1090: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1127: {
    width: wp("12.916666666666668%"),
    minWidth: wp("12.916666666666668%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.763888888888886%"),
    top: 2344
  },
  Text_48_1127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1092: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.152777777777777%"),
    top: 1136,
    resizeMode: "cover"
  },
  ImageBackground_48_1093: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: 1136,
    resizeMode: "cover"
  },
  ImageBackground_48_1094: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.84722222222222%"),
    top: 1136,
    resizeMode: "cover"
  },
  ImageBackground_48_1095: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.152777777777777%"),
    top: 1632
  },
  ImageBackground_48_1096: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: 1632,
    resizeMode: "cover"
  },
  ImageBackground_48_1097: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.84722222222222%"),
    top: 1632,
    resizeMode: "cover"
  },
  View_48_1098: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.152777777777777%"),
    top: 1425,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1099: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1099: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1100: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: 36
  },
  Text_48_1100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1101: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1101: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1102: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.5%"),
    top: 1425,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1103: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1103: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1104: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1105: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1105: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1106: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.84722222222222%"),
    top: 1425,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1107: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1108: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1109: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1109: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1110: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222221%"),
    top: 1921,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1111: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1112: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: 36
  },
  Text_48_1112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1113: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1113: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1114: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.56944444444444%"),
    top: 1921,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1115: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1116: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1117: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1117: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1118: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.916666666666664%"),
    top: 1921,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1119: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1120: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1121: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1121: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1136: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: 3190,
    resizeMode: "cover"
  },
  ImageBackground_48_1137: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: 3190,
    resizeMode: "cover"
  },
  ImageBackground_48_1138: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.87500000000001%"),
    top: 3190,
    resizeMode: "cover"
  },
  ImageBackground_48_1166: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 3190,
    resizeMode: "cover"
  },
  View_48_1142: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000001%"),
    top: 3469,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1143: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1144: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_48_1144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1145: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1145: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1146: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.375%"),
    top: 3469,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1147: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1148: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: 36
  },
  Text_48_1148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1149: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1149: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1150: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.87500000000001%"),
    top: 3469,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1151: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1152: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1153: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1153: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1167: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 3469,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1168: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1169: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1170: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1170: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1171: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: 3819,
    resizeMode: "cover"
  },
  ImageBackground_48_1172: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: 3819,
    resizeMode: "cover"
  },
  ImageBackground_48_1173: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.94444444444445%"),
    top: 3819,
    resizeMode: "cover"
  },
  ImageBackground_48_1174: {
    width: wp("19.444444444444446%"),
    minWidth: wp("19.444444444444446%"),
    height: 279,
    minHeight: 279,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 3819,
    resizeMode: "cover"
  },
  View_48_1175: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%"),
    top: 4098,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1176: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1177: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: 36
  },
  Text_48_1177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1178: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1178: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1179: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: 4098,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1180: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1181: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1182: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1182: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1183: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.94444444444445%"),
    top: 4098,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1184: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1185: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1186: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1186: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1187: {
    width: wp("24.09722222222222%"),
    minWidth: wp("24.09722222222222%"),
    height: 126,
    minHeight: 126,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 4098,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_1188: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_1188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1189: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_1189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1190: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_1190: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1122: {
    width: wp("32.708333333333336%"),
    minWidth: wp("32.708333333333336%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.611111111111114%"),
    top: 1022
  },
  Text_48_1122: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1123: {
    width: wp("16.041666666666668%"),
    minWidth: wp("16.041666666666668%"),
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.736111111111114%"),
    top: 2128,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_48_1124: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.48611111111111%"),
    top: 2149
  },
  Text_48_1124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1193: {
    width: wp("16.041666666666668%"),
    minWidth: wp("16.041666666666668%"),
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%"),
    top: 4298,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_48_1194: {
    width: wp("10.625%"),
    minWidth: wp("10.625%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.48611111111111%"),
    top: 4319
  },
  Text_48_1194: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1126: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 755,
    minHeight: 755,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: 2319,
    resizeMode: "cover"
  },
  View_48_1128: {
    width: wp("43.26388888888889%"),
    minWidth: wp("43.26388888888889%"),
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.80555555555556%"),
    top: 2393
  },
  Text_48_1128: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1129: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 2803,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%")
  },
  View_48_1130: {
    width: wp("8.680555555555555%"),
    minWidth: wp("8.680555555555555%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.763888888888886%"),
    top: 2794
  },
  Text_48_1130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1132: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 2851,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%")
  },
  View_48_1133: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.763888888888886%"),
    top: 2842
  },
  Text_48_1133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1191: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 3678,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  View_48_1192: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.25%"),
    top: 3669
  },
  Text_48_1192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1134: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 2899,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.625%")
  },
  View_48_1135: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.763888888888886%"),
    top: 2890
  },
  Text_48_1135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_1131: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: 118,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.763888888888886%"),
    top: 2642
  },
  Text_48_1131: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_1195: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4439
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
