import { icons, images } from "@/constants";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
import InputField from "../components/InputField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import OAuth from "../components/Oauth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showSuccessModal, setShowSuccesModal] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [signningUp, setSigningUp] = useState(false);
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setSigningUp(true);
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setSigningUp(false);

      setVerification({ ...verification, state: "pending" });
    } catch (err: any) {
      setSigningUp(false);

      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          error: "Verification Failed",
          state: "failed",
        });

        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>

        <View className="  p-5 ">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
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
              title={
                signningUp ? (
                  <ActivityIndicator animating={signningUp} />
                ) : (
                  "Sign Up"
                )
              }
              bgVariant={!signningUp ? "primary" : "secondary"}
              className="mt-6"
              disabled={signningUp}
              onPress={onSignUpPress}
            />
          </View>
          <OAuth />
          <Link
            href="/sign-in"
            className="text-md text-center text-general-200 mt-4"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccesModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="text-2xl font-JakartaExtraBold text-black mb-2">
              Verification
            </Text>
            <Text className="mt-2 text-center text-gray-400">
              We've sent a verification code to {form.email}
            </Text>
            <InputField
              label="Code"
              icon={icons.lock}
              placeholder="123456"
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-center mt-2">
                {verification.error}
              </Text>
            )}
            <View className="flex items-center">
              <CustomButton
                bgVariant="success"
                title="Verify Email"
                className="mt-5"
                onPress={onPressVerify}
              />
            </View>
          </View>
        </ReactNativeModal>

        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="mt-2 text-center text-gray-400">
              You've successfully verified your account.
            </Text>
            <View className="flex items-center">
              <CustomButton
                title="Go Home"
                bgVariant="success"
                className="mt-5"
                onPress={() => {
                  setShowSuccesModal(false);
                  router.push("/(root)/(tabs)/home");
                }}
              />
            </View>
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};
export default SignUp;
