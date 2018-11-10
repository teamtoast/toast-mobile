import React, {Component} from "react";
import {View, Image, TouchableOpacity} from 'react-native';


export const Left = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={require('./ic_back.png')}
            style={{ width: 24, height: 24, marginLeft: 16 }}
        />
    </TouchableOpacity>
);

export const Right = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            source={require('./ic_menu_24_px.png')}
            style={{ width: 24, height: 24, marginRight: 16 }}
        />
    </TouchableOpacity>
);

export class LogoTitle extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{ flexDirection: 'row',
                justifyContent: 'space-between'}}>
                <Image
                    source={require('./logo_nav.png')}
                    style={{ width: 106, height: 31, marginTop: 8 }}
                />
            </TouchableOpacity>

        );
    }
}