import icons from "@/constants/icons";
import images from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Resources = () => {
  const categoryData: string[] = [
    "All",
    "Articles",
    "Books",
    "Videos",
    "Audios",
  ];
  const articlesData = [
    {
      id: 1,
      title: "Strengthening Emotional Intimacy",
      desc: 'Jesudamilare "JD" Adesegun-David',
      image: images.image1,
    },
    {
      id: 2,
      title: "Strengthening Emotional Intimacy",
      desc: 'Jesudamilare "JD" Adesegun-David',
      image: images.image2,
    },
    {
      id: 3,
      title: "Strengthening Emotional Intimacy",
      desc: 'Jesudamilare "JD" Adesegun-David',
      image: images.image3,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#fbf8fd]">
      <StatusBar style="dark" backgroundColor="#ffffff" />
      {/* header */}
      <View className="bg-white flex-row items-center justify-between px-6 pt-5 pb-2">
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
        {/* categories */}
        <View className="flex-row items-center justify-between mt-5">
          {categoryData.map((item, index) => {
            return (
              <View
                key={index}
                className={`h-[25px] w-[60px] ${index === 0 ? "bg-primary-900" : "bg-white border-[1px] border-[#fbf8fd]"} rounded-[12px] items-center justify-center `}
              >
                <Text
                  className={`text-[12px] ${index === 0 ? "text-white" : "text-primary-600"} font-poppins`}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>
        {/* articles */}
        <View>
          <View>
            {articlesData.map((item, index) => {
              return (
                <View key={index}>
                  <Image source={item.image} />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Resources;
