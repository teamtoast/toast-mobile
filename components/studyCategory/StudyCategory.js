import React, {Component} from "react";
import {Text, TouchableOpacity,View, ScrollView, Button, Image, StyleSheet} from "react-native";

class StudyCategory extends React.Component {
    static navigationOptions = {
        title: 'StudyCategory',
    };

    state = {
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

    render() {
        let StudyCategoryList = this.state.categories.map((StudyCategory, i) =>

            <View style={styles.category} key={i}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('StudyroomList', {categoryID: StudyCategory.categoryID});
                }}>
                    <Text>{StudyCategory.categoryName}</Text>

                    {StudyCategory.parentName !== '자유주제' ?
                        <Text>{StudyCategory.parentName}</Text>
                        : <Image source={require('./img/logo-card.png')}/>
                    }
                </TouchableOpacity>

                {/*<View>*/}
                {/*<Text>{StudyCategory.categoryName}</Text>*/}
                {/*<Text>{StudyCategory.categoryName + "에 관한 다양한 주제들로 함께 스피킹 스터디해요!"}</Text>*/}
                {/*/!*<img src={require('./img/button-next-category@3x.png')}*!/*/}
                {/*/!*className="Button_Next_Category" alt=""/>*!/*/}
                {/*</View>*/}
            </View>
        );
        // return (
        //     <View>{StudyCategoryList}</View>
        // );

        return (
            <View style={styles.container}>
                <Text style={styles.title}>어떤 주제로 스터디해볼까요?</Text>
                <Text>스터디 카테고리 리스트</Text>

                <View style={styles.categoryList}>{StudyCategoryList}</View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 20
    },
    categoryList: {},
    category: {
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 1,
        marginBottom: 10
    }
});

export default StudyCategory;