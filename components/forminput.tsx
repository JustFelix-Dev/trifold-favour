import icons from "@/constants/icons";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FormInterface {
  title: string;
  placeholder: string;
  eye?: boolean;
  ctnStyle?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  className?: string;
}
const FormInput = ({
  title,
  placeholder,
  eye,
  ctnStyle,
  value,
  onChangeText,
  className,
}: FormInterface) => {
  return (
    <View className={`mb-5 ${className || ""}`}>
      <Text className="text-[14px] font-poppins-medium text-black">
        {title}
      </Text>
      <View className="h-[45px] border-[1px] px-3 mt-2 border-gray-2 rounded-[8px] flex-row items-center justify-between">
        <TextInput
          placeholder={placeholder}
          className="text-[14px] font-poppins text-black flex-1"
          secureTextEntry={eye}
          value={value}
          onChangeText={onChangeText}
        />
        {eye && (
          <TouchableOpacity>
            <Image
              source={icons.eyeclose}
              className="h-[15.01px] w-[18.75px]"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
