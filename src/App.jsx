import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "./Pages/Activity";
import Auction from "./Pages/Auction";
import Notfound from "./Pages/ErrorPage";
import ExploreMain from "./Pages/Explore/Explore";
import Leaderboard from "./Pages/Explore/Explore/Leaderboard";
import ExploreDetails from "./Pages/Explore/ExploreDetails";
import LiveAuctionPage from "./Pages/Explore/LiveAuction/LiveAuctionPage";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Layers/Footer";
import Contact from "./Pages/Pages/Contact";
import CreateItems from "./Pages/Pages/CreateItems";
import Collection from "./Pages/Pages/Page/Collection";
import Wallet from "./Pages/Pages/Page/Wallet";
import Ranking from "./Pages/Ranking";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<ExploreMain />} />

          <Route path="/explore/:id" element={<ExploreDetails />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/ranking" element={<Ranking />} />

          <Route path="/auction" element={<LiveAuctionPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/create" element={<CreateItems />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
