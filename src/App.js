import { useMoralis } from "react-moralis";
import "./App.css";
import { Balance } from "./components/Balance";
import { Profile } from "./components/Profile";
import { Transactions } from "./components/Transactions";

function App() {
  const { isAuthenticated, authenticate, user, logout } = useMoralis();

  const handleSignIn = () => {
    authenticate();
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated) {
    return (
      <div className="container mx-auto">
        <header className="flex justify-between items-center border-b py-4">
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
          <Profile />
          <Balance />
          <Transactions />
        </main>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <header className="flex justify-between my-4 items-center">
        <h3 className="text-xl">Dapp Dashboard</h3>
        <button
          onClick={handleSignIn}
          className="bg-purple-400 hover:bg-purple-300 font-bold text-purple-900 px-8 rounded-lg py-1"
        >
          Sign In
        </button>
      </header>
    </div>
  );
}

export default App;
