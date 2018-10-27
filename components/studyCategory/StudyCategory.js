import React, {Component} from "react";
import {Text, View, ScrollView, Button, Image} from "react-native";

class CategoryList extends Component {
    render() {
        let StudyCategoryList = this.props.categories.map((StudyCategory, i) =>

            <View key={i}>
                <Text>{StudyCategory.categoryName}</Text>

                {StudyCategory.parentName !== '자유주제' ?
                    <Text>{StudyCategory.parentName}</Text>
                    : <Image source={require('./img/logo-card.png')}/>
                }

                <Button
                    title="Go To"
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                />

                {/*<View>*/}
                    {/*<Text>{StudyCategory.categoryName}</Text>*/}
                    {/*<Text>{StudyCategory.categoryName + "에 관한 다양한 주제들로 함께 스피킹 스터디해요!"}</Text>*/}
                    {/*/!*<img src={require('./img/button-next-category@3x.png')}*!/*/}
                         {/*/!*className="Button_Next_Category" alt=""/>*!/*/}
                {/*</View>*/}
            </View>
        );
        return (
            <View>{StudyCategoryList}</View>
        );
    }


}

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
        return (
            <View>
                <Text>어떤 주제로 스터디해볼까요?</Text>
                <Text>스터디 카테고리 리스트</Text>

                <CategoryList categories={this.state.categories}/>
            </View>
        );
    }
}

export default StudyCategory;