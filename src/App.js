import { useMoralis } from "react-moralis";
import "./App.css";
import { Accordion } from "./components/Accordion";
import { AccordionProvider } from "./components/Accordion/AccordionProvider";
import { Balance } from "./components/Balance";
import { Profile } from "./components/Profile";
import { Transactions } from "./components/Transactions";

function App() {
  const { isAuthenticated, authenticate, user, logout } = useMoralis();

  const handleSignIn = () => {
    if (window.ethereum) {
      authenticate();
    } else alert("Please install metamask");
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated) {
    return (
      <div className="container mx-auto">
        <header className="flex justify-between items-center border-b py-4 px-2">
          <h3 className="text-xl">Dapp Dashboard</h3>
          <div className="flex items-center">
            <p className="mr-4">{user.getUsername()}</p>
            <button
              onClick={handleLogout}
              className="bg-purple-400 hover:bg-purple-300 font-bold text-purple-900 px-8 rounded-lg py-1"
            >
              Logout
            </button>
          </div>
        </header>
        <main className="mt-4">
          <AccordionProvider>
            <Accordion label={"Profile"}>
              <Profile />
            </Accordion>
            <Accordion label={"Balance"}>
              <Balance />
            </Accordion>
            <Accordion label={"Transactions (Last 5)"}>
              <Transactions />
            </Accordion>
          </AccordionProvider>
        </main>
      </div>
    );
  }
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <h3 className="text-xl">Dapp Dashboard</h3>
      <button
        onClick={handleSignIn}
        className="bg-purple-400 mt-4 hover:bg-purple-300 font-bold text-purple-900 px-8 rounded-lg py-1"
      >
        Sign In
      </button>
    </div>
  );
}

export default App;
