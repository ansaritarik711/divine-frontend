import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/Home/Home";
import About from "./component/Home/About";
import Contact from "./component/Home/Contact";
import Cart from "./component/Home/Cart";
import Ourshop from "./component/Home/Ourshop";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/about" component={About} />
        <Route  exact path="/contact us" component={Contact} />
        <Route  exact path="/cart" component={Cart} />
        <Route  exact path="/our shop" component={Ourshop} />


        </Switch>
      </Layout>
    </Router>
    
  );
}

export default App;
