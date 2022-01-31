import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
    </>
  );
}
