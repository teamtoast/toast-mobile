import React from 'react';
import {createStackNavigator} from "react-navigation";
import Home from "./components/home/Home";
import StudyCategory from "./components/studyCategory/StudyCategory";
import Login from "./components/login/Login";
import {StyleSheet,View} from "react-native";
import Register from "./components/register/Register";
import StudyroomList from "./components/studyroomList/StudyroomList";


const RootStack = createStackNavigator(
    {
        Home: {screen: Home},
        StudyCategory: {screen: StudyCategory},
        Login: {screen: Login},
        Register: {screen: Register},
        StudyroomList: {screen: StudyroomList}

    },
    {
        initialRouteName: 'Home',
    }
);


class App extends React.Component {
    render() {
        return (
                <RootStack/>
        );
    }
};


export default App;