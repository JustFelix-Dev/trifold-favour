import FormButton from "@/components/formbutton";
import FormInput from "@/components/forminput";
import icons from "@/constants/icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white pt-6 px-5">
      <TouchableOpacity>
        <Image source={icons.arrowleft} className="h-[15px] w-[18px] mb-4" />
      </TouchableOpacity>
      <Text className="text-[24px] font-poppins-semibold">Create Account</Text>
      <Text className="text-[16px] font-poppins text-gray-1">
        Setup your account to get started
      </Text>
      {/* inputs */}
      <View className="mt-6">
        <FormInput title="Your Full name" placeholder="Enter your full name" />
        <FormInput title="Your Email address" placeholder="Email address" />
        <FormInput title="Create Password" placeholder="Password" eye={true} />
      </View>
      {/* privacy and policy */}
      <View className="flex-row items-center mb-10">
        <Image source={icons.box} className="h-[18px] w-[18px] mr-4" />

        <View className="flex-1">
          <Text className="text-[14px] font-poppins text-black">
            I agree to the{" "}
            <Text className="text-primary-900 underline">
              terms and conditions
            </Text>{" "}
            and
          </Text>
          <Text className="text-[14px] font-poppins text-primary-900 underline">
            privacy policy
          </Text>
        </View>
      </View>
      {/* button */}
      <FormButton title="Sign Up" />
      {/* or sign up with */}
      <View className="flex-row items-center justify-between mt-1 mb-4">
        <View className="w-[35%] h-[1px] bg-[#BDBDBD]" />
        <Text className="text-[12px] font-poppins text-[#616161]">
          Or sign up with
        </Text>
        <View className="w-[35%] h-[1px] bg-[#BDBDBD]" />
      </View>
      {/* social media logo */}
      <View className="flex-row items-center justify-between">
        <View className="h-[50px] w-[48%] bg-[#f5f5f5] justify-center items-center rounded-[12px]">
          <Image source={icons.google} className="h-[24px] w-[24px]" />
        </View>
        <View className="h-[50px] w-[48%] bg-[#f5f5f5] justify-center items-center rounded-[12px]">
          <Image source={icons.facebook} className="h-[24px] w-[24px]" />
        </View>
      </View>
    </SafeAreaView>
  );
}
