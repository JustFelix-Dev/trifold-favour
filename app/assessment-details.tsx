import FormButton from "@/components/formbutton";
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
    router.push("/resources");
  };

  const instructionData = [
    { id: 1, text: "Think carefully about each question before you respond." },
    {
      id: 2,
      text: "There are no right or wrong answers. Just pick true answers.",
    },
    {
      id: 3,
      text: "Choose what truly reflects your current reality, not what you wish it was.",
    },
  ];

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
      {/* section b */}
      <View className="px-6 mt-4">
        <Text className="text-[14px] text-[#626262] leading-6">
          Healthy emotions make for healthy relationships. See how deeply you
          connect, care for, and stay emotionally present for your partner.
        </Text>
        <Text className="text-[16px] font-poppins-semibold mt-4 mb-2">
          Instructions
        </Text>
        <View>
          {instructionData.map((item, index) => {
            return (
              <View key={index} className="flex-row mb-3">
                {/* <View className="px-5 py-2 bg-[#F3FBFD]"> */}
                <Text className="text-[14px] text-[#0A9FC7] font-poppins-medium leading-6">
                  {item.id}.
                </Text>
                {/* </View> */}
                <Text className="text-[14px] text-[#626262] leading-6 ml-4 pr-4">
                  {item.text}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View className="mx-6 mt-10">
        <FormButton
          title="Start Assessment"
          onPress={() => handleStartAssessment()}
        />
      </View>
    </SafeAreaView>
  );
}
