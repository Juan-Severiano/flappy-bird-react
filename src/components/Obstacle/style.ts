import { StyleSheet } from "react-native";

export const styles = ({xBody, yBody, widthbody, heightBody, color}) => StyleSheet.create({
    floor: {
        position: 'absolute', left: xBody, top: yBody ,width: widthbody, height: heightBody, backgroundColor: color
    }
})