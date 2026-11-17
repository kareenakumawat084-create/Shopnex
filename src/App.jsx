import { BrowserRouter, Route, Routes } from "react-router-dom"
import Ethnic from "./Components/Ethnic"
import Home from "./Components/Home"
import Western from "./Components/Western"
import Mens from "./Components/Mens"
import Homedecor from "./Components/Homedecor"
import Beauty from "./Components/Beauty"
import Footwear from "./Components/Footwear"
import Diwali from "./Components/Diwali"
import ScrollToTop from "./Components/ScrollToTop"
import Mobile from "./Components/Mobile"
import Kidstoys from "./Components/Kidstoys"
import Handpurse from "./Components/Handpurse"
import Perfume from "./Components/Perfume"
import Watches from "./Components/Watches"
import Jewellery from "./Components/Jewellery"
import Plum from "./Components/Plum"
import Himalaya from "./Components/Himalaya"
import Mamaearth from "./Components/Mamaearth"
import Bata from "./Components/Bata"
import Kidsclothes from "./Components/Kidsclothes"
import Saree from "./Components/Saree"
import Seller from "./Components/Seller"
import Summer from "./Components/Summer"
import Earrings from "./Components/Earrings"


function App() {

  return (
    <>


      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Ethnic" Component={Ethnic} />
          <Route path="/Western" Component={Western} />
          <Route path="/Mens" Component={Mens} />
          <Route path="/Homedecor" Component={Homedecor} />
          <Route path="/Beauty" Component={Beauty} />
          <Route path="/Footwear" Component={Footwear} />
          <Route path="/Diwali" Component={Diwali} />
          <Route path="/Mobile" Component={Mobile} />
          <Route path="/Kidstoys" Component={Kidstoys} />
          <Route path="/Handpurse" Component={Handpurse} />
          <Route path="/Perfume" Component={Perfume} />
          <Route path="/Watches" Component={Watches} />
          <Route path="/Jewellery" Component={Jewellery} />
          <Route path="/Plum" Component={Plum} />
          <Route path="/Himalaya" Component={Himalaya} />
          <Route path="/Mamaearth" Component={Mamaearth} />
          <Route path="/Bata" Component={Bata} />
          <Route path="/Kidsclothes" Component={Kidsclothes} />
          <Route path="/Saree" Component={Saree} />
          <Route path="/Seller" Component={Seller} />
          <Route path="/Summer" Component={Summer} />
          <Route path="/Earrings" Component={Earrings} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
