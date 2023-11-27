import "./App.css";
// components
import AccordionArea from "./components/accordion";
import OrderSummary from "./components/orderSummary";
import CartLayout from "./components/cartLayout";
// pages
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <div style={{}}>
        <header
          style={{
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          App Rendering Components
        </header>
        <br />
        <center>
          <h1
            style={{
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            All Components are renderd here
          </h1>
        </center>
        {/* components */}

        <AccordionArea />
        <AccordionArea />
        <AccordionArea />
        <AccordionArea />
        <AccordionArea />
        <OrderSummary />
        <CartLayout />

        {/* pages */}

        <CartPage />
      </div>
    </>
  );
}

export default App;
