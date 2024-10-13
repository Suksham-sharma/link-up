import { redirect } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { auth } from "./lib/auth";

const Home = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }
  return <Navbar />;
};

export default Home;
