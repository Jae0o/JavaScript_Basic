import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import aboutImage from "../assets/AboutImage.png";

export default function AboutPage() {
    const Box =
    {
        "idx": 0,
        "Catergory": "자동차",
        "Image": "/Users/jae0/Develop/Test/JsTip/assets/CarContentOne.png",
        "DeCategory": "자동차",
        "DeTitle": "벤츠 E클래스,풀체인지 11세대로 새롭게 등장하다",
        "DeSourse": "오토얼라인먼트",
        "Script": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }

    return (
        <View style={styles.Body}>
            <Text style={styles.Catergory}>{Box.Catergory}</Text>
            <View style={styles.MainBody}>
                <Text style={styles.Title}>{Box.DeTitle}</Text>
                <View style={styles.TextBox}>
                    <Image style={styles.MainImage} source={{ url: Box.Image }} />
                    <Text style={styles.DeSourse}>출처 : {Box.DeSourse}</Text>
                    <Text style={styles.MainText}>{Box.Script}</Text>
                    <TouchableOpacity style={styles.ButtonOne}>
                        <Text style={styles.ButtonOneText}>Instagram</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    Body: {
        backgroundColor: "#ffff",
        flex: 1,
        alignItems: "center",
        marginTop: 95,
        width: "95%",
        height: "auto",
        alignSelf: "center"
    },
    Catergory: {
        fontSize: 15,
        padding: 5,
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 5,
        margin: 8,
        alignSelf: "flex-start"
    },
    MainBody: {
        width: "95%",
        padding: 8,
    },
    Title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 30,
    },
    MainImage: {
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 10,
        width: "100%",
        height: 220
    },
    DeSourse: {
        margin: 5,
        marginBottom: 20,
    },
    MainText: {
        width: "100%",
        height: 250,
        padding: 5,
    },
    ButtonOne: {
        borderColor: "black",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 5,
        margin: 10,
        padding: 5,
        width: 100,
    },
    ButtonOneText: {
        fontSize: 15,
        textAlign: "center",
    }

})