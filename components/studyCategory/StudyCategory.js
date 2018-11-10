import React, {Component} from "react";
import {Text, TouchableOpacity, View, ScrollView, Button, Image, StyleSheet} from "react-native";
import {AppLoading, Font} from "expo";
import {LogoTitle} from "../logoTitle/LogoTitle";

class StudyCategory extends React.Component {

    state = {
        fontLoaded: false,
        categories: [
            {
                "categoryID": 1,
                "parentName": null,
                "categoryName": "자유주제",
                "categoryImage": null
            },
            {
                "categoryID": 6,
                "parentName": "문화",
                "categoryName": "여행",
                "categoryImage": "toast-ser.run.goorm.io/image/3.png"
            },
            {
                "categoryID": 7,
                "parentName": "생활",
                "categoryName": "연애",
                "categoryImage": "toast-ser.run.goorm.io/image/4.png"
            },
            {
                "categoryID": 8,
                "parentName": "생활",
                "categoryName": "폭염",
                "categoryImage": "toast-ser.run.goorm.io/image/1.png"
            },
            {
                "categoryID": 9,
                "parentName": "사회",
                "categoryName": "난민",
                "categoryImage": "toast-ser.run.goorm.io/image/2.png"
            },
            {
                "categoryID": 10,
                "parentName": "사회",
                "categoryName": "취업",
                "categoryImage": "toast-ser.run.goorm.io/image/5.png"
            }
        ]
    }

    componentWillMount() {
        Font.loadAsync({
            'noto-sans-regular': require('../assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
        });
    }

    async componentDidMount() {
        await Font.loadAsync({
            'noto-sans-regular': require('../assets/fonts/Noto_Sans/NotoSans-Regular.ttf'),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        let StudyCategoryList = this.state.categories.map((StudyCategory, i) =>

            <TouchableOpacity key={i} onPress={() => {
                this.props.navigation.navigate('StudyroomList', {categoryID: StudyCategory.categoryID});
            }}>
                <View style={styles.category} key={i}>
                    {StudyCategory.parentName !== '자유주제' ?
                        <Text>{StudyCategory.parentName}</Text>
                        : null
                    }
                    <Text style={styles.categoryName}>{StudyCategory.categoryName}</Text>
                </View>
            </TouchableOpacity>
        );
        // return (
        //     <View>{StudyCategoryList}</View>
        // );

        return (
            <View>
                {
                    this.state.fontLoaded ? (
                        <View style={styles.container}>
                            <Text style={styles.title}>어떤 주제로 스터디해볼까요?</Text>
                            <Text style={styles.subtitle}>스터디 카테고리 리스트</Text>

                            <View style={styles.categoryList}>{StudyCategoryList}</View>
                        </View>
                    ) : null
                }
            </View>


        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        paddingVertical: 28,
        paddingHorizontal: 16,
        height: '100%'
    },
    title: {
        width: 189,
        height: 21,
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.21,
        color: "#4a4a4a",
        fontFamily: 'noto-sans-regular',
        marginBottom: 25
    },
    subtitle: {
        width: 106,
        height: 18,
        fontSize: 11,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.16,
        color: "#888888",
        fontFamily: 'noto-sans-regular',
        marginBottom: 9
    },
    categoryList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: "center",

    },
    category: {
        width: 158,
        height: 135,
        borderRadius: 8,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 6


    },
    categoryName: {
        fontFamily: "noto-sans-regular",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.2,
        textAlign: "center",
    }
});

export default StudyCategory;