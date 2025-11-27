import icons from "@/constants/icons";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <TouchableOpacity>
        <Image source={icons.arrowleft} className="h-[15px] w-[18px]" />
      </TouchableOpacity>
      <Text className="text-[24px] font-semibold">Create Account</Text>
      <Text>Setup your account to get started</Text>
    </SafeAreaView>
  );
}
