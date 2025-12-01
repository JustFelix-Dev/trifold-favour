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
      title: "Enhancing Physical Connection",
      desc: 'Jesudamilare "JD" Adesegun-David',
      image: images.image2,
    },
    {
      id: 3,
      title: "Promoting Shared Goals",
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
        <View className="mt-6 mb-2 bg-white rounded-[12px] px-3 py-2">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-[16px] font-poppins-semibold text-black">
              Articles
            </Text>
            <TouchableOpacity>
              <Text className="text-[12px] font-poppins text-primary-600">
                More
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {articlesData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  className="flex-row items-center mb-2"
                >
                  <Image
                    source={item.image}
                    className="w-[90px] h-[69px] rounded-[6px]"
                    resizeMode="cover"
                  />
                  <View className="flex-1 ml-3">
                    <Text className="text-[13px] font-poppins-semibold text-black mb-1">
                      {item.title}
                    </Text>
                    <Text className="text-[11.5px] font-poppins text-gray-1">
                      {item.desc}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={icons.bookmark}
                      className="w-[12px] h-[14px]"
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* books */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-[16px] font-poppins-semibold text-black">
              Books
            </Text>
            <TouchableOpacity>
              <Text className="text-[12px] font-poppins text-primary-600">
                More
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center justify-between">
            <TouchableOpacity className="bg-white rounded-[12px] p-3 w-[48%]">
              <Image
                source={images.image1}
                className="w-full h-[120px] rounded-[8px] mb-3"
                resizeMode="cover"
              />
              <Text className="text-[12px] font-poppins-medium text-black mb-1">
                Vision-Driven Marriage
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white rounded-[12px] p-3 w-[48%]">
              <Image
                source={images.image2}
                className="w-full h-[120px] rounded-[8px] mb-3"
                resizeMode="cover"
              />
              <Text className="text-[12px] font-poppins-medium text-black mb-1">
                Believers' Authority
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Resources;
