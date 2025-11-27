import React from "react";
import { Text, View } from "react-native";

interface FormInterface {
  title: string;
}

const FormButton = ({ title }: FormInterface) => {
  return (
    <View className="h-[50px] bg-primary-900 rounded-[12px] items-center justify-center mb-3">
      <Text className="text-[14px] text-white font-poppins-medium">
        {title}
      </Text>
    </View>
  );
};

export default FormButton;
