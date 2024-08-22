import { tabData } from "@/constants";
import { Tabs } from "expo-router";
import TabIcon from "./TabIcon";

const TabScreen = () => {
  return tabData.map((tab, index) => (
    <Tabs.Screen
      key={index}
      name={tab.name}
      options={{
        title: tab.title,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={tab.image} />
        ),
      }}
    />
  ));
};

export default TabScreen;
