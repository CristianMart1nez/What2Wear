import { Clothing } from "../../components/Clothing/Clothing";
import "./MyClosetsPage.css";
import { ListClothing } from "../../components/ListClothing/ListClothing";
export const MyClosetsPage = () => {
  return (
    <>
    <h2>pantalones</h2>
      <div className="container-5items">
        <ListClothing />
      </div>
      <h2>camisetas</h2>
      <div className="container-5items">
        <ListClothing />
      </div>

      <div className="container-5items">
        <ListClothing />
      </div>

      <div className="container-5items">
        <ListClothing />
      </div>
    </>
  );
};
