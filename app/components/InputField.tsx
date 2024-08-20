import { InputFieldProps } from "@/types/type";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* ensure that the view remains visible when the keyboard is displayed. It automatically adjusts its height, position, or padding when the keyboard is shown, ensuring that the input fields remain visible and accessible.  */}
      <TouchableWithoutFeedback>
        {/* It's mainly used when you need to capture touch events without altering the appearance of the wrapped components. */}
        <View className="mr-2 pb-4 w-full">
          <Text className={`text-md font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle} `} />
            )}
            <TextInput
              className={`rounded-full p-4 font-JakartaSemiBold text-[14px] flex-1 text-left ${inputStyle}`}
              placeholderTextColor={"gray"}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default InputField;
