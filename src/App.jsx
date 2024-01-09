import { useState } from "react";
import reactLogo from "./assets/react.svg";
import help from "./assets/help.svg";
import Menu from "./assets/Menu.png";
import Menu1 from "./assets/Menu1.png";
import Image from "./assets/Image.svg";
import viteLogo from "/vite.svg";
import Vector from "./assets/Vector.svg";
import "./App.css";

import home from "./assets/home.png";
import orders from "./assets/orders.png";
import products from "./assets/products.png";
import delivery from "./assets/delivery.png";
import marketing from "./assets/marketing.png";
import analytics from "./assets/analytics.png";
import payouts from "./assets/payouts.png";
import discounts from "./assets/discounts.png";
import audience from "./assets/audience.png";
import appearance from "./assets/appearance.png";
import plugins from "./assets/plugins.png";
import wallet from "./assets/wallet.png";

function App() {
  const [count, setCount] = useState(0);
  const navImages = [
    { name: "home", img: home },
    { name: "orders", img: orders },
    { name: "products", img: products },
    { name: "delivery", img: delivery },
    { name: "marketing", img: marketing },
    { name: "analytics", img: analytics },
    { name: "payouts", img: payouts },
    { name: "discounts", img: discounts },
    { name: "audience", img: audience },
    { name: "appearance", img: appearance },
    { name: "plugins", img: plugins },
  ];
  return (
    <div className="h-screen w-full flex flex-row m-0 p-0">
      <div className="w-[224px] h-screen bg-[#1E2640] flex flex-col justify-between">
        <div className="h-[64px] p-4 flex flex-row items-center">
          <div className="flex flex-row  w-full  items-center gap-3">
            <img src={Image} className="h-[39px] w-[39px]" />
            <div className="text-white">
              <p className="text-[15px] font-medium">Nishyan</p>
              <p className="text-[13px] underline">Visit Store</p>
            </div>
          </div>
          <img src={Vector} />
        </div>
        <div className="py-6 flex flex-col gap-2 p-4">
          {navImages.map((image) => (
            <div
              className={`flex flex-row items-center gap-3 rounded px-3 py-1 font-grot text-slate-300	 capitalize hover:bg-white hover:bg-opacity-10 transition ease-in-out cursor-pointer ${
                image.name === "payouts" &&
                "bg-white bg-opacity-10 font-semibold text-white"
              }`}
            >
              <img src={image.img} />
              <p
                className={` text-[18px] font-medium ${
                  image.name === "payouts" && "text-white"
                }`}
              >
                {image.name}
              </p>
            </div>
          ))}
        </div>
        <div className="grow p-4 flex flex-col justify-end">
          <div className="bg-[#353C53] p-2 rounded">
            <div className="flex flex-row items-center gap-3">
              <span className="p-2 rounded bg-white bg-opacity-10 font-inter">
                <img src={wallet} />
              </span>
              <div>
                <p className="text-[12px] text-slate-300	">Available Credits</p>
                <p className="text-[16px] font-medium text-white">$0.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grow">
        <header className="h-[64px] p-[32px] border flex justify-between items-center">
          <div className="flex flex-row gap-5 items-center ">
            <p className="font-grot text-2xl font-medium">Payouts</p>
            <span className="flex gap-2">
              <img src={help} />
              <span className="text-xs">How it works</span>
            </span>
          </div>
          <div></div>
          <div className="flex flex-row justify-end gap-[16px]">
            <img src={Menu1} />
            <img src={Menu} />
          </div>
        </header>
        <div className="h-full border pt-6 px-[32px] bg-[#fbfafb]">
          <div className="font-grot  text-[20px] font-semibold flex flex-row justify-between">
            <p>Overview</p>
            <select className="border p-1 px-3 ">
              <option>This Month</option>
            </select>
          </div>
          <div className="flex gap-5 my-6">
            <div className="grow rounded-md overflow-hidden">
              <div className="bg-[#146EB4] p-[20px] grow">
                <p className="flex flex-row gap-2 text-[16px] font-normal text-white">
                  Net Payout
                </p>
                <div className="flex justify-between items-center">
                  <p className=" text-[32px] font-medium text-white">
                    ₹2,312.23
                  </p>
                  <span className="text-[12px] text-white underline font-medium">
                    23 orders {">"}
                  </span>
                </div>
              </div>
              <div className="bg-[#0E4F82] text-white text-sm px-4 p-2 flex justify-between items-center">
                <span>Next payout date:</span>
                <span>Today, 04:00PM</span>
              </div>
            </div>

            <div className="p-[20px] h-min bg-white gap-[16px] grow">
              <p className="flex flex-row gap-2 text-[16px] font-normal text-[#4D4D4D]">
                Amount Pending <img src={help} />
              </p>
              <div className="flex justify-between items-center">
                <p className=" text-[32px] font-medium">₹92,312.20</p>
                <span className="text-[12px] text-[#146EB4] underline font-medium">
                  13 orders {">"}
                </span>
              </div>
            </div>
            <div className="p-[20px] h-min bg-white gap-[16px] grow">
              <p className="flex flex-row gap-2 text-[16px] font-normal text-[#4D4D4D]">
                Amount Processed <img src={help} />
              </p>
              <div className="flex justify-between items-center">
                <p className=" text-[32px] font-medium">₹23,92,312.19</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[24px] font-medium font-grot">
              Transactions | This Month
            </p>
            <div className="flex gap-5">
              <span className="bg-[#E6E6E6] text-center text-[14px] font-medium text-[#808080] px-4 py-2 rounded-full">
                Payouts (22)
              </span>
              <span className="bg-[#146EB4] text-[14px] text-white px-4 py-2 rounded-full text-center">
                Refunds (6)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
