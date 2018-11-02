import React, {Component} from "react";
import {Text,TextInput, View, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Modal} from "react-native";


class StudyroomList extends React.Component {
    static navigationOptions = {
        title: 'StudyroomList',
    };

    state = {
        categoryID: this.props.navigation.getParam('categoryID'),
        studyroomList: [
            {
                studyroomID: 1,
                studyroomState: 'start',
                studyroomTitle: "공부해요",
                studyroomMaxUser: 4,
                studyroomTime: 35,
                studyroomMinLevel: 2
            },
            {
                studyroomID: 1,
                studyroomState: 'pending',
                studyroomTitle: "공부해요",
                studyroomMaxUser: 4,
                studyroomTime: 35,
                studyroomMinLevel: 2
            },
            {
                studyroomID: 1,
                studyroomState: 'start',
                studyroomTitle: "공부해요",
                studyroomMaxUser: 4,
                studyroomTime: 35,
                studyroomMinLevel: 2
            },

        ],
        category: {
            categoryName: "취업",
            parentName: "사회"
        },
        studyRoomInfo: {
            studyroomTitle: "",
            studyroomMinLevel: 1,
            studyroomTime: 15 | 30 | 45,
            studyroomMaxUser: 2 | 3 | 4,
        },
        modalShow: false

    };

    showModal = () => {
        this.setState({modalShow: true});
    };

    hideModal = () => {
        this.setState({modalShow: false});
    };

