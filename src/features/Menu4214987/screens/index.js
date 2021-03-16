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
      <View style={styles.View_48_4}>
        <View style={styles.View_48_6}>
          <View style={styles.View_48_7}>
            <View style={styles.View_48_8}>
              <View style={styles.View_48_9}>
                <Text style={styles.Text_48_9}>LinkedIn</Text>
              </View>
              <View style={styles.View_48_10}>
                <Text style={styles.Text_48_10}>Facebook</Text>
              </View>
              <View style={styles.View_48_11}>
                <Text style={styles.Text_48_11}>Twitter</Text>
              </View>
              <View style={styles.View_48_12}>
                <Text style={styles.Text_48_12}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_48_13}>
              <Text style={styles.Text_48_13}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_48_14}>
            <View style={styles.View_48_15}>
              <View style={styles.View_48_16}>
                <Text style={styles.Text_48_16}>Services</Text>
              </View>
              <View style={styles.View_48_17}>
                <Text style={styles.Text_48_17}>App</Text>
              </View>
              <View style={styles.View_48_18}>
                <Text style={styles.Text_48_18}>About</Text>
              </View>
              <View style={styles.View_48_19}>
                <Text style={styles.Text_48_19}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_48_20}>
              <Text style={styles.Text_48_20}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_48_21}>
            <Text style={styles.Text_48_21}>All rights reserved. © 2021. </Text>
          </View>
          <View style={styles.View_48_22} />
          <View style={styles.View_48_23} />
          <View style={styles.View_48_24}>
            <View style={styles.View_48_25}>
              <Text style={styles.Text_48_25}>Stay in touch</Text>
            </View>
            <View style={styles.View_48_26}>
              <View style={styles.View_48_27}>
                <View style={styles.View_48_28} />
              </View>
              <View style={styles.View_48_29}>
                <Text style={styles.Text_48_29}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_48_30}
              />
            </View>
          </View>
          <View style={styles.View_48_32}>
            <Text style={styles.Text_48_32}>Gift3d</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_33}>
        <View style={styles.View_48_34}>
          <View style={styles.View_48_35}>
            <Text style={styles.Text_48_35}>
              We help brands &amp; businesses stand out in the ever-changing
              digital landscape.
            </Text>
          </View>
          <View style={styles.View_48_36}>
            <View style={styles.View_48_37}>
              <View style={styles.View_48_38}>
                <Text style={styles.Text_48_38}>Digital Experiences</Text>
              </View>
              <View style={styles.View_48_39} />
              <View style={styles.View_48_40}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_48_41}
                />
              </View>
            </View>
            <View style={styles.View_48_44}>
              <View style={styles.View_48_45}>
                <Text style={styles.Text_48_45}>
                  Positioning &amp; Brand Identity
                </Text>
              </View>
              <View style={styles.View_48_46} />
              <View style={styles.View_48_47}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_48_48}
                />
              </View>
            </View>
            <View style={styles.View_48_51}>
              <View style={styles.View_48_52}>
                <Text style={styles.Text_48_52}>Digital Transformation</Text>
              </View>
              <View style={styles.View_48_53} />
              <View style={styles.View_48_54}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_48_55}
                />
              </View>
            </View>
            <View style={styles.View_48_58}>
              <View style={styles.View_48_59}>
                <Text style={styles.Text_48_59}>Campaigns &amp; Social</Text>
              </View>
              <View style={styles.View_48_60} />
              <View style={styles.View_48_61}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f68/929f/ee0ac9922670f591fbec8fe2dabb33c6"
                  }}
                  style={styles.ImageBackground_48_62}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_48_65}>
            <View style={styles.View_48_66} />
            <View style={styles.View_48_67}>
              <Text style={styles.Text_48_67}>Our Services</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_48_68}>
        <View style={styles.View_48_69}>
          <View style={styles.View_48_70}>
            <View style={styles.View_48_71}>
              <Text style={styles.Text_48_71}>01 / 03</Text>
            </View>
            <View style={styles.View_48_74}>
              <View style={styles.View_48_75}>
                <Text style={styles.Text_48_75}>Read more</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_48_76}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb99/c9d3/f650080706c1ec476321700ec09e03c6"
              }}
              style={styles.ImageBackground_48_77}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a61/3bb7/8b75a07357bd7495e402856cea0413a7"
              }}
              style={styles.ImageBackground_48_78}
            />
          </View>
        </View>
        <View style={styles.View_48_79}>
          <View style={styles.View_48_80}>
            <View style={styles.View_48_81}>
              <View style={styles.View_48_82}>
                <Text style={styles.Text_48_82}>Shop Art</Text>
              </View>
              <View style={styles.View_48_83}>
                <Text style={styles.Text_48_83}>Explore</Text>
              </View>
              <View style={styles.View_48_84}>
                <Text style={styles.Text_48_84}>About us</Text>
              </View>
              <View style={styles.View_48_85}>
                <Text style={styles.Text_48_85}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_48_86}
            />
          </View>
          <View style={styles.View_48_87}>
            <View style={styles.View_48_88}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_48_89}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_48_92}
            />
          </View>
          <View style={styles.View_48_96} />
        </View>
        <View style={styles.View_48_97}>
          <View style={styles.View_48_98}>
            <View style={styles.View_48_99}>
              <Text style={styles.Text_48_99}>01</Text>
            </View>
            <View style={styles.View_48_100}>
              <View style={styles.View_48_101} />
              <View style={styles.View_48_102} />
              <View style={styles.View_48_103} />
            </View>
            <View style={styles.View_48_104}>
              <Text style={styles.Text_48_104}>03</Text>
            </View>
          </View>
          <View style={styles.View_48_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d916/bc26/93d34ef37d97cb0b4557bd17ec8f3811"
              }}
              style={styles.ImageBackground_48_106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
              }}
              style={styles.ImageBackground_48_108}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_48_110}>
        <View style={styles.View_48_111}>
          <View style={styles.View_48_112}>
            <Text style={styles.Text_48_112}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ip
            </Text>
          </View>
        </View>
        <View style={styles.View_48_113}>
          <Text style={styles.Text_48_113}>Featured Products</Text>
        </View>
        <View style={styles.View_48_114}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4508/c978/60213ea38315d416ab3eb41bd839b077"
            }}
            style={styles.ImageBackground_48_115}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3893/3bee/2b27573631d41b0781990c198d28623a"
            }}
            style={styles.ImageBackground_48_116}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/cf8e/c3d53661c8d8f9a7d5976c3cb56cea4e"
            }}
            style={styles.ImageBackground_48_117}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8813/0975/25b43ba92c9a10ca3e33e20a399a6142"
            }}
            style={styles.ImageBackground_48_118}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e76/8a84/b07cbeccf79c26a4def9f4cf87428c4c"
            }}
            style={styles.ImageBackground_48_119}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/572c/b1cf68d63601af62a01d47ac3778c29b"
            }}
            style={styles.ImageBackground_48_120}
          />
          <View style={styles.View_48_121}>
            <View style={styles.View_48_122}>
              <Text style={styles.Text_48_122}>Artist Name</Text>
            </View>
            <View style={styles.View_48_123}>
              <Text style={styles.Text_48_123}>Art Title</Text>
            </View>
            <View style={styles.View_48_124}>
              <Text style={styles.Text_48_124}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_125}>
              <Text style={styles.Text_48_125}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_126}>
            <View style={styles.View_48_127}>
              <Text style={styles.Text_48_127}>Artist Name</Text>
            </View>
            <View style={styles.View_48_128}>
              <Text style={styles.Text_48_128}>Art Title</Text>
            </View>
            <View style={styles.View_48_129}>
              <Text style={styles.Text_48_129}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_130}>
              <Text style={styles.Text_48_130}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_131}>
            <View style={styles.View_48_132}>
              <Text style={styles.Text_48_132}>Artist Name</Text>
            </View>
            <View style={styles.View_48_133}>
              <Text style={styles.Text_48_133}>Art Title</Text>
            </View>
            <View style={styles.View_48_134}>
              <Text style={styles.Text_48_134}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_135}>
              <Text style={styles.Text_48_135}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_136}>
            <View style={styles.View_48_137}>
              <Text style={styles.Text_48_137}>Artist Name</Text>
            </View>
            <View style={styles.View_48_138}>
              <Text style={styles.Text_48_138}>Art Title</Text>
            </View>
            <View style={styles.View_48_139}>
              <Text style={styles.Text_48_139}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_140}>
              <Text style={styles.Text_48_140}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_141}>
            <View style={styles.View_48_142}>
              <Text style={styles.Text_48_142}>Artist Name</Text>
            </View>
            <View style={styles.View_48_143}>
              <Text style={styles.Text_48_143}>Art Title</Text>
            </View>
            <View style={styles.View_48_144}>
              <Text style={styles.Text_48_144}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_145}>
              <Text style={styles.Text_48_145}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_146}>
            <View style={styles.View_48_147}>
              <Text style={styles.Text_48_147}>Artist Name</Text>
            </View>
            <View style={styles.View_48_148}>
              <Text style={styles.Text_48_148}>Art Title</Text>
            </View>
            <View style={styles.View_48_149}>
              <Text style={styles.Text_48_149}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_150}>
              <Text style={styles.Text_48_150}>$ 2,600.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_48_151}>
          <View style={styles.View_48_152}>
            <Text style={styles.Text_48_152}>Shop All Art</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_505}>
        <View style={styles.View_48_506}>
          <View style={styles.View_48_507}>
            <Text style={styles.Text_48_507}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ip
            </Text>
          </View>
        </View>
        <View style={styles.View_48_508}>
          <Text style={styles.Text_48_508}>Featured Products</Text>
        </View>
        <View style={styles.View_48_509}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4508/c978/60213ea38315d416ab3eb41bd839b077"
            }}
            style={styles.ImageBackground_48_510}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3893/3bee/2b27573631d41b0781990c198d28623a"
            }}
            style={styles.ImageBackground_48_511}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/cf8e/c3d53661c8d8f9a7d5976c3cb56cea4e"
            }}
            style={styles.ImageBackground_48_512}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8813/0975/25b43ba92c9a10ca3e33e20a399a6142"
            }}
            style={styles.ImageBackground_48_513}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e76/8a84/b07cbeccf79c26a4def9f4cf87428c4c"
            }}
            style={styles.ImageBackground_48_514}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8df/572c/b1cf68d63601af62a01d47ac3778c29b"
            }}
            style={styles.ImageBackground_48_515}
          />
          <View style={styles.View_48_516}>
            <View style={styles.View_48_517}>
              <Text style={styles.Text_48_517}>Artist Name</Text>
            </View>
            <View style={styles.View_48_518}>
              <Text style={styles.Text_48_518}>Art Title</Text>
            </View>
            <View style={styles.View_48_519}>
              <Text style={styles.Text_48_519}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_520}>
              <Text style={styles.Text_48_520}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_521}>
            <View style={styles.View_48_522}>
              <Text style={styles.Text_48_522}>Artist Name</Text>
            </View>
            <View style={styles.View_48_523}>
              <Text style={styles.Text_48_523}>Art Title</Text>
            </View>
            <View style={styles.View_48_524}>
              <Text style={styles.Text_48_524}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_525}>
              <Text style={styles.Text_48_525}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_526}>
            <View style={styles.View_48_527}>
              <Text style={styles.Text_48_527}>Artist Name</Text>
            </View>
            <View style={styles.View_48_528}>
              <Text style={styles.Text_48_528}>Art Title</Text>
            </View>
            <View style={styles.View_48_529}>
              <Text style={styles.Text_48_529}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_530}>
              <Text style={styles.Text_48_530}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_531}>
            <View style={styles.View_48_532}>
              <Text style={styles.Text_48_532}>Artist Name</Text>
            </View>
            <View style={styles.View_48_533}>
              <Text style={styles.Text_48_533}>Art Title</Text>
            </View>
            <View style={styles.View_48_534}>
              <Text style={styles.Text_48_534}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_535}>
              <Text style={styles.Text_48_535}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_536}>
            <View style={styles.View_48_537}>
              <Text style={styles.Text_48_537}>Artist Name</Text>
            </View>
            <View style={styles.View_48_538}>
              <Text style={styles.Text_48_538}>Art Title</Text>
            </View>
            <View style={styles.View_48_539}>
              <Text style={styles.Text_48_539}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_540}>
              <Text style={styles.Text_48_540}>$ 2,600.00</Text>
            </View>
          </View>
          <View style={styles.View_48_541}>
            <View style={styles.View_48_542}>
              <Text style={styles.Text_48_542}>Artist Name</Text>
            </View>
            <View style={styles.View_48_543}>
              <Text style={styles.Text_48_543}>Art Title</Text>
            </View>
            <View style={styles.View_48_544}>
              <Text style={styles.Text_48_544}>Type of artwork</Text>
            </View>
            <View style={styles.View_48_545}>
              <Text style={styles.Text_48_545}>$ 2,600.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_48_546}>
          <View style={styles.View_48_547}>
            <Text style={styles.Text_48_547}>Shop All Art</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_214}>
        <View style={styles.View_48_277}>
          <Text style={styles.Text_48_277}>Shop Art</Text>
        </View>
        <View style={styles.View_48_278}>
          <Text style={styles.Text_48_278}>Style</Text>
        </View>
        <View style={styles.View_48_279}>
          <Text style={styles.Text_48_279}>Subject</Text>
        </View>
        <View style={styles.View_48_284}>
          <Text style={styles.Text_48_284}>Medium</Text>
        </View>
        <View style={styles.View_48_285}>
          <Text style={styles.Text_48_285}>Collection</Text>
        </View>
        <View style={styles.View_48_287}>
          <Text style={styles.Text_48_287}>
            Item Style Item Style Item Style Item Style
          </Text>
        </View>
        <View style={styles.View_48_288}>
          <Text style={styles.Text_48_288}>
            Item Subject Item Subject Item Subject Item Subject Item Subject
          </Text>
        </View>
        <View style={styles.View_48_289}>
          <Text style={styles.Text_48_289}>
            Medium Type Medium Type Medium Type
          </Text>
        </View>
        <View style={styles.View_48_290}>
          <Text style={styles.Text_48_290}>
            Curated Collection Curated Collection Curated Colleciton
          </Text>
        </View>
      </View>
      <View style={styles.View_48_153}>
        <View style={styles.View_48_154}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f51/e64e/b93c81645cdf51bec61dcab24288c887"
            }}
            style={styles.ImageBackground_48_155}
          />
          <View style={styles.View_48_156}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
              }}
              style={styles.ImageBackground_48_157}
            />
            <View style={styles.View_48_158}>
              <Text style={styles.Text_48_158}>Continue Reading</Text>
            </View>
          </View>
          <View style={styles.View_48_159}>
            <Text style={styles.Text_48_159}>
              “EACH PAINTING I DO IS AN EXPERIMENT, AN INVESTIGATION INTO THE
              NATURE OF AN IMAGE AND HOW IT FUNCTIONS.”
            </Text>
          </View>
        </View>
        <View style={styles.View_48_160}>
          <Text style={styles.Text_48_160}>
            Rives Granade drapes abstractions over narratives, adding dimension
            to their origins and finishing them with a surface as smooth as
            satin latex. The Los Angeles based artist, who works in a multitude
            of mediums, has a natural ability to turn meaning into myth and vice
            versa, using anything on hand to create a fluid palette while doing
            so. color-swirled tones about his new works in progress.
          </Text>
        </View>
        <View style={styles.View_48_161}>
          <Text style={styles.Text_48_161}>Artist to watch</Text>
        </View>
      </View>
      <View style={styles.View_48_162}>
        <View style={styles.View_48_163}>
          <Text style={styles.Text_48_163}>Shop by Style</Text>
        </View>
        <View style={styles.View_48_164}>
          <Text style={styles.Text_48_164}>
            Landscape Abstract Geometric Black &amp; White Water Minimal
            Portrait
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/432e/c4c9/d51dbd546729093ba9b923eec3b53395"
          }}
          style={styles.ImageBackground_48_165}
        />
      </View>
      <View style={styles.View_48_166}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d42/2802/0b20f231d922521ff76b5d6f010bb5cb"
          }}
          style={styles.ImageBackground_48_167}
        />
        <View style={styles.View_48_168}>
          <Text style={styles.Text_48_168}>Shop by Mediums</Text>
        </View>
        <View style={styles.View_48_169}>
          <Text style={styles.Text_48_169}>
            Photography Paintings Prints &amp; Multiples Drawings Sculptures
            Mixed Media Works on Paper
          </Text>
        </View>
      </View>
      <View style={styles.View_48_170}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399f/e341/fb84f352fa11236dfc64410bba73811b"
          }}
          style={styles.ImageBackground_48_175}
        />
        <View style={styles.View_48_176}>
          <Text style={styles.Text_48_176}>View All Stories</Text>
        </View>
        <View style={styles.View_48_801}>
          <Text style={styles.Text_48_801}>Who we are?</Text>
        </View>
        <View style={styles.View_48_802}>
          <View style={styles.View_48_803}>
            <Text style={styles.Text_48_803}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ip
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_177}>
        <View style={styles.View_48_178}>
          <View style={styles.View_48_179}>
            <View style={styles.View_48_180}>
              <View style={styles.View_48_181}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0800/3cfd/c557c680391c4eb2a465315efbed4617"
                  }}
                  style={styles.ImageBackground_48_182}
                />
                <View style={styles.View_48_183}>
                  <View style={styles.View_48_184}>
                    <Text style={styles.Text_48_184}>Gift3d App</Text>
                  </View>
                  <View style={styles.View_48_185}>
                    <Text style={styles.Text_48_185}>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusa
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_48_186}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2208/9370/6060f7722828b49e6bef54529e72e95b"
                  }}
                  style={styles.ImageBackground_48_187}
                />
                <View style={styles.View_48_188}>
                  <View style={styles.View_48_189}>
                    <Text style={styles.Text_48_189}>Collab with us</Text>
                  </View>
                  <View style={styles.View_48_190}>
                    <Text style={styles.Text_48_190}>
                      Branding, Product- &amp; Packaging Design that relives the
                      old pharmacy flair.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_48_191}>
                <View style={styles.View_48_192}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16cd/224d/cff0514723ab3a86f299efaa2949afd6"
                    }}
                    style={styles.ImageBackground_48_193}
                  />
                  <View style={styles.View_48_194}>
                    <View style={styles.View_48_195}>
                      <Text style={styles.Text_48_195}>Service</Text>
                    </View>
                    <View style={styles.View_48_196}>
                      <Text style={styles.Text_48_196}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusa
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_48_197}>
              <View style={styles.View_48_198}>
                <Text style={styles.Text_48_198}>SERVICES</Text>
              </View>
              <View style={styles.View_48_199}>
                <View style={styles.View_48_200}>
                  <Text style={styles.Text_48_200}>
                    A world without struggling artist.
                  </Text>
                </View>
              </View>
              <View style={styles.View_48_201}>
                <Text style={styles.Text_48_201}>
                  For the last 10 years, we have partnered with some of the
                  world’s leading organizations to help them strategize, design,
                  develop, launch and grow their digitally-enabled brands and
                  products.
                </Text>
              </View>
              <View style={styles.View_48_202}>
                <View style={styles.View_48_203}>
                  <Text style={styles.Text_48_203}>Learn more</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26f6/b4d6/60c9ff3ad5c1f7059ca73152b1d37648"
                  }}
                  style={styles.ImageBackground_48_204}
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
  View_48_4: {
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
  View_48_6: {
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
  View_48_7: {
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
  View_48_8: {
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
  View_48_9: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_9: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_10: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_10: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_11: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_11: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_12: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_12: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_13: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_13: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_14: {
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
  View_48_15: {
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
  View_48_16: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_16: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_17: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_17: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_18: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_18: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_19: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_19: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_20: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_20: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_21: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_21: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_22: {
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
  View_48_23: {
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
  View_48_24: {
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
  View_48_25: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_25: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_26: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_27: {
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
  View_48_28: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_48_29: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_30: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%")
  },
  View_48_32: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_48_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  View_48_33: {
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
  View_48_34: {
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
  View_48_35: {
    width: wp("50.69444444444444%"),
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444446%"),
    top: 68
  },
  Text_48_35: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_48_36: {
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
  View_48_37: {
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
  View_48_38: {
    width: wp("15.48611111111111%"),
    minWidth: wp("15.48611111111111%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_38: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_39: {
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
  View_48_40: {
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
  ImageBackground_48_41: {
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
  View_48_44: {
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
  View_48_45: {
    width: wp("22.63888888888889%"),
    minWidth: wp("22.63888888888889%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_45: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_46: {
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
  View_48_47: {
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
  ImageBackground_48_48: {
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
  View_48_51: {
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
  View_48_52: {
    width: wp("17.98611111111111%"),
    minWidth: wp("17.98611111111111%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_52: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_53: {
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
  View_48_54: {
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
  ImageBackground_48_55: {
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
  View_48_58: {
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
  View_48_59: {
    width: wp("16.041666666666668%"),
    minWidth: wp("16.041666666666668%"),
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_59: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_60: {
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
  View_48_61: {
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
  ImageBackground_48_62: {
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
  View_48_65: {
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
  View_48_66: {
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
  View_48_67: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.194444444444446%"),
    top: 0
  },
  Text_48_67: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_68: {
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
  View_48_69: {
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
  View_48_70: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: 94,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.527777777777779%"),
    top: 413,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_71: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_71: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_74: {
    width: wp("10.76388888888889%"),
    minWidth: wp("10.76388888888889%"),
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 46,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_48_75: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.777777777777777%"),
    top: 16
  },
  Text_48_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_76: {
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
  ImageBackground_48_77: {
    width: wp("30.833333333333336%"),
    height: 628,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_48_78: {
    width: wp("27.77777777777778%"),
    height: 567,
    top: 30.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.91666666666667%"),
    resizeMode: "cover"
  },
  View_48_79: {
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
  View_48_80: {
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
  View_48_81: {
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
  View_48_82: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_82: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_83: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_48_83: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_84: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_48_84: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_85: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_48_85: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_86: {
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
  View_48_87: {
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
  View_48_88: {
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
  ImageBackground_48_89: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_48_92: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_48_96: {
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
  View_48_97: {
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
  View_48_98: {
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
  View_48_99: {
    width: wp("0.9027777777777777%"),
    minWidth: wp("0.9027777777777777%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_99: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_100: {
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
  View_48_101: {
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
  View_48_102: {
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
  View_48_103: {
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
  View_48_104: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222229%"),
    top: 0
  },
  Text_48_104: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_105: {
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
  ImageBackground_48_106: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_48_108: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_48_110: {
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
  View_48_111: {
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
  View_48_112: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_112: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_113: {
    width: wp("30.34722222222222%"),
    minWidth: wp("30.34722222222222%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.86111111111111%"),
    top: 46
  },
  Text_48_113: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_114: {
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
  ImageBackground_48_115: {
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
  ImageBackground_48_116: {
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
  ImageBackground_48_117: {
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
  ImageBackground_48_118: {
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
  ImageBackground_48_119: {
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
  ImageBackground_48_120: {
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
  View_48_121: {
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
  View_48_122: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_123: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_48_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_124: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_48_124: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_125: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_48_125: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_126: {
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
  View_48_127: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_128: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_129: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_129: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_130: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_48_130: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_131: {
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
  View_48_132: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_133: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_134: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_134: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_135: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_48_135: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_136: {
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
  View_48_137: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_138: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_48_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_139: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_48_139: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_140: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_48_140: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_141: {
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
  View_48_142: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_143: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_144: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_144: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_145: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_48_145: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_146: {
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
  View_48_147: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_148: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_149: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_149: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_150: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_48_150: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_151: {
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
  View_48_152: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 16
  },
  Text_48_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_505: {
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
  View_48_506: {
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
  View_48_507: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_507: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_508: {
    width: wp("30.34722222222222%"),
    minWidth: wp("30.34722222222222%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.86111111111111%"),
    top: 46
  },
  Text_48_508: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_509: {
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
  ImageBackground_48_510: {
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
  ImageBackground_48_511: {
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
  ImageBackground_48_512: {
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
  ImageBackground_48_513: {
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
  ImageBackground_48_514: {
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
  ImageBackground_48_515: {
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
  View_48_516: {
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
  View_48_517: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_518: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_48_518: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_519: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_48_519: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_520: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_48_520: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_521: {
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
  View_48_522: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_523: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_523: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_524: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_524: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_525: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_48_525: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_526: {
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
  View_48_527: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_527: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_528: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_528: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_529: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_529: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_530: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_48_530: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_531: {
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
  View_48_532: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_533: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 36
  },
  Text_48_533: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_534: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444375%"),
    top: 74
  },
  Text_48_534: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_535: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333332%"),
    top: 0
  },
  Text_48_535: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_536: {
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
  View_48_537: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_537: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_538: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_538: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_539: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_539: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_540: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.708333333333336%"),
    top: 0
  },
  Text_48_540: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_541: {
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
  View_48_542: {
    width: wp("8.194444444444445%"),
    minWidth: wp("8.194444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_543: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_543: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_544: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 74
  },
  Text_48_544: {
    color: "rgba(100, 98, 98, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_545: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.70833333333333%"),
    top: 0
  },
  Text_48_545: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_546: {
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
  View_48_547: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777715%"),
    top: 16
  },
  Text_48_547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_214: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 418,
    minHeight: 418,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 89,
    backgroundColor: "rgba(26, 26, 31, 1)",
    overflow: "hidden"
  },
  View_48_277: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333334%"),
    top: 45
  },
  Text_48_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_278: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 106
  },
  Text_48_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_279: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: 106
  },
  Text_48_279: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_284: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.916666666666664%"),
    top: 106
  },
  Text_48_284: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_285: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.583333333333336%"),
    top: 106
  },
  Text_48_285: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_287: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    minHeight: 128,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333332%"),
    top: 148
  },
  Text_48_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_288: {
    width: wp("7.916666666666666%"),
    minWidth: wp("7.916666666666666%"),
    minHeight: 160,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.38888888888889%"),
    top: 148
  },
  Text_48_288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_289: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: 128,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.916666666666664%"),
    top: 148
  },
  Text_48_289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_290: {
    width: wp("11.458333333333332%"),
    minWidth: wp("11.458333333333332%"),
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.583333333333336%"),
    top: 148
  },
  Text_48_290: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_153: {
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
  View_48_154: {
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
  ImageBackground_48_155: {
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
  View_48_156: {
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
  ImageBackground_48_157: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 589,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.375%")
  },
  View_48_158: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 580
  },
  Text_48_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_159: {
    width: wp("43.26388888888889%"),
    minWidth: wp("43.26388888888889%"),
    minHeight: 127,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.305555555555557%"),
    top: 0
  },
  Text_48_159: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_160: {
    width: wp("27.916666666666668%"),
    minWidth: wp("27.916666666666668%"),
    minHeight: 286,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: 424
  },
  Text_48_160: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_161: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666667%"),
    top: 17
  },
  Text_48_161: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_162: {
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
  View_48_163: {
    width: wp("9.375%"),
    minWidth: wp("9.375%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23611111111111%"),
    top: 92
  },
  Text_48_163: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_164: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: 412,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.23611111111111%"),
    top: 158
  },
  Text_48_164: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_165: {
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
  View_48_166: {
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
  ImageBackground_48_167: {
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
  View_48_168: {
    width: wp("12.083333333333334%"),
    minWidth: wp("12.083333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29166666666667%"),
    top: 40
  },
  Text_48_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_169: {
    width: wp("13.88888888888889%"),
    minWidth: wp("13.88888888888889%"),
    minHeight: 415,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.29166666666667%"),
    top: 106
  },
  Text_48_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_170: {
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
  ImageBackground_48_175: {
    width: wp("2.7083333333333335%"),
    height: 11,
    top: 1044,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.52777777777777%")
  },
  View_48_176: {
    width: wp("8.472222222222223%"),
    minWidth: wp("8.472222222222223%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.94444444444444%"),
    top: 1036
  },
  Text_48_176: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_801: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.375%"),
    top: 53
  },
  Text_48_801: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_802: {
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
  View_48_803: {
    width: wp("50.69444444444444%"),
    minWidth: wp("50.69444444444444%"),
    minHeight: 71,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_803: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_177: {
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
  View_48_178: {
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
  View_48_179: {
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
  View_48_180: {
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
  View_48_181: {
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
  ImageBackground_48_182: {
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
  View_48_183: {
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
  View_48_184: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_184: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_185: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_185: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_186: {
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
  ImageBackground_48_187: {
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
  View_48_188: {
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
  View_48_189: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_189: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_190: {
    flexGrow: 1,
    width: wp("24.305555555555554%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_190: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_191: {
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
  View_48_192: {
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
  ImageBackground_48_193: {
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
  View_48_194: {
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
  View_48_195: {
    width: wp("24.305555555555554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_195: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_196: {
    flexGrow: 1,
    width: wp("23.333333333333332%"),
    top: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_196: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_197: {
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
  View_48_198: {
    width: wp("5.069444444444445%"),
    minWidth: wp("5.069444444444445%"),
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_198: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_199: {
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
  View_48_200: {
    width: wp("13.958333333333334%"),
    minWidth: wp("13.958333333333334%"),
    minHeight: 100,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7986111111111116%"),
    top: 0
  },
  Text_48_200: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_48_201: {
    width: wp("14.23611111111111%"),
    minWidth: wp("14.23611111111111%"),
    minHeight: 227,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3194444444444446%"),
    top: 229
  },
  Text_48_201: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_202: {
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
  View_48_203: {
    width: wp("5.486111111111111%"),
    minWidth: wp("5.486111111111111%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_203: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_204: {
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
