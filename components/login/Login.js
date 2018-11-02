import React from "react";
import {Text, View, Image, Button, TextInput, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('./img/logo-login.png')}/>

                    <View style={styles.loginBox}>
                        {/*facebook login*/}
                        <TouchableOpacity onClick={() => {}}>
                            <Image source={require('./img/button-facebook-login.png')}/>
                        </TouchableOpacity>

                        {/*google login*/}
                        <TouchableOpacity onClick={() => {}}>
                            <Image source={require('./img/button-google-login.png')}/>
                        </TouchableOpacity>

                        <View style={styles.inLine}>
                            <View style={styles.Line}/>
                            <Text style={styles.layer}>또는</Text>
                            <View style={styles.Line}/>
                        </View>

                        <Text style={styles.inputType}>이메일 주소</Text>
                        <TextInput placeholder="이메일 주소 입력" style={styles.inputBox}/>

                        <Text style={styles.inputType}>비밀번호</Text>
                        <TextInput placeholder="비밀번호 입력" style={styles.inputBox}/>


                        {/*<View className="inLine inLine-icCheck">*/}
                        {/*<Switch type="checkbox" id="login-status"></Switch>*/}
                        {/*<label htmlFor="login-status" className="\-">로그인 상태 유지하기</label>*/}
                        {/*</View>*/}

                        <TouchableOpacity>
                            <Image source={require('./img/button-login.png')}
                                   style={styles.buttonLogin}/>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.desc}>계정이 없으신가요?</Text>
                    <Button title={'TOAST 회원가입하기'}
                            onPress={() => {
                                this.props.navigation.navigate('Register');
                            }}
                            style={styles.registerLink}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            backgroundColor: "#ffffff",
            alignItems: 'center',
        },
        loginBox: {
            alignItems: 'center',
            width: 320,
            borderRadius: 8,
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingHorizontal: 40,
            paddingVertical: 32
        },
        inputBox: {
            height: 48,
            borderRadius: 4,
            borderColor: '#e6e6e6',
            borderWidth: 1,
            fontSize: 13,
            letterSpacing: -0.2,
            color: '#4a4a4a',
            width: 296,
            paddingLeft: 10
        },
        inputType: {
            textAlign: 'left',
            fontSize: 13,
            letterSpacing: -0.2,
            color: '#4a4a4a'
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
            marginTop: 26,
            marginRight: 8,
            marginBottom: 22,
            marginLeft: 8
        },
        Line: {
            width: 126,
            height: 2,
            borderWidth: 1,
            borderColor: '#bdbdbd',
        },
        registerLink: {
            fontSize: 13,
            fontWeight: 'bold',
            letterSpacing: -0.2,
            color: '#ff6032'
        },
        desc: {
            fontSize: 13
        }
    })
;

export default Login;