import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, FlatList} from 'react-native'
import DownIconSvg from '../../../assets/icon/icon-down-black.svg'

import analytics from '@react-native-firebase/analytics';
import Def from '../../../Def/Def'
import Style from "../../../Def/Style";

const {width, height} = Dimensions.get('window');


class TermScreen extends React.Component{
    render() {
        analytics().setCurrentScreen(Def.SCREEN_TERM);
        const renderItem = ({ item }) => (
            <NotificationItemrenderer item={item} />
        );
        return (
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <TouchableOpacity style={{justifyContent:'center',  paddingLeft: 10, width:50}}
                                      onPress={() => {
                                          this.props.navigation.goBack();
                                      }}
                    >
                        <DownIconSvg width={25} height={25} />
                    </TouchableOpacity>
                    <View style={{alignItems:'center', justifyContent: 'center', marginLeft: 30}}>
                        <Text style={styles.title}>
                            {'Điều khoản sử dụng' }
                        </Text>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height :Style.HEADER_HEIGHT,
        flexDirection:'row',
        paddingVertical: 10,
        width: width,
        // flex:1,


    },

    title:{
        fontSize: Style.TITLE_SIZE,
        color: Style.DEFAUT_RED_COLOR,
        fontWeight: 'bold',
        marginLeft: -20,
    },


});

export default TermScreen;
