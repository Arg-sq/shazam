import { icons, images } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";
import InputField from "../components/InputField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import OAuth from "../components/Oauth";

const SignIp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignInPress = async () => {
    return;
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>

        <View className="  p-5 ">
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <View className="items-center">
            <CustomButton
              title="Sign In"
              className="mt-6"
              onPress={onSignInPress}
            />
          </View>
          <OAuth />
          <Link
            href="/sign-up"
            className="text-md text-center text-general-200 mt-4"
          >
            <Text>Don;t hvae an account? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignIp;
