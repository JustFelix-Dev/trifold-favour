import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AssessmentDetails() {
  const handleGoBack = () => {
    router.back();
  };

  const handleStartAssessment = () => {
    console.log("Start Assessment pressed");
    // Navigate to assessment questions
    // router.push("/assessment");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#F3FBFD" style="dark" />

      <View className="bg-[#F3FBFD] h-[40%] rounded-b-[35%]">
        <View className="flex-row  items-center justify-between px-6 pt-3">
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={icons.arrowleft}
              className="h-[17.46px] w-[17.9px]"
            />
          </TouchableOpacity>
          <Text className="text-[20px] font-poppins-semibold text-black">
            Finance
          </Text>
          <View />
        </View>
        <Image
          source={images.assesment_detail}
          className="h-[220px] w-[220px] self-center"
        />
      </View>
    </SafeAreaView>
  );
}
