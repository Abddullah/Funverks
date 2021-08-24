
import React from "react";
import { TextInput, View } from 'react-native';

const Inputs = ({ ...props }) => {
    return (
        <View style={{
            width: "90%",
            borderBottomColor: "#898886",
            borderBottomWidth: 1.4,
            // padding: 5,
            // backgroundColor: "red"
        }}>
            <TextInput
                secureTextEntry={props.secureText}
                keyboardType={props.type}
                style={{ height: 40, width: "90%", }}
                placeholder={props.placeHolder}
                value={props.val}
                onChangeText={(e) => props.setText(e, props.fieldName)}
            />
        </View>
    );
};
export default Inputs;
