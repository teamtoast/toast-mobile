import React from "react";
import {Text, TouchableOpacity, View, Image, Button, TextInput, StyleSheet, ScrollView} from "react-native";

class Register extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };
    state = {
        userID: '',
        userPassword: '',
        userNickname: '',
        userBirth: '',
        userGender: ''
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image source={require('../login/img/logo-login.png')}/>

                    <View style={styles.loginBox}>
                        {/*facebook login*/}
                        <TouchableOpacity onClick={() => {
                        }}>
                            <Image source={require('./img/button-facebook-signup.png')}/>
                        </TouchableOpacity>
                        {/*google login*/}
                        <TouchableOpacity onClick={() => {
                        }}>
                            <Image source={require('./img/button-google-signup.png')}/>
                        </TouchableOpacity>

                        <View style={styles.inLine}>
                            <View style={styles.Line}/>
                            <Text style={styles.layer}>또는</Text>
                            <View style={styles.Line}/>
                        </View>

                        <Text style={styles.inputType}>이메일 주소</Text>
                        <TextInput placeholder="이메일 주소 입력" style={styles.inputBox}
                                   onChange={(e) => {
                                       this.setState({userID: e.target.value});
                                   }}/>
                        {/*<View className="inLine inLine-icCheck">*/}
                        {/*<input type="checkbox" id="id-check"></input>*/}
                        {/*<label htmlFor="id-check" className="\-">중복확인</label>*/}
                        {/*</View>*/}

                        <Text style={styles.inputType}>비밀번호</Text>
                        <TextInput placeholder="비밀번호 입력" style={styles.inputBox}/>
                        <TextInput style={styles.inputBox}
                                   placeholder="비밀번호 확인"
                                   onChange={(e) => {
                                       this.setState({userPassword: e.target.value})
                                   }}/>

                        <Text style={styles.inputType}>생년월일</Text>

                        <TextInput style={styles.inputBox}
                                   placeholder="생년월일 입력 (예시: 960101)"
                                   onChange={(e) => {
                                       this.setState({userBirth: e.target.value})
                                   }}/>

                        <Text style={styles.inputType}>성별</Text>
                        <View style={styles.buttonGender}>
                            <TouchableOpacity
                                onClick={() => {
                                    this.setState({userGender: "Woman"});
                                }}
                                style={this.state.userGender === "Woman" ? styles.buttonWomanActive : styles.buttonWoman}>
                                <Text style={styles.buttonText}>여자</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onClick={() => {
                                    this.setState({userGender: "Man"});
                                }}
                                style={this.state.userGender === "Man" ? styles.buttonManActive : styles.buttonMan}>
                                <Text style={styles.buttonText}>남자</Text>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity>
                            <Image source={require('./img/button-signup.png')}
                                   style={styles.buttonSignup}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.desc}>이미 계정이 있으신가요?</Text>
                    <Button title={'TOAST 로그인하기'}
                            onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}
                            style={styles.loginLink}/>
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
        loginLink: {
            fontSize: 13,
            fontWeight: 'bold',
            letterSpacing: -0.2,
            color: '#ff6032'
        },
        desc: {
            fontSize: 13
        },
        buttonWomanActive: {
            backgroundColor: '#ff6032',
            color: '#ffffff',
            borderColor: '#ff6032',
            borderWidth: 1
        },
        buttonWoman: {
            width: 149,
            height: 48,
            borderColor: '#e6e6e6',
            borderWidth: 1,

            // borderTopStartRadius: 4
        },
        buttonText: {
            fontSize: 13,
            fontWeight: '300',
            letterSpacing: -0.2,
            color: '#9b9b9b'
        },
        buttonManActive: {
            backgroundColor: '#ff6032',
            color: '#ffffff',
            borderColor: '#ff6032',
            borderWidth: 1
        },
        buttonMan: {
            width: 149,
            height: 48,
            borderColor: '#e6e6e6',
            borderWidth: 1,
        },
        buttonGender: {
            flex: 1,
            flexDirection: 'row'

        }
    })
;

export default Register;