import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Resources = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#fbf8fd]">
      <StatusBar style="dark" backgroundColor="#ffffff" />
      {/* header */}
      <View className="bg-white flex-row items-center justify-between px-6 pt-3">
        <TouchableOpacity>
          <Image source={icons.arrowleft} className="h-[15px] w-[18px]" />
        </TouchableOpacity>
        <Text className="text-[20px] text-black font-poppins-semibold ">
          Communication
        </Text>
        <View />
      </View>
      <View className="px-6 mt-5">
        {/* search section */}
        <View className=" rounded-[8px] h-[46px] bg-white flex-row items-center px-3">
          <Image source={icons.search} className="h-[15.75] w-[15.75]" />
          <TextInput
            className="text-[14px] text-black ml-2"
            placeholder="Search"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Resources;
