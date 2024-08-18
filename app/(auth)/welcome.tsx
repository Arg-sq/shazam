import { useRef } from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  return (
    <SafeAreaView className="flex h-full items-center justify-between">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-primary-200" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-primary-500" />}
      ></Swiper>
    </SafeAreaView>
  );
};
export default OnBoarding;
