import React from 'react';
import {createStackNavigator} from "react-navigation";
import Home from "./components/home/Home";
import StudyCategory from "./components/studyCategory/StudyCategory";
import Login from "./components/login/Login";
import {StyleSheet, View} from "react-native";
import Register from "./components/register/Register";
import StudyroomList from "./components/studyroomList/StudyroomList";
import StudyroomStart from "./components/studyroomStart/StudyroomStart";
import {Left, LogoTitle, Right} from "./components/logoTitle/LogoTitle";
import {Image, Icon} from 'react-native';


const RootStack = createStackNavigator(
    {
        Home: {screen: Home},
        StudyCategory: {screen: StudyCategory},
        Login: {screen: Login},
        Register: {screen: Register},
        StudyroomList: {screen: StudyroomList},
        StudyroomStart: {screen: StudyroomStart}


    },
    {
        initialRouteName: 'Home',
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#ffffff',
            },
            headerTitle: <LogoTitle onPress={ () => { navigation.navigate('Home') }}/>,
            headerLeft: <Left onPress={ () => { navigation.goBack() }}/>,
            headerRight: <Right onPress={ () => { }}/>
        }),
    }
)
;


class App extends React.Component {
    render() {
        return (
            <RootStack/>
        );
    }
};


export default App;