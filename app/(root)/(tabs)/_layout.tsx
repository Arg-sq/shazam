import { Tabs } from "expo-router";
import TabIcon from "../../components/TabIcon";
import { tabData } from "@/constants";

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          borderRadius: 50,
          paddingBottom: 0,
          overflow: "hidden",
          marginBottom: 20,
          marginHorizontal: 20,
          height: 78,
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
        },
      }}
    >
      {tabData.map((tab, index) => (
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
      ))}
    </Tabs>
  );
};
export default Layout;
