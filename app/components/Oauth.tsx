import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = () => {};
  return (
    <View className="items-center">
      <View className="flex flex-row justify-center items-center my-4">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-md">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>
      <CustomButton
        title="Log in with Google"
        bgVariant="outline"
        textVariant="primary"
        className="h-[50px]"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 g-5 mx-2"
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
export default OAuth;
