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
        <FormInput title="Create Password" placeholder="Password" />
      </View>
    </SafeAreaView>
  );
}
