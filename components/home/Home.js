import React from "react";
import {Button, Text, View} from "react-native";

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to StudyCategory"
                    onPress={() => this.props.navigation.navigate('StudyCategory')}
                />
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default Home;