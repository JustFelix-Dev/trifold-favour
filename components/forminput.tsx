import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface FormInterface {
  title: string;
  placeholder: string;
}
const FormInput = ({ title, placeholder }: FormInterface) => {
  return (
    <View className="mb-5">
      <Text className="text-[14px] font-poppins-medium text-black">
        {title}
      </Text>
      <View className="h-[45px] border-[1px] px-3 mt-2 border-gray-2 rounded-[8px]">
        <TextInput
          placeholder={placeholder}
          className="text-[14px] font-poppins text-[#bdbdbd]"
        />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
