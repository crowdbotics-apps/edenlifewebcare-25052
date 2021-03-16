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
      <View style={styles.View_48_292}>
        <View style={styles.View_48_294}>
          <View style={styles.View_48_295}>
            <View style={styles.View_48_296}>
              <View style={styles.View_48_297}>
                <Text style={styles.Text_48_297}>LinkedIn</Text>
              </View>
              <View style={styles.View_48_298}>
                <Text style={styles.Text_48_298}>Facebook</Text>
              </View>
              <View style={styles.View_48_299}>
                <Text style={styles.Text_48_299}>Twitter</Text>
              </View>
              <View style={styles.View_48_300}>
                <Text style={styles.Text_48_300}>Instagram</Text>
              </View>
            </View>
            <View style={styles.View_48_301}>
              <Text style={styles.Text_48_301}>Connect</Text>
            </View>
          </View>
          <View style={styles.View_48_302}>
            <View style={styles.View_48_303}>
              <View style={styles.View_48_304}>
                <Text style={styles.Text_48_304}>Services</Text>
              </View>
              <View style={styles.View_48_305}>
                <Text style={styles.Text_48_305}>App</Text>
              </View>
              <View style={styles.View_48_306}>
                <Text style={styles.Text_48_306}>About</Text>
              </View>
              <View style={styles.View_48_307}>
                <Text style={styles.Text_48_307}>Contact</Text>
              </View>
            </View>
            <View style={styles.View_48_308}>
              <Text style={styles.Text_48_308}>Menu</Text>
            </View>
          </View>
          <View style={styles.View_48_309}>
            <Text style={styles.Text_48_309}>
              All rights reserved. © 2021.{" "}
            </Text>
          </View>
          <View style={styles.View_48_310} />
          <View style={styles.View_48_311} />
          <View style={styles.View_48_312}>
            <View style={styles.View_48_313}>
              <Text style={styles.Text_48_313}>Stay in touch</Text>
            </View>
            <View style={styles.View_48_314}>
              <View style={styles.View_48_315}>
                <View style={styles.View_48_316} />
              </View>
              <View style={styles.View_48_317}>
                <Text style={styles.Text_48_317}>Email Address</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fe2/765d/03ebf06b154dc8883e4033fe6e0059b2"
                }}
                style={styles.ImageBackground_48_318}
              />
            </View>
          </View>
          <View style={styles.View_48_320}>
            <Text style={styles.Text_48_320}>Gift3d</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_356}>
        <View style={styles.View_48_357}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719f/5d74/58ed6ff33a839187a8e2842e00dc5baa"
            }}
            style={styles.ImageBackground_48_503}
          />
          <View style={styles.View_48_504}>
            <Text style={styles.Text_48_504}>Shop All Art</Text>
          </View>
        </View>
        <View style={styles.View_48_365}>
          <View style={styles.View_48_366}>
            <View style={styles.View_48_367}>
              <View style={styles.View_48_368}>
                <Text style={styles.Text_48_368}>Shop Art</Text>
              </View>
              <View style={styles.View_48_369}>
                <Text style={styles.Text_48_369}>Explore</Text>
              </View>
              <View style={styles.View_48_370}>
                <Text style={styles.Text_48_370}>About us</Text>
              </View>
              <View style={styles.View_48_371}>
                <Text style={styles.Text_48_371}>Gift3d App</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a34/3e88/881deedcfcf025bfce3ab95f83e74b1b"
              }}
              style={styles.ImageBackground_48_372}
            />
          </View>
          <View style={styles.View_48_373}>
            <View style={styles.View_48_374}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/100b/ce5f/264d6eb634f12884eb9acbc8b0402d9e"
                }}
                style={styles.ImageBackground_48_375}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bba3/a48a/310eca3bc4528b0b43ee7c4e485da166"
              }}
              style={styles.ImageBackground_48_378}
            />
          </View>
          <View style={styles.View_48_382} />
        </View>
      </View>
      <View style={styles.View_48_548}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19aa/d815/6f38cfab92ffb6a5878eceee03ce9042"
          }}
          style={styles.ImageBackground_48_602}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/14c2/29993d2ff6d1e49c6c94286af76313d6"
          }}
          style={styles.ImageBackground_48_603}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c11c/3c17/1d15aa7f6f860e8f5d37393ac257aeb9"
          }}
          style={styles.ImageBackground_48_604}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/2c60/afc0de329bae338327f1abec76368472"
          }}
          style={styles.ImageBackground_48_605}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fa/c407/220c2254dae30a754ca0f79cdcb4f2bc"
          }}
          style={styles.ImageBackground_48_606}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7097/a395/30340a9b7a34e77754b65cec8960295c"
          }}
          style={styles.ImageBackground_48_607}
        />
        <View style={styles.View_48_608}>
          <View style={styles.View_48_609}>
            <Text style={styles.Text_48_609}>Art Title</Text>
          </View>
          <View style={styles.View_48_610}>
            <Text style={styles.Text_48_610}>Artist Name</Text>
          </View>
          <View style={styles.View_48_611}>
            <Text style={styles.Text_48_611}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_612}>
          <View style={styles.View_48_613}>
            <Text style={styles.Text_48_613}>Art Title</Text>
          </View>
          <View style={styles.View_48_614}>
            <Text style={styles.Text_48_614}>Artist Name</Text>
          </View>
          <View style={styles.View_48_615}>
            <Text style={styles.Text_48_615}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_616}>
          <View style={styles.View_48_617}>
            <Text style={styles.Text_48_617}>Art Title</Text>
          </View>
          <View style={styles.View_48_618}>
            <Text style={styles.Text_48_618}>Artist Name</Text>
          </View>
          <View style={styles.View_48_619}>
            <Text style={styles.Text_48_619}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_620}>
          <View style={styles.View_48_621}>
            <Text style={styles.Text_48_621}>Art Title</Text>
          </View>
          <View style={styles.View_48_622}>
            <Text style={styles.Text_48_622}>Artist Name</Text>
          </View>
          <View style={styles.View_48_623}>
            <Text style={styles.Text_48_623}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_624}>
          <View style={styles.View_48_625}>
            <Text style={styles.Text_48_625}>Art Title</Text>
          </View>
          <View style={styles.View_48_626}>
            <Text style={styles.Text_48_626}>Artist Name</Text>
          </View>
          <View style={styles.View_48_627}>
            <Text style={styles.Text_48_627}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_628}>
          <View style={styles.View_48_629}>
            <Text style={styles.Text_48_629}>Art Title</Text>
          </View>
          <View style={styles.View_48_630}>
            <Text style={styles.Text_48_630}>Artist Name</Text>
          </View>
          <View style={styles.View_48_631}>
            <Text style={styles.Text_48_631}>$ 2,600.00</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19aa/d815/6f38cfab92ffb6a5878eceee03ce9042"
          }}
          style={styles.ImageBackground_48_632}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/14c2/29993d2ff6d1e49c6c94286af76313d6"
          }}
          style={styles.ImageBackground_48_633}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c11c/3c17/1d15aa7f6f860e8f5d37393ac257aeb9"
          }}
          style={styles.ImageBackground_48_634}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/2c60/afc0de329bae338327f1abec76368472"
          }}
          style={styles.ImageBackground_48_635}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fa/c407/220c2254dae30a754ca0f79cdcb4f2bc"
          }}
          style={styles.ImageBackground_48_636}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7097/a395/30340a9b7a34e77754b65cec8960295c"
          }}
          style={styles.ImageBackground_48_637}
        />
        <View style={styles.View_48_638}>
          <View style={styles.View_48_639}>
            <Text style={styles.Text_48_639}>Art Title</Text>
          </View>
          <View style={styles.View_48_640}>
            <Text style={styles.Text_48_640}>Artist Name</Text>
          </View>
          <View style={styles.View_48_641}>
            <Text style={styles.Text_48_641}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_642}>
          <View style={styles.View_48_643}>
            <Text style={styles.Text_48_643}>Art Title</Text>
          </View>
          <View style={styles.View_48_644}>
            <Text style={styles.Text_48_644}>Artist Name</Text>
          </View>
          <View style={styles.View_48_645}>
            <Text style={styles.Text_48_645}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_646}>
          <View style={styles.View_48_647}>
            <Text style={styles.Text_48_647}>Art Title</Text>
          </View>
          <View style={styles.View_48_648}>
            <Text style={styles.Text_48_648}>Artist Name</Text>
          </View>
          <View style={styles.View_48_649}>
            <Text style={styles.Text_48_649}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_650}>
          <View style={styles.View_48_651}>
            <Text style={styles.Text_48_651}>Art Title</Text>
          </View>
          <View style={styles.View_48_652}>
            <Text style={styles.Text_48_652}>Artist Name</Text>
          </View>
          <View style={styles.View_48_653}>
            <Text style={styles.Text_48_653}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_654}>
          <View style={styles.View_48_655}>
            <Text style={styles.Text_48_655}>Art Title</Text>
          </View>
          <View style={styles.View_48_656}>
            <Text style={styles.Text_48_656}>Artist Name</Text>
          </View>
          <View style={styles.View_48_657}>
            <Text style={styles.Text_48_657}>$ 2,600.00</Text>
          </View>
        </View>
        <View style={styles.View_48_658}>
          <View style={styles.View_48_659}>
            <Text style={styles.Text_48_659}>Art Title</Text>
          </View>
          <View style={styles.View_48_660}>
            <Text style={styles.Text_48_660}>Artist Name</Text>
          </View>
          <View style={styles.View_48_661}>
            <Text style={styles.Text_48_661}>$ 2,600.00</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_723}
        />
        <View style={styles.View_48_725}>
          <Text style={styles.Text_48_725}>Price</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_726}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_727}
        />
        <View style={styles.View_48_728}>
          <Text style={styles.Text_48_728}>Medium</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_729}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_730}
        />
        <View style={styles.View_48_731}>
          <Text style={styles.Text_48_731}>Size</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_732}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_742}
        />
        <View style={styles.View_48_743}>
          <Text style={styles.Text_48_743}>Palette</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_744}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_745}
        />
        <View style={styles.View_48_746}>
          <Text style={styles.Text_48_746}>Subject</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_747}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_748}
        />
        <View style={styles.View_48_749}>
          <Text style={styles.Text_48_749}>Colour</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e654/522c/885f03b6e613e30d21632c6b203475e6"
          }}
          style={styles.ImageBackground_48_750}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_751}
        />
        <View style={styles.View_48_752}>
          <Text style={styles.Text_48_752}>Colour</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_753}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c9/e0ab/23980a99311c69319270377e99066996"
          }}
          style={styles.ImageBackground_48_754}
        />
        <View style={styles.View_48_755}>
          <Text style={styles.Text_48_755}>Artist</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a143/1565/f5e1ecec4452cad2811baaeea2462bd2"
          }}
          style={styles.ImageBackground_48_756}
        />
        <View style={styles.View_48_764} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_48_766}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_48_768}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ee3/c4c7/ee7c6f26b0895bb11bd0f6ae9ca468d0"
          }}
          style={styles.ImageBackground_48_769}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e4b/97a0/1b11e62d93364c8afc3b1a31c440d546"
          }}
          style={styles.ImageBackground_48_770}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_48_772}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_48_773}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7d6/d1f5/aabc01aae73825eb91903505f5dc5753"
          }}
          style={styles.ImageBackground_48_767}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d90/ba6d/db25c083993f9afc34903190b09e90d7"
          }}
          style={styles.ImageBackground_48_781}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c117/4ac2/5ea182bb15d8057438fe83e07d0d9d60"
          }}
          style={styles.ImageBackground_48_783}
        />
        <View style={styles.View_48_790} />
        <View style={styles.View_48_784}>
          <Text style={styles.Text_48_784}>1</Text>
        </View>
        <View style={styles.View_48_785}>
          <Text style={styles.Text_48_785}>2</Text>
        </View>
        <View style={styles.View_48_786}>
          <Text style={styles.Text_48_786}>3</Text>
        </View>
        <View style={styles.View_48_787}>
          <Text style={styles.Text_48_787}>4</Text>
        </View>
        <View style={styles.View_48_788}>
          <Text style={styles.Text_48_788}>5</Text>
        </View>
        <View style={styles.View_48_789}>
          <Text style={styles.Text_48_789}>15</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/47b0/0dc8cf5e23345d2f64aa8f29866c4678"
          }}
          style={styles.ImageBackground_48_791}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19aa/d815/6f38cfab92ffb6a5878eceee03ce9042"
        }}
        style={styles.ImageBackground_48_662}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/14c2/29993d2ff6d1e49c6c94286af76313d6"
        }}
        style={styles.ImageBackground_48_663}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c11c/3c17/1d15aa7f6f860e8f5d37393ac257aeb9"
        }}
        style={styles.ImageBackground_48_664}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/2c60/afc0de329bae338327f1abec76368472"
        }}
        style={styles.ImageBackground_48_665}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fa/c407/220c2254dae30a754ca0f79cdcb4f2bc"
        }}
        style={styles.ImageBackground_48_666}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7097/a395/30340a9b7a34e77754b65cec8960295c"
        }}
        style={styles.ImageBackground_48_667}
      />
      <View style={styles.View_48_668}>
        <View style={styles.View_48_669}>
          <Text style={styles.Text_48_669}>Art Title</Text>
        </View>
        <View style={styles.View_48_670}>
          <Text style={styles.Text_48_670}>Artist Name</Text>
        </View>
        <View style={styles.View_48_671}>
          <Text style={styles.Text_48_671}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_672}>
        <View style={styles.View_48_673}>
          <Text style={styles.Text_48_673}>Art Title</Text>
        </View>
        <View style={styles.View_48_674}>
          <Text style={styles.Text_48_674}>Artist Name</Text>
        </View>
        <View style={styles.View_48_675}>
          <Text style={styles.Text_48_675}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_676}>
        <View style={styles.View_48_677}>
          <Text style={styles.Text_48_677}>Art Title</Text>
        </View>
        <View style={styles.View_48_678}>
          <Text style={styles.Text_48_678}>Artist Name</Text>
        </View>
        <View style={styles.View_48_679}>
          <Text style={styles.Text_48_679}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_680}>
        <View style={styles.View_48_681}>
          <Text style={styles.Text_48_681}>Art Title</Text>
        </View>
        <View style={styles.View_48_682}>
          <Text style={styles.Text_48_682}>Artist Name</Text>
        </View>
        <View style={styles.View_48_683}>
          <Text style={styles.Text_48_683}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_684}>
        <View style={styles.View_48_685}>
          <Text style={styles.Text_48_685}>Art Title</Text>
        </View>
        <View style={styles.View_48_686}>
          <Text style={styles.Text_48_686}>Artist Name</Text>
        </View>
        <View style={styles.View_48_687}>
          <Text style={styles.Text_48_687}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_688}>
        <View style={styles.View_48_689}>
          <Text style={styles.Text_48_689}>Art Title</Text>
        </View>
        <View style={styles.View_48_690}>
          <Text style={styles.Text_48_690}>Artist Name</Text>
        </View>
        <View style={styles.View_48_691}>
          <Text style={styles.Text_48_691}>$ 2,600.00</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19aa/d815/6f38cfab92ffb6a5878eceee03ce9042"
        }}
        style={styles.ImageBackground_48_692}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7c8/14c2/29993d2ff6d1e49c6c94286af76313d6"
        }}
        style={styles.ImageBackground_48_693}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c11c/3c17/1d15aa7f6f860e8f5d37393ac257aeb9"
        }}
        style={styles.ImageBackground_48_694}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05aa/2c60/afc0de329bae338327f1abec76368472"
        }}
        style={styles.ImageBackground_48_695}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17fa/c407/220c2254dae30a754ca0f79cdcb4f2bc"
        }}
        style={styles.ImageBackground_48_696}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7097/a395/30340a9b7a34e77754b65cec8960295c"
        }}
        style={styles.ImageBackground_48_697}
      />
      <View style={styles.View_48_698}>
        <View style={styles.View_48_699}>
          <Text style={styles.Text_48_699}>Art Title</Text>
        </View>
        <View style={styles.View_48_700}>
          <Text style={styles.Text_48_700}>Artist Name</Text>
        </View>
        <View style={styles.View_48_701}>
          <Text style={styles.Text_48_701}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_702}>
        <View style={styles.View_48_703}>
          <Text style={styles.Text_48_703}>Art Title</Text>
        </View>
        <View style={styles.View_48_704}>
          <Text style={styles.Text_48_704}>Artist Name</Text>
        </View>
        <View style={styles.View_48_705}>
          <Text style={styles.Text_48_705}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_706}>
        <View style={styles.View_48_707}>
          <Text style={styles.Text_48_707}>Art Title</Text>
        </View>
        <View style={styles.View_48_708}>
          <Text style={styles.Text_48_708}>Artist Name</Text>
        </View>
        <View style={styles.View_48_709}>
          <Text style={styles.Text_48_709}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_710}>
        <View style={styles.View_48_711}>
          <Text style={styles.Text_48_711}>Art Title</Text>
        </View>
        <View style={styles.View_48_712}>
          <Text style={styles.Text_48_712}>Artist Name</Text>
        </View>
        <View style={styles.View_48_713}>
          <Text style={styles.Text_48_713}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_714}>
        <View style={styles.View_48_715}>
          <Text style={styles.Text_48_715}>Art Title</Text>
        </View>
        <View style={styles.View_48_716}>
          <Text style={styles.Text_48_716}>Artist Name</Text>
        </View>
        <View style={styles.View_48_717}>
          <Text style={styles.Text_48_717}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_718}>
        <View style={styles.View_48_719}>
          <Text style={styles.Text_48_719}>Art Title</Text>
        </View>
        <View style={styles.View_48_720}>
          <Text style={styles.Text_48_720}>Artist Name</Text>
        </View>
        <View style={styles.View_48_721}>
          <Text style={styles.Text_48_721}>$ 2,600.00</Text>
        </View>
      </View>
      <View style={styles.View_48_792}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/47b0/0dc8cf5e23345d2f64aa8f29866c4678"
          }}
          style={styles.ImageBackground_48_793}
        />
        <View style={styles.View_48_794}>
          <Text style={styles.Text_48_794}>Gift3d Art Mag</Text>
        </View>
        <View style={styles.View_48_795}>
          <Text style={styles.Text_48_795}>
            Discover new art and collections added weekly by our curators.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d75/ee4d/45d7268c9bb7e916d9138a320dc0a891"
          }}
          style={styles.ImageBackground_48_796}
        />
        <View style={styles.View_48_798}>
          <Text style={styles.Text_48_798}>E-mail Address</Text>
        </View>
        <View style={styles.View_48_799} />
        <View style={styles.View_48_800}>
          <Text style={styles.Text_48_800}>Sign Up</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_48_292: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 334,
    minHeight: 334,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4769,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_48_294: {
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
  View_48_295: {
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
  View_48_296: {
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
  View_48_297: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_297: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_298: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_298: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_299: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_299: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_300: {
    width: wp("11.458333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_300: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_301: {
    width: wp("10.79291131761339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_301: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_302: {
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
  View_48_303: {
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
  View_48_304: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_304: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_305: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 40
  },
  Text_48_305: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_306: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 80
  },
  Text_48_306: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_307: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 120
  },
  Text_48_307: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_308: {
    width: wp("11.11111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_308: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  View_48_309: {
    width: wp("11.156798468695747%"),
    top: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_48_309: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_310: {
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
  View_48_311: {
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
  View_48_312: {
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
  View_48_313: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_313: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_314: {
    width: wp("24.23611111111111%"),
    height: 56,
    top: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_315: {
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
  View_48_316: {
    width: wp("24.23611111111111%"),
    height: 1,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 209, 210, 1)"
  },
  View_48_317: {
    width: wp("20.48611111111111%"),
    minWidth: wp("20.48611111111111%"),
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 20
  },
  Text_48_317: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_318: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.736111111111114%")
  },
  View_48_320: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: -29
  },
  Text_48_320: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.68,
    textTransform: "none"
  },
  View_48_356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 345,
    minHeight: 345,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_48_357: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 312,
    minHeight: 312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_48_503: {
    width: wp("9.027777777777777%"),
    minWidth: wp("9.027777777777777%"),
    height: 68,
    minHeight: 68,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.48611111111111%"),
    top: 105,
    resizeMode: "cover"
  },
  View_48_504: {
    width: wp("22.63888888888889%"),
    minWidth: wp("22.63888888888889%"),
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.68055555555556%"),
    top: 239
  },
  Text_48_504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_365: {
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
  View_48_366: {
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
  View_48_367: {
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
  View_48_368: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_368: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_369: {
    width: wp("3.680555555555556%"),
    minWidth: wp("3.680555555555556%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3888888888888875%"),
    top: 0
  },
  Text_48_369: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_370: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.291666666666666%"),
    top: 0
  },
  Text_48_370: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_371: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.819444444444443%"),
    top: 0
  },
  Text_48_371: {
    color: "rgba(26, 26, 31, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_372: {
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
  View_48_373: {
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
  View_48_374: {
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
  ImageBackground_48_375: {
    width: wp("1.2499996026357014%"),
    height: 18.000024795532227,
    top: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%")
  },
  ImageBackground_48_378: {
    width: wp("1.6666666666666667%"),
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%")
  },
  View_48_382: {
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
  View_48_548: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 4144,
    minHeight: 4144,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 312,
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_48_602: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 49,
    resizeMode: "cover"
  },
  ImageBackground_48_603: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 49,
    resizeMode: "cover"
  },
  ImageBackground_48_604: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 49,
    resizeMode: "cover"
  },
  ImageBackground_48_605: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 545
  },
  ImageBackground_48_606: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 545,
    resizeMode: "cover"
  },
  ImageBackground_48_607: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 545,
    resizeMode: "cover"
  },
  View_48_608: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 338,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_609: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_610: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: 36
  },
  Text_48_610: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_611: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_611: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_612: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 338,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_613: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_613: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_614: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_614: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_615: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_615: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_616: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 338,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_617: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_618: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_618: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_619: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_619: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_620: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 834,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_621: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_621: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_622: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_622: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_623: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_623: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_624: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: 834,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_625: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_626: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_627: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_627: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_628: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 834,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_629: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_629: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_630: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_631: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_631: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_632: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 1041,
    resizeMode: "cover"
  },
  ImageBackground_48_633: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 1041,
    resizeMode: "cover"
  },
  ImageBackground_48_634: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 1041,
    resizeMode: "cover"
  },
  ImageBackground_48_635: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 1537
  },
  ImageBackground_48_636: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 1537,
    resizeMode: "cover"
  },
  ImageBackground_48_637: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 1537,
    resizeMode: "cover"
  },
  View_48_638: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 1330,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_639: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_639: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_640: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: 36
  },
  Text_48_640: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_641: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_641: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_642: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 1330,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_643: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_643: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_644: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_644: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_645: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_645: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_646: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 1330,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_647: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_647: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_648: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_648: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_649: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_649: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_650: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 1826,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_651: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_651: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_652: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_652: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_653: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_653: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_654: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: 1826,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_655: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_656: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_656: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_657: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_657: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_658: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 1826,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_659: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_659: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_660: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_660: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_661: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_661: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_723: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 62
  },
  View_48_725: {
    width: wp("4.444444444444445%"),
    minWidth: wp("4.444444444444445%"),
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 38
  },
  Text_48_725: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_726: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 95
  },
  ImageBackground_48_727: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 141.00000047683716
  },
  View_48_728: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 117
  },
  Text_48_728: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_729: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 174
  },
  ImageBackground_48_730: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 214
  },
  View_48_731: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 190
  },
  Text_48_731: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_732: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 247
  },
  ImageBackground_48_742: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 285
  },
  View_48_743: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 261
  },
  Text_48_743: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_744: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 318
  },
  ImageBackground_48_745: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 364
  },
  View_48_746: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 340
  },
  Text_48_746: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_747: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 397
  },
  ImageBackground_48_748: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 437
  },
  View_48_749: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 413
  },
  Text_48_749: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_750: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 470
  },
  ImageBackground_48_751: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 437
  },
  View_48_752: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 413
  },
  Text_48_752: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_753: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 470
  },
  ImageBackground_48_754: {
    width: wp("1.3194447093539767%"),
    minWidth: wp("1.3194447093539767%"),
    height: 11,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: 516
  },
  View_48_755: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555555%"),
    top: 492
  },
  Text_48_755: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_756: {
    width: wp("16.805555555555557%"),
    minWidth: wp("16.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: 566
  },
  View_48_764: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.95833333333333%"),
    top: 4032,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(95, 95, 98, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_48_766: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.97222222222222%"),
    top: 4033
  },
  ImageBackground_48_768: {
    width: wp("2.9899789903235313e-7%"),
    minWidth: wp("2.9899789903235313e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.06249999999999%"),
    top: 4033
  },
  ImageBackground_48_769: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.25%"),
    top: 4032
  },
  ImageBackground_48_770: {
    width: wp("1.5481115648678195e-7%"),
    minWidth: wp("1.5481115648678195e-7%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.541666666666664%"),
    top: 4033
  },
  ImageBackground_48_772: {
    width: wp("3.035512463611667e-7%"),
    minWidth: wp("3.035512463611667e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.61805555555556%"),
    top: 4032.5
  },
  ImageBackground_48_773: {
    width: wp("3.035512463611667e-7%"),
    minWidth: wp("3.035512463611667e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.84027777777777%"),
    top: 4032.5
  },
  ImageBackground_48_767: {
    width: wp("3.035512463611667e-7%"),
    minWidth: wp("3.035512463611667e-7%"),
    height: 49.5,
    minHeight: 49.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.88194444444444%"),
    top: 4032.5
  },
  ImageBackground_48_781: {
    width: wp("1.0416667328940497%"),
    minWidth: wp("1.0416667328940497%"),
    height: 0.0000013113417480781209,
    minHeight: 0.0000013113417480781209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.51388888888889%"),
    top: 4070
  },
  ImageBackground_48_783: {
    width: wp("1.0416667328940497%"),
    minWidth: wp("1.0416667328940497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.33333333333333%"),
    top: 4070
  },
  View_48_790: {
    width: wp("2.5%"),
    minWidth: wp("2.5%"),
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.041666666666664%"),
    top: 4033,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_48_784: {
    width: wp("0.5555555555555556%"),
    minWidth: wp("0.5555555555555556%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.01388888888889%"),
    top: 4031
  },
  Text_48_784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_785: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.58333333333333%"),
    top: 4031
  },
  Text_48_785: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_786: {
    width: wp("0.7638888888888888%"),
    minWidth: wp("0.7638888888888888%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.22222222222222%"),
    top: 4031
  },
  Text_48_786: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_787: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: 4031
  },
  Text_48_787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_788: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.77777777777778%"),
    top: 4031
  },
  Text_48_788: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_789: {
    width: wp("1.3194444444444444%"),
    minWidth: wp("1.3194444444444444%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.625%"),
    top: 4031
  },
  Text_48_789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_791: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4105
  },
  ImageBackground_48_662: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 2366,
    resizeMode: "cover"
  },
  ImageBackground_48_663: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 2366,
    resizeMode: "cover"
  },
  ImageBackground_48_664: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 2366,
    resizeMode: "cover"
  },
  ImageBackground_48_665: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 2862
  },
  ImageBackground_48_666: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 2862,
    resizeMode: "cover"
  },
  ImageBackground_48_667: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 2862,
    resizeMode: "cover"
  },
  View_48_668: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 2655,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_669: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_670: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: 36
  },
  Text_48_670: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_671: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_671: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_672: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 2655,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_673: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_673: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_674: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_675: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_675: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_676: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 2655,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_677: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_678: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_679: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_679: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_680: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 3151,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_681: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_682: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_683: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_683: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_684: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: 3151,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_685: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_685: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_686: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_686: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_687: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_687: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_688: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 3151,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_689: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_690: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_690: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_691: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_691: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_692: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 3358,
    resizeMode: "cover"
  },
  ImageBackground_48_693: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 3358,
    resizeMode: "cover"
  },
  ImageBackground_48_694: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 3358,
    resizeMode: "cover"
  },
  ImageBackground_48_695: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 3854
  },
  ImageBackground_48_696: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 3854,
    resizeMode: "cover"
  },
  ImageBackground_48_697: {
    width: wp("20.069444444444446%"),
    minWidth: wp("20.069444444444446%"),
    height: 289,
    minHeight: 289,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 3854,
    resizeMode: "cover"
  },
  View_48_698: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.680555555555554%"),
    top: 3647,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_699: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_699: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_700: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444642%"),
    top: 36
  },
  Text_48_700: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_701: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_701: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_702: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.02777777777778%"),
    top: 3647,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_703: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_703: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_704: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_704: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_705: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_705: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_706: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.375%"),
    top: 3647,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_707: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_708: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_708: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_709: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_709: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_710: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.75%"),
    top: 4143,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_711: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_711: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_712: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_713: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_713: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_714: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.09722222222222%"),
    top: 4143,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_715: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_715: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_716: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_716: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_717: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_717: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_718: {
    width: wp("24.86111111111111%"),
    minWidth: wp("24.86111111111111%"),
    height: 130,
    minHeight: 130,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.44444444444444%"),
    top: 4143,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_719: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_48_719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_720: {
    width: wp("8.125%"),
    minWidth: wp("8.125%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: 36
  },
  Text_48_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_721: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 74
  },
  Text_48_721: {
    color: "rgba(95, 95, 98, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_792: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 193,
    minHeight: 193,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 4456,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_48_793: {
    width: wp("100%"),
    minWidth: wp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 179
  },
  View_48_794: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.958333333333333%"),
    top: 27
  },
  Text_48_794: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_795: {
    width: wp("38.19444444444444%"),
    minWidth: wp("38.19444444444444%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.958333333333333%"),
    top: 63
  },
  Text_48_795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_48_796: {
    width: wp("25.104166666666668%"),
    minWidth: wp("25.104166666666668%"),
    height: 9.094947017729282e-13,
    minHeight: 9.094947017729282e-13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.72222222222222%"),
    top: 96.5
  },
  View_48_798: {
    width: wp("8.819444444444445%"),
    minWidth: wp("8.819444444444445%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.68055555555556%"),
    top: 52
  },
  Text_48_798: {
    color: "rgba(207, 204, 204, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_799: {
    width: wp("16.180555555555557%"),
    minWidth: wp("16.180555555555557%"),
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.30555555555556%"),
    top: 52,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_48_800: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: 56,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06944444444444%"),
    top: 47
  },
  Text_48_800: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
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
