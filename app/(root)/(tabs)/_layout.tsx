import { Tabs } from "expo-router";
import TabScreen from "./components/TabScreen";

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
      <TabScreen />
    </Tabs>
  );
};
export default Layout;
