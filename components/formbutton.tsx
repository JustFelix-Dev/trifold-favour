import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface FormInterface {
  title: string;
}

const FormButton = ({ title }: FormInterface) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className="h-[50px] bg-primary-900 rounded-[12px] items-center justify-center mb-3"
    >
      <Text className="text-[14px] text-white font-poppins-medium">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FormButton;
