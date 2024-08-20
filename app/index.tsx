import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }

  return <Redirect href="/(auth)/welcome" />;
};
export default Home;

//check old commit msg try
// git commit --date="YYYY-MM-DD HH:MM:SS" -m "Your commit message"
