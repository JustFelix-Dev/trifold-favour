import FormButton from "@/components/formbutton";
import FormInput from "@/components/forminput";
import icons from "@/constants/icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
  const handleSignIn = () => {
    // Add your login logic here
    console.log("Sign in pressed");
  };

  const handleSignUpPress = () => {
    router.push("/signup");
  };

  const handleForgotPassword = () => {
    // Add forgot password logic here
    console.log("Forgot password pressed");
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-10 px-5">
      <TouchableOpacity>
        <Image source={icons.arrowleft} className="h-[15px] w-[18px] mb-5" />
      </TouchableOpacity>
      <Text className="text-[24px] font-poppins-semibold">Sign In</Text>
      <Text className="text-[16px] font-poppins text-gray-1">
        Login to your account
      </Text>
      {/* inputs */}
      <View className="mt-6">
        <FormInput title="Email address" placeholder="Email address" />
        <FormInput title="Password" placeholder="Password" eye={true} />
      </View>
      {/* privacy and policy */}
      <View className="flex-row items-center mb-12">
        <Image source={icons.box} className="h-[18px] w-[18px] mr-3" />
        <Text className="text-[14px] font-poppins text-black flex-1">
          Remember Me
        </Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text className="text-[14px] font-poppins-medium text-primary-900 underline">
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* button */}
      <FormButton title="Sign In" onPress={handleSignIn} />
      {/* or sign up with */}
      <View className="flex-row items-center justify-between mt-2 mb-5">
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
      <View className="mt-20">
        <Text className="text-[14px] font-poppins text-center">
          Don't have an account?{" "}
          <Text className="font-poppins-medium underline" onPress={handleSignUpPress}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
