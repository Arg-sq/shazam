import { ButtonProps } from "@/types/type";
import { Text, TouchableOpacity } from "react-native";

const getBgVariantStyle: {
  [key in NonNullable<ButtonProps["bgVariant"]>]: string;
} = {
  primary: "bg-[#0286ff]",
  secondary: "bg-gray-500",
  danger: "bg-red-500",
  success: "bg-green-500",
  outline: "bg-transparent border-neutral-300 border-[0.5px]",
};

const getTextVariantStyle: {
  [key in NonNullable<ButtonProps["textVariant"]>]: string;
} = {
  primary: "text-black",
  secondary: "text-gray-100",
  danger: "text-red-100",
  success: "text-green-100",
  default: "text-white",
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    className={`w-11/12 py-2 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle[bgVariant]} ${className}`}
    onPress={onPress}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${getTextVariantStyle[textVariant]}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);
export default CustomButton;
