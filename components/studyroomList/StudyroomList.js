import React, {Component} from "react";
import {Text, TextInput, View, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Modal} from "react-native";
import StudyCategory from "../studyCategory/StudyCategory";


class StudyroomList extends React.Component {

    state = {
        categoryID: this.props.navigation.getParam('categoryID'),
        studyroomList: [
            {
                studyroomID: 1,
                studyroomState: 'start',
                studyroomTitle: "공부같이 해요",
                studyroomMaxUser: 4,
                studyroomTime: 35,
                studyroomMinLevel: 2
            },
            {
                studyroomID: 1,
                studyroomState: 'pending',
                studyroomTitle: "취업준비해요",
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
            {
                studyroomID: 1,
                studyroomState: 'pending',
                studyroomTitle: "취업준비해요",
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
            <TouchableOpacity
                onPress={()=> {
                    if(studyRoom.studyroomState === "pending")
                        this.props.navigation.navigate('StudyroomStart', {studyroomID: studyRoom.studyroomID});
                    else {

                    }
                }}
                key={i} style={styles.studyRoom}>
                <View style={styles.studyRoomHeader}>
                    <View>
                        {studyRoom.studyroomState === "pending" ?
                            <Image source={require('./img/status_waiting.png')}
                                   style={styles.statusButton}/>
                            : <Image source={require('./img/status_progressing.png')}
                                     style={styles.statusButton}/>}
                    </View>
                    <Text style={styles.studyroomTitle}> {studyRoom.studyroomTitle} </Text>
                </View>

                <View style={styles.studyRoomContent}>
                    <View style={styles.table}>
                        <View style={styles.tablebody}>
                            <View style={styles.tablecell}>
                                <Text style={styles.tableLabel}>참여인원</Text>
                                <Text style={styles.tableTextStrong}>
                                    {studyRoom.studyroomMaxUser}
                                    <Text style={styles.tableText}> / 4</Text>
                                </Text>

                            </View>
                            <View style={styles.tablecell}>
                                <Text style={styles.tableLabel}>진행시간</Text>
                                <Text style={styles.tableTextStrong}>{studyRoom.studyroomTime}
                                    <Text style={styles.tableText}>m</Text>
                                </Text>

                            </View>
                            <View style={[styles.tablecell, styles.tablecellLast]}>
                                <Text style={styles.tableLabel}>입장레벨</Text>
                                <Text style={styles.tableTextStrong}>
                                    <Text style={styles.tableText}>Lv.</Text>
                                    {studyRoom.studyroomMinLevel}
                                    <Image source={require('./img/ic-arrow.png')}
                                           style={styles.levelArrow}/>
                                </Text>

                            </View>
                        </View>
                    </View>
                    <View>
                        {studyRoom.studyroomState === "pending" ?
                            <Image source={require('./img/button_next_category_active.png')}
                                   style={{width: 24, height: 24, marginTop: 20, marginLeft: 90}}/>
                            : <Image source={require('./img/button_next_category.png')}
                                     style={{width: 24, height: 24, marginTop: 20, marginLeft: 90}}/>}
                    </View>

                </View>

            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>

                <Modal style={styles.modal}
                       animationType={"fade"} transparent={true}
                       visible={this.state.modalShow}
                       onRequestClose={() => {
                           console.log("Modal has been closed.")
                       }}>

                    <View style={styles.modalMain}>

                        <Text style={styles.modalTitle}>스터디룸 개설</Text>
                        <TouchableOpacity onPress={this.hideModal}>
                            <Image source={require('./img/close-button.png')}
                                   style={styles.closeModalButton}/>
                        </TouchableOpacity>

                        <View style={styles.inputGroup}>
                            <Text style={styles.inputGroupType}>방 제목</Text>
                            <TextInput style={styles.inputGroupContent}
                                       placeholder="방 제목 입력"
                                       onChange={(e) => {
                                           let studyRoomInfo = {...this.state.studyRoomInfo};
                                           studyRoomInfo.studyroomTitle = e.target.value;
                                           this.setState({studyRoomInfo});
                                       }}/>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.inputGroupType}>입장제한 레벨</Text>
                            <TextInput style={[styles.inputGroupContent, styles.inputGroupContentSM]}
                                       placeholder="Lv.(예시: 3)"
                                       onChange={(e) => {
                                           let studyRoomInfo = {...this.state.studyRoomInfo};
                                           studyRoomInfo.studyroomMinLevel = e.target.value;
                                           this.setState({studyRoomInfo});
                                       }}/><Text style={styles.leveldesc}>이상 입장 가능</Text>
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

                <Text style={styles.listTitle}>스터디룸 리스트</Text>

                <View style={styles.studyRoomList}>
                    <ScrollView>{listItems}</ScrollView>
                </View>

                <TouchableOpacity onPress={() => {
                    this.showModal();
                    console.log("Modal has been closed.");
                }}>
                    <Image source={require('./img/button-fab-plus.png')}
                           style={styles.buttonPlus}/>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        paddingVertical: 28,
        paddingHorizontal: 16,
        height: '100%'
    },
    title: {
        width: 74,
        height: 21,
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.21,
        color: "#4a4a4a",
        marginBottom: 18
    },
    listTitle: {
        width: 74,
        height: 15,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.14,
        color: "#888888",
        marginBottom: 8

    },
    studyRoomList: {
        alignItems: 'center'

    },
    studyRoom: {
        width: 328,
        height: 100,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgba(155, 155, 155, 0.3)",
        marginBottom: 10

    },
    studyRoomHeader: {
        width: 328,
        height: 40.8,
        borderRadius: 4,
        backgroundColor: "rgba(155, 155, 155, 0.1)",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 13,
        // paddingHorizontal: 12
    },
    statusButton: {
        width: 47,
        height: 17,
        marginRight: 10
    },
    studyroomTitle: {
        width: 238,
        height: 20,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.2,
        color: "#4a4a4a"
    },
    studyRoomContent: {
        flexDirection: 'row'

    },
    buttonPlus: {
        width: 75,
        height: 75,
        position: 'absolute',
        bottom: 40,
        right: 0
    },
    table: {
      marginTop: 12.1,
        marginLeft: 9
    },
    tableheader: {
        flexDirection: 'row'
    },
    tablebody: {
        flexDirection: 'row'
    },
    tablecell: {
        flexDirection: 'column',
        width: 61.8,
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
    },
    tablecellLast: {
        borderRightWidth: 0
    },
    tableLabel: {
        height: 15,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.17,
        textAlign: "center",
        color: "#aeaeae",
    },
    tableTextStrong: {
        fontSize: 13,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: -0.49,
        textAlign: "center",
        color: "#ff6032",
        height: 19,

    },
    tableText: {
        color: '#9b9b9b',
        fontSize: 11,
    },
    levelArrow: {
        width: 7,
        height: 10,
    },
    //MODAL
    modal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        paddingHorizontal: '50%',
        paddingVertical: '50%'
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
    inputGroup: {},
    inputGroupType: {},
    inputGroupContent: {
        borderRadius: 8,
        borderColor: '#e6e6e6',
        borderWidth: 1,
    },
    inputGroupContentSM: {}

});

export default StudyroomList;