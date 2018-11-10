import React from "react";
import {Text, View, Image, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

class Login extends React.Component {
    static navigationOptions = {
        headerTitle: null,
        headerStyle: {borderBottomWidth: 0,}
    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 92, height: 83, marginBottom: 24}}
                       source={require('./img/logo-login.png')}/>

                <View>
                    <TextInput placeholder="이메일 주소 입력" style={styles.inputBox}/>
                    <TextInput placeholder="비밀번호 입력" style={styles.inputBox}/>


                    {/*<View className="inLine inLine-icCheck">*/}
                    {/*<Switch type="checkbox" id="login-status"></Switch>*/}
                    {/*<label htmlFor="login-status" className="\-">로그인 상태 유지하기</label>*/}
                    {/*</View>*/}

                    <TouchableOpacity style={{marginBottom: 28}}>
                        <Image source={require('./img/button_login_m.png')}
                               style={{width: 280, height: 44}}/>
                    </TouchableOpacity>

                    <View style={styles.inLine}>
                        <View style={styles.Line}/>
                        <Text style={styles.layer}>또는</Text>
                        <View style={styles.Line}/>
                    </View>

                    {/*facebook login*/}
                    <TouchableOpacity onClick={() => {
                    }}>
                        <Image style={{width: 280, height: 44, marginBottom: 8}}
                               source={require('./img/button-facebook-login.png')}/>
                    </TouchableOpacity>

                    {/*google login*/}
                    <TouchableOpacity onClick={() => {
                    }}>
                        <Image style={{width: 280, height: 44, marginBottom: 32}}
                               source={require('./img/button-google-login.png')}/>
                    </TouchableOpacity>


                </View>
                <Text style={styles.desc}>계정이 없으신가요?</Text>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Register');
                }}
                                  style={styles.registerLink}>
                    <Text style={styles.registerLink}>TOAST 회원가입하기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: "#ffffff",
            alignItems: 'center',
            height: '100%'
        },
        inputBox: {
            width: 280,
            height: 48,
            borderRadius: 4,
            borderColor: '#e6e6e6',
            borderWidth: 1,
            paddingLeft: 10,
            fontSize: 13,
            fontWeight: "300",
            fontStyle: "normal",
            letterSpacing: -0.19,
            color: "#9b9b9b",
            marginBottom: 8
        },
        inLine: {
            flexDirection: 'row'
        },
        layer: {
            width: 24,
            height: 19,
            fontSize: 13,
            letterSpacing: -0.2,
            textAlign: 'center',
            color: '#4a4a4a',
            marginTop: -5,
            marginRight: 8,
            marginBottom: 22,
            marginLeft: 8
        },
        Line: {
            width: 120,
            height: 2,
            borderWidth: 1,
            borderColor: '#bdbdbd',
        },
        registerLink: {
            width: 115,
            height: 19,
            fontSize: 13,
            fontWeight: "bold",
            fontStyle: "normal",
            letterSpacing: -0.19,
            textAlign: "center",
            color: '#ff6032'
        },
        desc: {
            width: 95,
            height: 18,
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal",
            letterSpacing: -0.17,
            textAlign: "center",
            color: "#4a4a4a"
        }
    })
;

export default Login;