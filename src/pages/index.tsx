import Products from ".././components/Products";
import Navbar from ".././components/Navbar";

export default function ShopPage() {
  return (
    <div className="px-4 md:px-6">
      <Navbar>Choco</Navbar>
      <Products submitTarget="/checkout" enabled={true} />
    </div>
  );
}
