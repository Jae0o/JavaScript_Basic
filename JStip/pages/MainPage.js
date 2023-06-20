/* React, React Native, Expo 라이브러리에서 꺼내 사용할 기능들을
선언한 다음 가져와 사용 */

import React from 'react';
/* Image */
import main from '/Users/jae0/Develop/Test/JsTip/assets/MainAD.png'
import CarContentOne from '/Users/jae0/Develop/Test/JsTip/assets/CarContentOne.png'

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

/* Category list json */
import data from '../data.json';

// App.js 는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일
export default function App() {

    // 자주 발생하는 경고 창을 없애줌
    console.disableYellowBox = true;
    let Box = data.Box;
    let todayWeather = 21;

    // 화면을 반환
    // HTML 태그같이 생긴 문법은 JSX라고 하고 실제 화면을 그리는 문법.
    return (
        <ScrollView style={styles.Container}>
            <Text style={styles.waether}>날씨 : {todayWeather + "°C"}</Text>
            <Text style={styles.Title}> 제목 예정 </Text>
            <TouchableOpacity>
                <Image style={styles.ADImage} source={main} />
            </TouchableOpacity>
            <ScrollView style={styles.NavContainer} horizontal indicatorStyle={'white'}>
                <TouchableOpacity style={styles.NavButton1}><Text style={styles.ButtonText}> 리빙 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.NavButton2}><Text style={styles.ButtonText}> 경제 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.NavButton3}><Text style={styles.ButtonText}> 자동차 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.NavButton4}><Text style={styles.ButtonText}> 책방 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.NavButton5}><Text style={styles.ButtonText}> 패션뷰티 </Text></TouchableOpacity>
            </ScrollView>
            {/* 게시글 */}
            <View style={styles.ContentBox}>
                {/* <TouchableOpacity style={styles.content}>
          <Image style={styles.ContentImage} source={CarContentOne} />
          <View style={styles.ContentMain}>
            <Text style={styles.ContentCategory}>{}</Text>
            <Text style={styles.ContentTitle}>벤츠 E클래스,풀체인지 11세대로 새롭게 등장하다</Text>
            <Text style={styles.ContentSource}>오토얼라인먼트</Text>
          </View>
        </TouchableOpacity> */}
                {
                    Box.map((Content, i) => {
                        return (
                            <View style={styles.content} key={i}>
                                <Image style={styles.ContentImage} source={{ url: Content.Image }} />
                                <View style={styles.ContentMain}>
                                    <Text style={styles.ContentCategory}>{Content.DeCategory}</Text>
                                    <Text style={styles.ContentTitle}>{Content.DeTitle}</Text>
                                    <Text style={styles.ContentSource}>{Content.DeSourse}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.CopyLightBox}>
                <Text style={styles.CopyLightText}>해당 화면은 연습을 위해 만들어 놓은 연습장입니다.</Text>
            </View>
        </ScrollView>
    );
};

// style 변수 이름 답게 화면을 그리는 역할
// JSX 문법을 꾸며주는 내용을 담고 있다.
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
    },
    waether: {
        marginTop: 100,
        marginLeft: 30,
    },
    Title: {
        fontSize: 40,
        fontWeight: 1000,
        marginTop: 10,
        marginLeft: 110,
    },
    ADImage: {
        width: '90%',
        height: 100,
        alignSelf: 'center',
        marginTop: 30
    },
    NavContainer: {
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 25,
        marginRight: 10,
        height: 60,
    },
    NavButton1: {
        width: 100,
        height: 50,
        padding: 15,
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    NavButton2: {
        width: 100,
        height: 50,
        padding: 15,
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    NavButton3: {
        width: 100,
        height: 50,
        padding: 15,
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    NavButton4: {
        width: 100,
        height: 50,
        padding: 15,
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    NavButton5: {
        width: 100,
        height: 50,
        padding: 15,
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    ButtonText: {
        fontWeight: 800
    },
    // ---------------------------------- Content
    ContentBox: {
        alignSelf: 'center'
    },
    content: {
        margin: 5,
        width: '90%',
        height: 130,
        padding: 5,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5
    },
    ContentImage: {
        width: 120,
        height: 120,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "black",
        alignSelf: 'center',
        borderRadius: 5
    },
    ContentMain: {
        marginLeft: 5,
        height: 120,
        width: '64%',
        padding: 5,
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: "black",
        // borderRadius: 5,
        justifyContent: 'center',
    },
    ContentCategory: {
        fontSize: 13,
        fontWeight: "bold",
        color: 'blue'
    }
    ,
    ContentTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10
    },
    ContentSource: {
        fontSize: 11,
    },
    // ---------------------------------- CopyLight
    CopyLightBox: {
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CopyLightText: {
        width: '41%',
        height: 50,
        fontSize: 15,
        textAlign: 'center',
    }
});



// horizontal = 세로에서 가로로 item 바꿔줌

// 이미지 넣어볼수 있다면 넣어보기 
// 