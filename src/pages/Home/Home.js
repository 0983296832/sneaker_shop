import React, { useEffect } from "react";

import Connectionlist from "../../components/Connection/Connectionlist";
import Featuredlist from "../../components/Featured/Featuredlist";
import Womenlist from "../../components/Women/Womenlist";
import Offer from "../../components/Offer/Offer";
import Newlist from "../../components/New/Newlist";
import Newletter from "../../components/New/Newletter";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";

import { animateScroll as scroll } from "react-scroll";
export default function Home() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <main className="l-main">
      <Header />
      <Featuredlist />
      <Connectionlist />
      <Womenlist />
      <Offer />
      <Newlist />
      <Slider />
      <Newletter />
    </main>
  );
}
