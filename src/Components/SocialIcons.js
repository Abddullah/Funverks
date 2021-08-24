
import React from "react";
import { Image, TouchableOpacity } from 'react-native';

const SocialIcons = ({ ...props }) => {
    return (
        <TouchableOpacity style={{ borderRadius: 12, overflow: "hidden" }}>
            <Image
                source={props.Path}
                resizeMode="contain"
                style={{ height: 70, width: 70, }}
            />
        </TouchableOpacity>
    );
};
export default SocialIcons;