    render() {


        let listItems = this.state.studyroomList.map((studyRoom, i) =>
            <View key={i} style={styles.studyRoom}>
                <View
                    style={[styles.studyRoomHeader, studyRoom.studyroomState === "start" ? styles.studyRoomActive : null]}>
                    <Text style={styles.studyRoomState}>{studyRoom.state === "pending" ? '대기중' : '진행중'}</Text>
                </View>

                <View style={styles.studyRoomContent}>
                    <Text className="title"> {studyRoom.studyroomTitle} </Text>
                    <View className="detail">
                        <Text>{studyRoom.studyroomMaxUser} / 4</Text>

                        <Text>{studyRoom.studyroomTime} m</Text>
                        <Text>Lv.{studyRoom.studyroomMinLevel}</Text>

                        {/*<table>*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                        {/*<th>참여인원</th>*/}
                        {/*<th className="MinLevel">진행시간</th>*/}
                        {/*<th>입장레벨</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*<tr>*/}
                        {/*<td className="MaxUser">*/}
                        {/*<strong>{studyRoom.studyroomMaxUser}</strong> / 4*/}
                        {/*</td>*/}
                        {/*<td className="MinLevel">*/}
                        {/*<strong>{studyRoom.studyroomTime}</strong> m*/}
                        {/*</td>*/}
                        {/*<td className="Time">*/}
                        {/*Lv.<strong>{studyRoom.studyroomMinLevel}</strong>*/}
                        {/*<img src={require('./img/ic-arrow.png')} className="up-arrow" alt=""/>*/}
                        {/*</td>*/}
                        {/*</tr>*/}
                        {/*</tbody>*/}
                        {/*</table>*/}
                    </View>
                    {/*{(studyRoom.studyroomState === "pending" ?*/}
                    {/*<NavLink exact*/}
                    {/*to={{pathname: '/study/' + studyRoom.categoryID + "/" + studyRoom.studyroomID}}>*/}
                    {/*<button>*/}
                    {/*<img src={require('./img/button-in.png')} className="Button_In" alt=""/>*/}
                    {/*</button>*/}
                    {/*</NavLink>*/}
                    {/*:*/}
                    {/*<NavLink exact*/}
                    {/*to={{pathname: '/study/' + studyRoom.categoryID + "/" + studyRoom.studyroomID}}>*/}
                    {/*<button>*/}
                    {/*<img src={require('./img/button-ban.png')} className="Button_In Button_In_Ban"*/}
                    {/*alt=""/>*/}
                    {/*</button>*/}
                    {/*</NavLink>*/}

                    {/*)}*/}
                </View>

            </View>
        );

        return (
            <View style={styles.container}>

                <Modal  style = {styles.modal}
                        animationType = {"fade"} transparent = {true}
                   visible = {this.state.modalShow}
                   onRequestClose = {() => { console.log("Modal has been closed.") } }>

                    <View style = {styles.modalMain}>

                        <Text style = {styles.modalTitle}>스터디룸 개설</Text>
                        <TouchableOpacity onPress={this.hideModal}>
                            <Image source={require('./img/close-button.png')}
                                 style = {styles.closeModalButton}/>
                        </TouchableOpacity>

                        <View style = {styles.inputGroup}>
                            <Text style = {styles.inputGroupType}>방 제목</Text>
                            <TextInput style = {styles.inputGroupContent}
                                   placeholder="방 제목 입력"
                                   onChange={(e) => {
                                       let studyRoomInfo = {...this.state.studyRoomInfo};
                                       studyRoomInfo.studyroomTitle = e.target.value;
                                       this.setState({studyRoomInfo});
                                   }}/>
                        </View>
                        <View style = {styles.inputGroup}>
                            <Text style = {styles.inputGroupType}>입장제한 레벨</Text>
                            <TextInput style = {[styles.inputGroupContent,styles.inputGroupContentSM]}
                                       placeholder="Lv.(예시: 3)"
                                       onChange={(e) => {
                                           let studyRoomInfo = {...this.state.studyRoomInfo};
                                           studyRoomInfo.studyroomMinLevel = e.target.value;
                                           this.setState({studyRoomInfo});
                                       }}/><Text style = {styles.leveldesc}>이상 입장 가능</Text>
                        </View>

                        {/*<div className="input-group">*/}
                            {/*<div className="type">스터디 진행 시간</div>*/}
                            {/*<div className="Time">*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomTime: 15});*/}
                                        {/*console.log(this.state.studyroomTime);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomTime === 15 ? "Button_Time_1 active" : "Button_Time_1"}>*/}
                                    {/*15m*/}
                                {/*</button>*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomTime: 30});*/}
                                        {/*console.log(this.state.studyroomTime);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomTime === 30 ? "Button_Time_2 active" : "Button_Time_2"}>*/}
                                    {/*30m*/}
                                {/*</button>*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomTime: 45});*/}
                                        {/*console.log(this.state.studyroomTime);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomTime === 45 ? "Button_Time_3 active" : "Button_Time_3"}>*/}
                                    {/*45m*/}
                                {/*</button>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="input-group">*/}
                            {/*<div className="type">최대 인원</div>*/}
                            {/*<div className="MaxUser">*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomMaxUser: 15});*/}
                                        {/*console.log(this.state.studyroomMaxUser);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomMaxUser === 15 ? "Button_MaxUser_1 active" : "Button_MaxUser_1"}>*/}
                                    {/*2명*/}
                                {/*</button>*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomMaxUser: 30});*/}
                                        {/*console.log(this.state.studyroomMaxUser);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomMaxUser === 30 ? "Button_MaxUser_2 active" : "Button_MaxUser_2"}>*/}
                                    {/*3명*/}
                                {/*</button>*/}
                                {/*<button*/}
                                    {/*onClick={() => {*/}
                                        {/*this.setState({studyroomMaxUser: 45});*/}
                                        {/*console.log(this.state.studyroomMaxUser);*/}
                                    {/*}}*/}
                                    {/*className={this.state.studyroomMaxUser === 45 ? "Button_MaxUser_3 active" : "Button_MaxUser_3"}>*/}
                                    {/*4명*/}
                                {/*</button>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<button className="submit-button" onClick={modalSubmit}>완료</button>*/}
                    </View>
                </Modal>

                <Text style={styles.title}>
                    {(this.state.category.categoryName === '자유주제' ? this.state.category.categoryName
                        : this.state.category.parentName + " > " + this.state.category.categoryName)}
                </Text>

                <TouchableOpacity onPress={()=>{this.showModal();}}>
                    <Image source={require('./img/button-fab-plus.png')}
                           style={styles.buttonPlus}/>
                </TouchableOpacity>

                <Text style={styles.listTitle}>스터디룸 리스트</Text>

                <View style={styles.studyRoomList}>
                    <ScrollView>{listItems}</ScrollView>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 30
    },
    listTitle: {
        fontSize: 20
    },
    studyRoomList: {
        alignItems: 'center'

    },
    studyRoom: {
        marginBottom: 30,
        width: 280,
        height: 325,
        borderRadius: 8,
        borderColor: '#e6e6e6',
        borderWidth: 1,
    },
    studyRoomHeader: {
        backgroundColor: "#bdbdbd",
    },
    studyRoomActive: {
        backgroundColor: "#ff6032"

    },
    studyRoomState: {
        color: "#ffffff"
    },
    studyRoomContent: {
        alignItems: 'center'
    },
    buttonPlus: {
        width: 75,
        height: 75
    },
    //MODAL
    modal: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    modalMain: {
        width: 300,
        height: 500,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        borderColor: '#e6e6e6',
        borderWidth: 1,

    },
    closeModalButton: {
        width: 13,
        height: 13,
    },
    modalTitle: {
        fontSize: 30

    },
    inputGroup: {

    },
    inputGroupType: {

    },
    inputGroupContent: {
        borderRadius: 8,
        borderColor: '#e6e6e6',
        borderWidth: 1,
    },
    inputGroupContentSM: {

    }

});

export default StudyroomList;