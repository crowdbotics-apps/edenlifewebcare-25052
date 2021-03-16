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
      <View style={styles.View_6_95}>
        <View style={styles.View_6_97}>
          <View style={styles.View_6_98}>
            <View style={styles.View_6_99}>
              <View style={styles.View_6_100}>
                <Text style={styles.Text_6_100}>LinkedIn</Text>
              </View>
              <View style={styles.View_6_101}>
                <Text style={styles.Text_6_101}>Facebook</Text>
              </View>
              <View style={styles.View_6_102}>
                <Text style={styles.Text_6_102}>Twitter</Text>
              </View>
              <View style={styles.View_6_103}>
                <Text style={styles.Text_6_103}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_6_104}>
              <Text style={styles.Text_6_104}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_6_111}>
            <View style={styles.View_6_112}>
              <View style={styles.View_6_113}>
                <Text style={styles.Text_6_113}>Services</Text>
              </View>
              <View style={styles.View_6_114}>
                <Text style={styles.Text_6_114}>App</Text>
              </View>
              <View style={styles.View_6_115}>
                <Text style={styles.Text_6_115}>About</Text>
              </View>
              <View style={styles.View_6_116}>
                <Text style={styles.Text_6_116}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_6_117}>
              <Text style={styles.Text_6_117}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_6_118}>
            <Text style={styles.Text_6_118}>All rights reserved. © 2021. </Text>
          </View>
          <View style={styles.View_6_119} />
          <View style={styles.View_6_459} />
          <View style={styles.View_6_121}>
            <View style={styles.View_6_122}>
              <Text style={styles.Text_6_122}>Stay in touch</Text>
            </View>
            <View style={styles.View_6_445}>
              <View style={styles.View_6_451}>
                <View style={styles.View_6_452} />
              </View>
              <View style={styles.View_6_447}>
                <Text style={styles.Text_6_447}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_6_453}
              />
            </View>
          </View>
          <View style={styles.View_11_2}>
            <Text style={styles.Text_11_2}>Gift3d</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_147}>
        <View style={styles.View_6_148}>
          <View style={styles.View_6_149}>
            <Text style={styles.Text_6_149}>
              We help brands &amp; businesses stand out in the ever-changing
              digital landscape.
            </Text>
          </View>
          <View style={styles.View_6_150}>
            <View style={styles.View_6_407}>
              <View style={styles.View_6_408}>
                <Text style={styles.Text_6_408}>Digital Experiences</Text>
              </View>
              <View style={styles.View_6_409} />
              <View style={styles.View_6_414}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_6_415}
                />
              </View>
            </View>
            <View style={styles.View_6_396}>
              <View style={styles.View_6_397}>
                <Text style={styles.Text_6_397}>
                  Positioning &amp; Brand Identity
                </Text>
              </View>
              <View style={styles.View_6_398} />
              <View style={styles.View_6_403}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_6_404}
                />
              </View>
            </View>
            <View style={styles.View_6_385}>
              <View style={styles.View_6_386}>
                <Text style={styles.Text_6_386}>Digital Transformation</Text>
              </View>
              <View style={styles.View_6_387} />
              <View style={styles.View_6_392}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_6_393}
                />
              </View>
            </View>
            <View style={styles.View_6_374}>
              <View style={styles.View_6_375}>
                <Text style={styles.Text_6_375}>Campaigns &amp; Social</Text>
              </View>
              <View style={styles.View_6_376} />
              <View style={styles.View_6_381}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_6_382}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_6_155}>
            <View style={styles.View_6_156} />
            <View style={styles.View_6_157}>
              <Text style={styles.Text_6_157}>Our Services</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_6_483}>
        <View style={styles.View_6_484}>
          <View style={styles.View_6_485}>
            <View style={styles.View_6_486}>
              <Text style={styles.Text_6_486}>01 / 03</Text>
            </View>
            <View style={styles.View_6_487}>
              <Text style={styles.Text_6_487}>
                10 In-Demand Works on Gift3d This Week
              </Text>
            </View>
            <View style={styles.View_6_488}>
              <Text style={styles.Text_6_488}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
              </Text>
            </View>
            <View style={styles.View_6_489}>
              <View style={styles.View_6_490}>
                <Text style={styles.Text_6_490}>Read more</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_6_491}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb99/c9d3/f650080706c1ec476321700ec09e03c6"
              }}
              style={styles.ImageBackground_6_492}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a61/3bb7/8b75a07357bd7495e402856cea0413a7"
              }}
              style={styles.ImageBackground_6_493}
            />
          </View>
        </View>
        <View style={styles.View_6_494}>
          <View style={styles.View_6_495}>
            <View style={styles.View_6_496}>
              <View style={styles.View_6_497}>
                <Text style={styles.Text_6_497}>Shop Art</Text>
              </View>
              <View style={styles.View_6_498}>
                <Text style={styles.Text_6_498}>Explore</Text>
              </View>
              <View style={styles.View_6_499}>
                <Text style={styles.Text_6_499}>About us</Text>
              </View>
              <View style={styles.View_43_2}>
                <Text style={styles.Text_43_2}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_23_3}
            />
          </View>
          <View style={styles.View_6_501}>
            <View style={styles.View_6_502}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_6_503}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_6_506}
            />
          </View>
          <View style={styles.View_23_2} />
        </View>
        <View style={styles.View_6_510}>
          <View style={styles.View_6_511}>
            <View style={styles.View_6_512}>
              <Text style={styles.Text_6_512}>01</Text>
            </View>
            <View style={styles.View_6_513}>
              <View style={styles.View_6_514} />
              <View style={styles.View_6_515} />
              <View style={styles.View_6_516} />
            </View>
            <View style={styles.View_6_517}>
              <Text style={styles.Text_6_517}>03</Text>
            </View>
          </View>
          <View style={styles.View_6_518}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/bc26/93d34ef37d97cb0b4557bd17ec8f3811"
              }}
              style={styles.ImageBackground_6_519}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
              }}
              style={styles.ImageBackground_6_521}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_6_523}>
        <View style={styles.View_6_524}>
          <View style={styles.View_6_525}>
            <Text style={styles.Text_6_525}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ip
            </Text>
          </View>
        </View>
        <View style={styles.View_6_526}>
          <Text style={styles.Text_6_526}>Featured Products</Text>
        </View>
        <View style={styles.View_6_527}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4508/c978/60213ea38315d416ab3eb41bd839b077"
            }}
            style={styles.ImageBackground_6_528}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3893/3bee/2b27573631d41b0781990c198d28623a"
            }}
            style={styles.ImageBackground_6_529}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/cf8e/c3d53661c8d8f9a7d5976c3cb56cea4e"
            }}
            style={styles.ImageBackground_6_530}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8813/0975/25b43ba92c9a10ca3e33e20a399a6142"
            }}
            style={styles.ImageBackground_6_531}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e76/8a84/b07cbeccf79c26a4def9f4cf87428c4c"
            }}
            style={styles.ImageBackground_6_532}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/572c/b1cf68d63601af62a01d47ac3778c29b"
            }}
            style={styles.ImageBackground_6_533}
          />
          <View style={styles.View_6_534}>
            <View style={styles.View_6_535}>
              <Text style={styles.Text_6_535}>Artist Name</Text>
            </View>
            <View style={styles.View_6_536}>
              <Text style={styles.Text_6_536}>Art Title</Text>
            </View>
            <View style={styles.View_6_537}>
              <Text style={styles.Text_6_537}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_538}>
              <Text style={styles.Text_6_538}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_6_539}>
            <View style={styles.View_6_540}>
              <Text style={styles.Text_6_540}>Artist Name</Text>
            </View>
            <View style={styles.View_6_541}>
              <Text style={styles.Text_6_541}>Art Title</Text>
            </View>
            <View style={styles.View_6_542}>
              <Text style={styles.Text_6_542}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_543}>
              <Text style={styles.Text_6_543}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_6_544}>
            <View style={styles.View_6_545}>
              <Text style={styles.Text_6_545}>Artist Name</Text>
            </View>
            <View style={styles.View_6_546}>
              <Text style={styles.Text_6_546}>Art Title</Text>
            </View>
            <View style={styles.View_6_547}>
              <Text style={styles.Text_6_547}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_548}>
              <Text style={styles.Text_6_548}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_6_549}>
            <View style={styles.View_6_550}>
              <Text style={styles.Text_6_550}>Artist Name</Text>
            </View>
            <View style={styles.View_6_551}>
              <Text style={styles.Text_6_551}>Art Title</Text>
            </View>
            <View style={styles.View_6_552}>
              <Text style={styles.Text_6_552}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_553}>
              <Text style={styles.Text_6_553}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_6_554}>
            <View style={styles.View_6_555}>
              <Text style={styles.Text_6_555}>Artist Name</Text>
            </View>
            <View style={styles.View_6_556}>
              <Text style={styles.Text_6_556}>Art Title</Text>
            </View>
            <View style={styles.View_6_557}>
              <Text style={styles.Text_6_557}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_558}>
              <Text style={styles.Text_6_558}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_6_559}>
            <View style={styles.View_6_560}>
              <Text style={styles.Text_6_560}>Artist Name</Text>
            </View>
            <View style={styles.View_6_561}>
              <Text style={styles.Text_6_561}>Art Title</Text>
            </View>
            <View style={styles.View_6_562}>
              <Text style={styles.Text_6_562}>Type of artwork</Text>
            </View>
            <View style={styles.View_6_563}>
              <Text style={styles.Text_6_563}>$ 2,600.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_6_564}>
          <View style={styles.View_6_565}>
            <Text style={styles.Text_6_565}>Shop All Art</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_6_566}>
        <View style={styles.View_6_567}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f51/e64e/b93c81645cdf51bec61dcab24288c887"
            }}
            style={styles.ImageBackground_6_568}
          />
          <View style={styles.View_6_569}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
              }}
              style={styles.ImageBackground_6_586}
            />
            <View style={styles.View_6_587}>
              <Text style={styles.Text_6_587}>Continue Reading</Text>
            </View>
          </View>
          <View style={styles.View_6_570}>
            <Text style={styles.Text_6_570}>
              “EACH PAINTING I DO IS AN EXPERIMENT, AN INVESTIGATION INTO THE
              NATURE OF AN IMAGE AND HOW IT FUNCTIONS.”
            </Text>
          </View>
        </View>
        <View style={styles.View_6_571}>
          <Text style={styles.Text_6_571}>
            Rives Granade drapes abstractions over narratives, adding dimension
            to their origins and finishing them with a surface as smooth as
            satin latex. The Los Angeles based artist, who works in a multitude
            of mediums, has a natural ability to turn meaning into myth and vice
            versa, using anything on hand to create a fluid palette while doing
            so. color-swirled tones about his new works in progress.
          </Text>
        </View>
        <View style={styles.View_16_20}>
          <Text style={styles.Text_16_20}>Artist to watch</Text>
        </View>
      </View>
      <View style={styles.View_6_592}>
        <View style={styles.View_6_588}>
          <Text style={styles.Text_6_588}>Shop by Style</Text>
        </View>
        <View style={styles.View_6_590}>
          <Text style={styles.Text_6_590}>
            Landscape Abstract Geometric Black &amp; White Water Minimal
            Portrait
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/432e/c4c9/d51dbd546729093ba9b923eec3b53395"
          }}
          style={styles.ImageBackground_6_589}
        />
      </View>
      <View style={styles.View_6_593}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d42/2802/0b20f231d922521ff76b5d6f010bb5cb"
          }}
          style={styles.ImageBackground_6_598}
        />
        <View style={styles.View_6_599}>
          <Text style={styles.Text_6_599}>Shop by Mediums</Text>
        </View>
        <View style={styles.View_6_600}>
          <Text style={styles.Text_6_600}>
            Photography Paintings Prints &amp; Multiples Drawings Sculptures
            Mixed Media Works on Paper
          </Text>
        </View>
      </View>
      <View style={styles.View_6_601}>
        <View style={styles.View_6_602} />
        <View style={styles.View_6_641}>
          <Text style={styles.Text_6_641}>Who we are?</Text>
        </View>
        <View style={styles.View_6_642}>
          <View style={styles.View_6_643}>
            <Text style={styles.Text_6_643}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ip
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
          }}
          style={styles.ImageBackground_6_644}
        />
        <View style={styles.View_6_645}>
          <Text style={styles.Text_6_645}>View All Stories</Text>
        </View>
      </View>
      <View style={styles.View_6_646}>
        <View style={styles.View_6_688}>
          <View style={styles.View_6_689}>
            <View style={styles.View_6_690}>
              <View style={styles.View_6_691}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0800/3cfd/c557c680391c4eb2a465315efbed4617"
                  }}
                  style={styles.ImageBackground_6_692}
                />
                <View style={styles.View_6_693}>
                  <View style={styles.View_6_694}>
                    <Text style={styles.Text_6_694}>Gift3d App</Text>
                  </View>
                  <View style={styles.View_6_695}>
                    <Text style={styles.Text_6_695}>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusa
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_6_696}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2208/9370/6060f7722828b49e6bef54529e72e95b"
                  }}
                  style={styles.ImageBackground_6_697}
                />
                <View style={styles.View_6_698}>
                  <View style={styles.View_6_699}>
                    <Text style={styles.Text_6_699}>Collab with us</Text>
                  </View>
                  <View style={styles.View_6_700}>
                    <Text style={styles.Text_6_700}>
                      Branding, Product- &amp; Packaging Design that relives the
                      old pharmacy flair.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_6_760}>
                <View style={styles.View_6_761}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16cd/224d/cff0514723ab3a86f299efaa2949afd6"
                    }}
                    style={styles.ImageBackground_6_762}
                  />
                  <View style={styles.View_6_763}>
                    <View style={styles.View_6_764}>
                      <Text style={styles.Text_6_764}>Service</Text>
                    </View>
                    <View style={styles.View_6_765}>
                      <Text style={styles.Text_6_765}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusa
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_6_701}>
              <View style={styles.View_6_702}>
                <Text style={styles.Text_6_702}>SERVICES</Text>
              </View>
              <View style={styles.View_6_703}>
                <View style={styles.View_6_704}>
                  <Text style={styles.Text_6_704}>
                    A world without struggling artist.
                  </Text>
                </View>
              </View>
              <View style={styles.View_6_705}>
                <Text style={styles.Text_6_705}>
                  For the last 10 years, we have partnered with some of the
                  world’s leading organizations to help them strategize, design,
                  develop, launch and grow their digitally-enabled brands and
                  products.
                </Text>
              </View>
              <View style={styles.View_6_749}>
                <View style={styles.View_6_750}>
                  <Text style={styles.Text_6_750}>Learn more</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f6/b4d6/60c9ff3ad5c1f7059ca73152b1d37648"
                  }}
                  style={styles.ImageBackground_6_754}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_6_95: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 334,
    minHeight: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.06944444444444445%"),
    top: 6414,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_97: {
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
  View_6_98: {
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
  View_6_99: {
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
  View_6_100: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_100: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_101: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_6_101: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_102: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_6_102: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_103: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_6_103: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_104: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_104: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_111: {
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
  View_6_112: {
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
  View_6_113: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_113: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_114: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_6_114: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_115: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_6_115: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_116: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_6_116: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_117: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_117: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_118: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_6_118: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_119: {
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
  View_6_459: {
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
  View_6_121: {
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
  View_6_122: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_122: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_445: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_451: {
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
  View_6_452: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_6_447: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_6_447: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_453: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%")
  },
  View_11_2: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_11_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  View_6_147: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 786,
    minHeight: 786,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 1600,
    backgroundColor: "rgba(248, 248, 248, 1)",
    overflow: "hidden"
  },
  View_6_148: {
    width: wp("77.08333333333334%"),
    height: 536,
    minHeight: 536,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_149: {
    width: wp("50.69444444444444%"),
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444446%"),
    top: 68
  },
  Text_6_149: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_150: {
    width: wp("50.69444444444444%"),
    height: 288,
    minHeight: 288,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444446%"),
    top: 248,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_407: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_408: {
    width: wp("15.48611111111111%"),
    minWidth: wp("15.48611111111111%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_6_408: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_409: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 71,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_6_414: {
    width: wp("1.6666667991214328%"),
    minWidth: wp("1.6666667991214328%"),
    height: 24.000001907348633,
    minHeight: 24.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_415: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: 1
  },
  View_6_396: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_397: {
    width: wp("22.63888888888889%"),
    minWidth: wp("22.63888888888889%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_6_397: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_398: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 71,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_6_403: {
    width: wp("1.6666667991214328%"),
    minWidth: wp("1.6666667991214328%"),
    height: 24.000001907348633,
    minHeight: 24.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_404: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: 1
  },
  View_6_385: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 144,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_386: {
    width: wp("17.98611111111111%"),
    minWidth: wp("17.98611111111111%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_6_386: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_387: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 71,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_6_392: {
    width: wp("1.6666667991214328%"),
    minWidth: wp("1.6666667991214328%"),
    height: 24.000001907348633,
    minHeight: 24.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_393: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: 1
  },
  View_6_374: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 72,
    minHeight: 72,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 216,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_6_375: {
    width: wp("16.041666666666668%"),
    minWidth: wp("16.041666666666668%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_6_375: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_376: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 71,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_6_381: {
    width: wp("1.6666667991214328%"),
    minWidth: wp("1.6666667991214328%"),
    height: 24.000001907348633,
    minHeight: 24.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 24,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_382: {
    width: wp("0.8333333995607164%"),
    minWidth: wp("0.8333333995607164%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%"),
    top: 1
  },
  View_6_155: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: 14,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_156: {
    width: wp("2.2222222222222223%"),
    minWidth: wp("2.2222222222222223%"),
    height: 1,
    minHeight: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 6.5,
    backgroundColor: "rgba(26, 26, 31, 1)"
  },
  View_6_157: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444446%"),
    top: 0
  },
  Text_6_157: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_483: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 920,
    minHeight: 920,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_484: {
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
  View_6_485: {
    width: wp("38.125%"),
    minWidth: wp("38.125%"),
    height: 578,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777779%"),
    top: 171,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_486: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_486: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_487: {
    width: wp("38.125%"),
    minWidth: wp("38.125%"),
    minHeight: 228,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46
  },
  Text_6_487: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 56,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_6_488: {
    width: wp("35.41666666666667%"),
    minWidth: wp("35.41666666666667%"),
    minHeight: 192,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 306
  },
  Text_6_488: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_489: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 530,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_6_490: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%"),
    top: 16
  },
  Text_6_490: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_491: {
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
  ImageBackground_6_492: {
    width: wp("30.833333333333336%"),
    height: 628,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_6_493: {
    width: wp("27.77777777777778%"),
    height: 567,
    top: 30.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.91666666666667%"),
    resizeMode: "cover"
  },
  View_6_494: {
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
  View_6_495: {
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
  View_6_496: {
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
  View_6_497: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_497: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_498: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_6_498: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_499: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_6_499: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_43_2: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_43_2: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_3: {
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
  View_6_501: {
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
  View_6_502: {
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
  ImageBackground_6_503: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_6_506: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_23_2: {
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
  View_6_510: {
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
  View_6_511: {
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
  View_6_512: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_512: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_513: {
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
  View_6_514: {
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
  View_6_515: {
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
  View_6_516: {
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
  View_6_517: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222229%"),
    top: 0
  },
  Text_6_517: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_518: {
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
  ImageBackground_6_519: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_521: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_6_523: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1466,
    minHeight: 1466,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 920,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_524: {
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
  View_6_525: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_525: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_526: {
    width: wp("30.34722222222222%"),
    minWidth: wp("30.34722222222222%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.86111111111111%"),
    top: 46
  },
  Text_6_526: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_527: {
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
  ImageBackground_6_528: {
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
  ImageBackground_6_529: {
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
  ImageBackground_6_530: {
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
  ImageBackground_6_531: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: 365,
    minHeight: 365,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 553
  },
  ImageBackground_6_532: {
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
  ImageBackground_6_533: {
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
  View_6_534: {
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
  View_6_535: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_535: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_536: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_6_536: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_537: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_6_537: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_538: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_6_538: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_539: {
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
  View_6_540: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_540: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_541: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_6_541: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_542: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_6_542: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_543: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_6_543: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_544: {
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
  View_6_545: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_545: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_546: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_6_546: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_547: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_6_547: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_548: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_6_548: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_549: {
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
  View_6_550: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_550: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_551: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_6_551: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_552: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_6_552: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_553: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_6_553: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_554: {
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
  View_6_555: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_555: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_556: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_6_556: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_557: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_6_557: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_558: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_6_558: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_559: {
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
  View_6_560: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_560: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_561: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_6_561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_562: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_6_562: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_563: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_6_563: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_564: {
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
  View_6_565: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 16
  },
  Text_6_565: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_566: {
    width: wp("99.93055555555556%"),
    minWidth: wp("99.93055555555556%"),
    height: 943,
    minHeight: 943,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444445%"),
    top: 2386,
    backgroundColor: "rgba(229, 218, 187, 0.27000001072883606)",
    overflow: "hidden"
  },
  View_6_567: {
    width: wp("77.08333333333334%"),
    height: 736,
    minHeight: 736,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333334%"),
    top: 160,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_568: {
    width: wp("42.083333333333336%"),
    minWidth: wp("42.083333333333336%"),
    height: 750,
    minHeight: 750,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.59722222222222%"),
    top: -59
  },
  View_6_569: {
    width: wp("41.736111111111114%"),
    minWidth: wp("41.736111111111114%"),
    height: 714,
    minHeight: 714,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.541666666666668%"),
    top: -2,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_586: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 589,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.375%")
  },
  View_6_587: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 580
  },
  Text_6_587: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_570: {
    width: wp("43.26388888888889%"),
    minWidth: wp("43.26388888888889%"),
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.305555555555557%"),
    top: 0
  },
  Text_6_570: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_571: {
    width: wp("27.916666666666668%"),
    minWidth: wp("27.916666666666668%"),
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: 424
  },
  Text_6_571: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_20: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 17
  },
  Text_16_20: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_592: {
    width: wp("99.93055555555556%"),
    minWidth: wp("99.93055555555556%"),
    height: 679,
    minHeight: 679,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444445%"),
    top: 3384,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_588: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23611111111111%"),
    top: 92
  },
  Text_6_588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_590: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: 412,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23611111111111%"),
    top: 158
  },
  Text_6_590: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_589: {
    width: wp("31.458333333333332%"),
    minWidth: wp("31.458333333333332%"),
    height: 521,
    minHeight: 521,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.472222222222225%"),
    top: 74,
    resizeMode: "cover"
  },
  View_6_593: {
    width: wp("99.93055555555556%"),
    minWidth: wp("99.93055555555556%"),
    height: 618,
    minHeight: 618,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444445%"),
    top: 4063,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_598: {
    width: wp("31.458333333333332%"),
    minWidth: wp("31.458333333333332%"),
    height: 521,
    minHeight: 521,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.58333333333333%"),
    top: 40,
    resizeMode: "cover"
  },
  View_6_599: {
    width: wp("12.083333333333334%"),
    minWidth: wp("12.083333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29166666666667%"),
    top: 40
  },
  Text_6_599: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_600: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: 415,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29166666666667%"),
    top: 106
  },
  Text_6_600: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_601: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 1089,
    minHeight: 1089,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4651,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_602: {
    width: wp("90.06944444444444%"),
    height: 784,
    minHeight: 784,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555555%"),
    top: 153,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_641: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.375%"),
    top: 53
  },
  Text_6_641: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_642: {
    width: wp("50.69444444444444%"),
    height: 71,
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.65277777777778%"),
    top: 109,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_643: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_643: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_644: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 1044,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.52777777777777%")
  },
  View_6_645: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.94444444444444%"),
    top: 1036
  },
  Text_6_645: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_646: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 728,
    minHeight: 728,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444445%"),
    top: 5686,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_688: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 905,
    minHeight: 905,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 37,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_6_689: {
    width: wp("77.08333333333334%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333333%"),
    top: 37,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_690: {
    width: wp("77.08333333333334%"),
    minWidth: wp("77.08333333333334%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.444444444444443%"),
    top: 20,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_691: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_692: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 440,
    minHeight: 440,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_6_693: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 121,
    minHeight: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 464,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_694: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_694: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_695: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_6_695: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_696: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.388888888888886%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_697: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 440,
    minHeight: 440,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_6_698: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 121,
    minHeight: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 464,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_699: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_699: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_700: {
    flexGrow: 1,
    width: wp("24.305555555555554%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_6_700: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_760: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_761: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_6_762: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 440,
    minHeight: 440,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    resizeMode: "cover"
  },
  View_6_763: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 121,
    minHeight: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 464,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_764: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_764: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_765: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_6_765: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_701: {
    width: wp("24.305555555555554%"),
    minWidth: wp("24.305555555555554%"),
    height: 585,
    minHeight: 585,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_702: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_702: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_6_703: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    height: 485,
    minHeight: 485,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777777%"),
    top: 39,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_704: {
    width: wp("13.958333333333334%"),
    minWidth: wp("13.958333333333334%"),
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7986111111111116%"),
    top: 0
  },
  Text_6_704: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_6_705: {
    width: wp("14.23611111111111%"),
    minWidth: wp("14.23611111111111%"),
    minHeight: 227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: 229
  },
  Text_6_705: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_749: {
    width: wp("9.097222222222221%"),
    minWidth: wp("9.097222222222221%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111112%"),
    top: 531,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_750: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_6_750: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_6_754: {
    width: wp("1.1111111111111112%"),
    minWidth: wp("1.1111111111111112%"),
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.041666666666666%"),
    top: 0
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
