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
      <View style={styles.View_51_32}>
        <View style={styles.View_51_33}>
          <View style={styles.View_51_34}>
            <View style={styles.View_51_35}>
              <View style={styles.View_51_36}>
                <Text style={styles.Text_51_36}>Shop Art</Text>
              </View>
              <View style={styles.View_51_37}>
                <Text style={styles.Text_51_37}>Explore</Text>
              </View>
              <View style={styles.View_51_38}>
                <Text style={styles.Text_51_38}>About us</Text>
              </View>
              <View style={styles.View_51_39}>
                <Text style={styles.Text_51_39}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_51_40}
            />
          </View>
          <View style={styles.View_51_41}>
            <View style={styles.View_51_42}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_51_43}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_51_46}
            />
          </View>
          <View style={styles.View_51_50} />
        </View>
      </View>
      <View style={styles.View_51_230}>
        <View style={styles.View_51_231}>
          <View style={styles.View_51_232}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36bd/3d22/ba65fd77a4181dcb09b033a9c71b1e65"
              }}
              style={styles.ImageBackground_51_233}
            />
            <View style={styles.View_51_234}>
              <View style={styles.View_51_235}>
                <Text style={styles.Text_51_235}>Cathal Howarth </Text>
              </View>
              <View style={styles.View_51_236}>
                <Text style={styles.Text_51_236}>Service Design Lead</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_51_237}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5f3/2010/a88fcbd6503b2d354de19015809d9b8e"
              }}
              style={styles.ImageBackground_51_238}
            />
            <View style={styles.View_51_239}>
              <View style={styles.View_51_240}>
                <Text style={styles.Text_51_240}>Ellouise Oneill</Text>
              </View>
              <View style={styles.View_51_241}>
                <Text style={styles.Text_51_241}>Interaction Design Lead</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_51_273}>
          <View style={styles.View_51_274}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36bd/3d22/ba65fd77a4181dcb09b033a9c71b1e65"
              }}
              style={styles.ImageBackground_51_275}
            />
            <View style={styles.View_51_276}>
              <View style={styles.View_51_277}>
                <Text style={styles.Text_51_277}>Cathal Howarth </Text>
              </View>
              <View style={styles.View_51_278}>
                <Text style={styles.Text_51_278}>Service Design Lead</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_51_279}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5f3/2010/a88fcbd6503b2d354de19015809d9b8e"
              }}
              style={styles.ImageBackground_51_280}
            />
            <View style={styles.View_51_281}>
              <View style={styles.View_51_282}>
                <Text style={styles.Text_51_282}>Ellouise Oneill</Text>
              </View>
              <View style={styles.View_51_283}>
                <Text style={styles.Text_51_283}>Interaction Design Lead</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_51_242}>
          <View style={styles.View_51_243}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4da9/a07c/089ddccff2fa195d1e7ee4407c383889"
              }}
              style={styles.ImageBackground_51_244}
            />
            <View style={styles.View_51_245}>
              <View style={styles.View_51_246}>
                <Text style={styles.Text_51_246}>Nataly Hickman</Text>
              </View>
              <View style={styles.View_51_247}>
                <Text style={styles.Text_51_247}>Chief Operations Officer</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_51_248}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bde3/b3ed/0c9730b16efc04be596a44a58a7885c7"
              }}
              style={styles.ImageBackground_51_249}
            />
            <View style={styles.View_51_250}>
              <View style={styles.View_51_251}>
                <Text style={styles.Text_51_251}>Boris Jordan</Text>
              </View>
              <View style={styles.View_51_252}>
                <Text style={styles.Text_51_252}>Creative Director</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_51_284}>
        <Text style={styles.Text_51_284}>Featured Artists</Text>
      </View>
      <View style={styles.View_51_385}>
        <Text style={styles.Text_51_385}>CUrated collecitons</Text>
      </View>
      <View style={styles.View_51_341}>
        <View style={styles.View_51_342}>
          <View style={styles.View_51_343}>
            <Text style={styles.Text_51_343}>Curated just for you.</Text>
          </View>
        </View>
        <View style={styles.View_51_345}>
          <View style={styles.View_51_346}>
            <View style={styles.View_51_347}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abcc/58d2/9c0b09bfa3176b70dba68d40186079f2"
                }}
                style={styles.ImageBackground_51_348}
              />
              <View style={styles.View_51_349}>
                <Text style={styles.Text_51_349}>Vogue</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_51_350}>
            <View style={styles.View_51_351}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae36/5fe5/7854ac29fc43e7fe42bdf457d671187b"
                }}
                style={styles.ImageBackground_51_352}
              />
              <View style={styles.View_51_353}>
                <Text style={styles.Text_51_353}>Mitzie</Text>
              </View>
            </View>
            <View style={styles.View_51_354}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df36/9096/5ccd382075d46aedeb109193a6b96031"
                }}
                style={styles.ImageBackground_51_355}
              />
              <View style={styles.View_51_356}>
                <Text style={styles.Text_51_356}>Winery</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_51_357}>
            <View style={styles.View_51_358}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d92f/bc99/232555859452af8a099d5d2b291f4fa6"
                }}
                style={styles.ImageBackground_51_359}
              />
              <View style={styles.View_51_360}>
                <Text style={styles.Text_51_360}>Collé House</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_51_392}>
        <View style={styles.View_51_393}>
          <Text style={styles.Text_51_393}>
            A melting pot to ensure a diversity of knowledge
          </Text>
        </View>
        <View style={styles.View_51_394}>
          <View style={styles.View_51_395}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8081/9f2e/d2170b73fd0fb7df086587a3e45898bd"
              }}
              style={styles.ImageBackground_51_396}
            />
          </View>
          <View style={styles.View_51_397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e2/b18b/7c27887405c3870414f4e451eb2da778"
              }}
              style={styles.ImageBackground_51_398}
            />
          </View>
        </View>
        <View style={styles.View_51_399}>
          <View style={styles.View_51_400}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb09/2370/84e0b04537bb6325ec14ffc0e9c64c52"
              }}
              style={styles.ImageBackground_51_401}
            />
          </View>
          <View style={styles.View_51_402}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3093/febf/285e9e69ccb2c9764ad9632635ef24b3"
              }}
              style={styles.ImageBackground_51_403}
            />
          </View>
          <View style={styles.View_51_404}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c0/51a6/75a427b27a6c6b79cf88498c7d623a88"
              }}
              style={styles.ImageBackground_51_405}
            />
          </View>
          <View style={styles.View_51_406}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec04/44d9/270335021598ab200e63233df89da081"
              }}
              style={styles.ImageBackground_51_407}
            />
          </View>
        </View>
        <View style={styles.View_51_408}>
          <View style={styles.View_51_409}>
            <View style={styles.View_51_410} />
          </View>
          <View style={styles.View_51_411}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8d7/6e8f/74765c54670d9bef61662d5e91eba52a"
              }}
              style={styles.ImageBackground_51_412}
            />
          </View>
          <View style={styles.View_51_413}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/018e/cf7c/56bd42eb6374f1a3856929a1fb5bd924"
              }}
              style={styles.ImageBackground_51_414}
            />
          </View>
          <View style={styles.View_51_415}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34a8/76fe/3b1f2f00885a4c73d31f73aca1881c0c"
              }}
              style={styles.ImageBackground_51_416}
            />
          </View>
        </View>
        <View style={styles.View_51_417}>
          <View style={styles.View_51_418}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3193/eadf/f670c4f0d14beaa935b404f42c262bab"
              }}
              style={styles.ImageBackground_51_419}
            />
          </View>
          <View style={styles.View_51_420}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cee/8d77/2a1fda27e7a38f8271f18111e7f6f6d4"
              }}
              style={styles.ImageBackground_51_421}
            />
          </View>
          <View style={styles.View_51_422}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a78/57b1/ce9ca6e4cd46936a522c1e3273ae34a8"
              }}
              style={styles.ImageBackground_51_423}
            />
          </View>
          <View style={styles.View_51_424}>
            <View style={styles.View_51_425} />
          </View>
        </View>
      </View>
      <View style={styles.View_51_426}>
        <View style={styles.View_51_427}>
          <Text style={styles.Text_51_427}>Read all interviews</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f6/b4d6/60c9ff3ad5c1f7059ca73152b1d37648"
          }}
          style={styles.ImageBackground_51_428}
        />
      </View>
      <View style={styles.View_51_374}>
        <View style={styles.View_51_375}>
          <Text style={styles.Text_51_375}>See all projects</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f6/b4d6/60c9ff3ad5c1f7059ca73152b1d37648"
          }}
          style={styles.ImageBackground_51_379}
        />
      </View>
      <View style={styles.View_51_386}>
        <View style={styles.View_51_387}>
          <Text style={styles.Text_51_387}>See all artists</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f6/b4d6/60c9ff3ad5c1f7059ca73152b1d37648"
          }}
          style={styles.ImageBackground_51_388}
        />
      </View>
      <View style={styles.View_51_431}>
        <View style={styles.View_51_433}>
          <View style={styles.View_51_434}>
            <View style={styles.View_51_435}>
              <View style={styles.View_51_436}>
                <Text style={styles.Text_51_436}>LinkedIn</Text>
              </View>
              <View style={styles.View_51_437}>
                <Text style={styles.Text_51_437}>Facebook</Text>
              </View>
              <View style={styles.View_51_438}>
                <Text style={styles.Text_51_438}>Twitter</Text>
              </View>
              <View style={styles.View_51_439}>
                <Text style={styles.Text_51_439}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_51_440}>
              <Text style={styles.Text_51_440}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_51_441}>
            <View style={styles.View_51_442}>
              <View style={styles.View_51_443}>
                <Text style={styles.Text_51_443}>Services</Text>
              </View>
              <View style={styles.View_51_444}>
                <Text style={styles.Text_51_444}>App</Text>
              </View>
              <View style={styles.View_51_445}>
                <Text style={styles.Text_51_445}>About</Text>
              </View>
              <View style={styles.View_51_446}>
                <Text style={styles.Text_51_446}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_51_447}>
              <Text style={styles.Text_51_447}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_51_448}>
            <Text style={styles.Text_51_448}>
              All rights reserved. © 2021.{" "}
            </Text>
          </View>
          <View style={styles.View_51_449} />
          <View style={styles.View_51_450} />
          <View style={styles.View_51_451}>
            <View style={styles.View_51_452}>
              <Text style={styles.Text_51_452}>Stay in touch</Text>
            </View>
            <View style={styles.View_51_453}>
              <View style={styles.View_51_454}>
                <View style={styles.View_51_455} />
              </View>
              <View style={styles.View_51_456}>
                <Text style={styles.Text_51_456}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_51_457}
              />
            </View>
          </View>
          <View style={styles.View_51_459}>
            <Text style={styles.Text_51_459}>Gift3d</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fc/30b4/e33faf5900695e192ca51a27201f28fa"
        }}
        style={styles.ImageBackground_51_460}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_51_32: {
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
  View_51_33: {
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
  View_51_34: {
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
  View_51_35: {
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
  View_51_36: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_36: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_37: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_51_37: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_38: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_51_38: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_39: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_51_39: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_40: {
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
  View_51_41: {
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
  View_51_42: {
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
  ImageBackground_51_43: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_51_46: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_51_50: {
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
  View_51_230: {
    width: wp("77.08333333333334%"),
    height: 1956,
    minHeight: 1956,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 216,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_231: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_232: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_233: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_234: {
    width: wp("18.75%"),
    minWidth: wp("18.75%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_235: {
    width: wp("18.75%"),
    minWidth: wp("18.75%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_235: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_236: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_236: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_237: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_238: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1
  },
  View_51_239: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_240: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_240: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_241: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_241: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_273: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 662,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_274: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_275: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_276: {
    width: wp("18.75%"),
    minWidth: wp("18.75%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_277: {
    width: wp("18.75%"),
    minWidth: wp("18.75%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_277: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_278: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_278: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_279: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_280: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1
  },
  View_51_281: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_282: {
    width: wp("17.15277777777778%"),
    minWidth: wp("17.15277777777778%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_282: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_283: {
    width: wp("11.319444444444445%"),
    minWidth: wp("11.319444444444445%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_283: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_242: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1324,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_243: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_244: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_245: {
    width: wp("18.958333333333332%"),
    minWidth: wp("18.958333333333332%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_246: {
    width: wp("18.958333333333332%"),
    minWidth: wp("18.958333333333332%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_246: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_247: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_247: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_248: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 632,
    minHeight: 632,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_249: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 540,
    minHeight: 540,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_250: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 564,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_251: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_251: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_252: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 44
  },
  Text_51_252: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_284: {
    width: wp("10.13888888888889%"),
    minWidth: wp("10.13888888888889%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: 157
  },
  Text_51_284: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_385: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.166666666666666%"),
    top: 2323
  },
  Text_51_385: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_341: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 2466,
    minHeight: 2466,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 2380,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_342: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 112,
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_343: {
    width: wp("30.833333333333336%"),
    minWidth: wp("30.833333333333336%"),
    minHeight: 112,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_343: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_345: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 2298,
    minHeight: 2298,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 168,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_346: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 703,
    minHeight: 703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_347: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 703,
    minHeight: 703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_348: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 627,
    minHeight: 627,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover",
    borderColor: "rgba(248, 248, 248, 1)",
    borderWidth: 1
  },
  View_51_349: {
    width: wp("7.291666666666667%"),
    minWidth: wp("7.291666666666667%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89583333333334%"),
    top: 659
  },
  Text_51_349: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_350: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 748,
    minHeight: 748,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 775,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_351: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 612,
    minHeight: 612,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 68,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_352: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 538,
    minHeight: 538,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_353: {
    width: wp("7.361111111111112%"),
    minWidth: wp("7.361111111111112%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.069444444444446%"),
    top: 568
  },
  Text_51_353: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_354: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 748,
    minHeight: 748,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_355: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 674,
    minHeight: 674,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_356: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.513888888888893%"),
    top: 704
  },
  Text_51_356: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_357: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 703,
    minHeight: 703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1595,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_358: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 703,
    minHeight: 703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_359: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 627,
    minHeight: 627,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_360: {
    width: wp("14.374999999999998%"),
    minWidth: wp("14.374999999999998%"),
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.354166666666668%"),
    top: 659
  },
  Text_51_360: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_51_392: {
    width: wp("77.08333333333334%"),
    height: 1140,
    minHeight: 1140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 5103,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_393: {
    width: wp("30.90277777777778%"),
    minWidth: wp("30.90277777777778%"),
    minHeight: 168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_393: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_394: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_395: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_396: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_397: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.79166666666668%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_398: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_399: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 295,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_400: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_401: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_402: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666668%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_403: {
    width: wp("22.15277777777778%"),
    minWidth: wp("22.15277777777778%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.875%"),
    top: 0
  },
  View_51_404: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_405: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_406: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375000000000014%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_407: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_408: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 590,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_409: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_410: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_51_411: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666668%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_412: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_413: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_414: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_415: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375000000000014%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_416: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_417: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 885,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_418: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_419: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_420: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.791666666666668%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_421: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_422: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_51_423: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_51_424: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.375000000000014%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_425: {
    width: wp("17.708333333333336%"),
    minWidth: wp("17.708333333333336%"),
    height: 255,
    minHeight: 255,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_51_426: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.875%"),
    top: 6319,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_427: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.7361111111111143%"),
    top: 0
  },
  Text_51_427: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_428: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111114%"),
    top: 0
  },
  View_51_374: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.875%"),
    top: 4922,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_375: {
    width: wp("7.430555555555555%"),
    minWidth: wp("7.430555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_375: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_379: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111114%"),
    top: 0
  },
  View_51_386: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.875%"),
    top: 2213,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_387: {
    width: wp("6.597222222222222%"),
    minWidth: wp("6.597222222222222%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: -1
  },
  Text_51_387: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_388: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111114%"),
    top: 0
  },
  View_51_431: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 334,
    minHeight: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0416666666666665%"),
    top: 6449,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_51_433: {
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
  View_51_434: {
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
  View_51_435: {
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
  View_51_436: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_436: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_437: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_51_437: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_438: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_51_438: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_439: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_51_439: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_440: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_440: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_441: {
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
  View_51_442: {
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
  View_51_443: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_443: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_444: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_51_444: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_445: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_51_445: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_446: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_51_446: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_447: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_447: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_51_448: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_51_448: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_449: {
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
  View_51_450: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: -24,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_451: {
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
  View_51_452: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_51_452: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_453: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222854%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_51_454: {
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
  View_51_455: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_51_456: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_51_456: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_51_457: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.7361111111111%")
  },
  View_51_459: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_51_459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  ImageBackground_51_460: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0416666666666665%"),
    top: 6411
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
