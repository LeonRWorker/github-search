import DisplayUser from "./components/DisplayUser";
import SearchUser from "./components/SearchUser";
import { UserProvider } from "./context/UserContext";
import { LayoutContainer } from "./styles";

export default function App() {
  return <UserProvider>
    <LayoutContainer>
      <SearchUser />
      <DisplayUser />
    </LayoutContainer>
  </UserProvider>
}
