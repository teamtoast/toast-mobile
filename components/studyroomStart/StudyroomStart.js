import React, {Component} from "react";
import {Text, TextInput, View, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Modal} from "react-native";


class StudyroomStart extends React.Component {
    static navigationOptions = {
        title: 'Studyroom',
    };

    state = {
        studyroomID: this.props.navigation.getParam('studyroomID'),
        studyroomInfo:
            {
                studyroomID: 1,
                studyroomState: 'start',
                studyroomTitle: "공부같이 해요",
                studyroomMaxUser: 4,
                studyroomTime: 35,
                studyroomMinLevel: 2
            },
        category: {
            categoryName: "취업",
            parentName: "사회"
        },

    };

    render() {

        return (
            <View style={styles.container}>
                StudyroomStart
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        paddingVertical: 28,
        paddingHorizontal: 16
    }

});

export default StudyroomStart;