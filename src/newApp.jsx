import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import NorthIcon from "@mui/icons-material/North";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import help from "./assets/help.svg";
import Menu from "./assets/Menu.png";
import Menu1 from "./assets/Menu1.png";
import Image from "./assets/Image.svg";
import viteLogo from "/vite.svg";
import Vector from "./assets/Vector.svg";
import "./App.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
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

const drawerWidth = 240;

function ResponsiveDrawer(props) {
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
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="h-screen flex flex-col justify-between bg-[#1E2640]">
      <div>
        <Toolbar className="h-[64px] p-4 flex flex-row items-center">
          <div className="flex flex-row  w-full  items-center gap-3">
            <img src={Image} className="h-[39px] w-[39px]" />
            <div className="text-white">
              <p className="text-[15px] font-medium">Nishyan</p>
              <p className="text-[13px] underline">Visit Store</p>
            </div>
          </div>
          <img src={Vector} />
        </Toolbar>
        <Divider />
        <List className="bg-[#1E2640] flex flex-col justify-between gap-3 ">
          {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
          {navImages.map((image) => (
            <ListItem
              key={image.name}
              disablePadding
              className={`flex flex-row items-center gap-3 rounded px-[24px] py-1 font-grot text-slate-300	 capitalize hover:bg-white hover:bg-opacity-10 transition ease-in-out cursor-pointer ${
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
            </ListItem>
          ))}
        </List>
      </div>

      <div className=" p-4 flex flex-col justify-end">
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
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [data, setData] = useState([
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Processing",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
    {
      orderId: "#281209",
      status: "Successfull",
      transactionId: "131634495747",
      refundDate: "Today, 08:45 PM",
      orderAmount: "₹2,312.23",
    },
  ]);
  const [cols, setCols] = useState([
    "Order Id",
    "Status",
    "Transaction Id",
    "Refund Date",
    "Order Amount",
  ]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <div className="bg-white text-black shadow-sm drop-shadow-none flex flex-row px-8">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <header className="h-[64px] cust_sm:p-[10px]  w-full flex justify-between items-center">
            <div className="flex flex-row gap-5 items-center ">
              <p className="font-grot text-2xl font-medium">Payouts</p>
              <span className="flex gap-2">
                <img src={help} />
                <span className="text-xs">How it works</span>
              </span>
            </div>
            <div className="relative border w-1/2 bg-[##F2F2F2] cust_sm:hidden  rounded">
              <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 " />
              <input
                className="rounded  px-4 pl-10 py-2 w-full placeholder:text-inter "
                placeholder="Search features, tutorials, etc."
              />
            </div>
            <div className="flex flex-row justify-end gap-[16px]">
              <img src={Menu1} />
              <img src={Menu} />
            </div>
          </header>
        </div>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          //   p: 3,
          minHeight: "90vh",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar className="bg-[#fbfafb] border-none" />
        <div className="h-full border pt-6 px-[32px] bg-[#fbfafb]">
          <div className="font-grot  text-[20px] font-semibold flex flex-row justify-between">
            <p>Overview</p>
            <select className="border rounded p-1 px-3 ">
              <option>This Month</option>
            </select>
          </div>
          <div className="flex cust_sm:flex-col gap-5 my-6">
            <div className="grow rounded-md overflow-hidden">
              <div className="bg-[#146EB4] p-[20px] grow">
                <p className="flex flex-row gap-2 text-[16px] font-normal text-white">
                  Net Payout
                </p>
                <div className="flex justify-between items-center">
                  <p className=" text-[32px] font-medium text-white">
                    ₹2,312.23
                  </p>
                  <span className="text-[15px] text-white underline font-medium">
                    23 orders
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
                <span className="text-[15px] text-[#146EB4] underline font-medium">
                  13 orders
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
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-semibold font-grot">
                Transactions | This Month
              </p>
              <div className="flex gap-5">
                <span className="bg-[#E6E6E6] hover:bg-[#146EB4] hover:text-white text-center text-[14px] font-medium text-[#808080] px-4 py-2 rounded-full">
                  Payouts (22)
                </span>
                <span className="bg-[#146EB4] text-[14px] text-white px-4 py-2 rounded-full text-center">
                  Refunds (6)
                </span>
              </div>
            </div>
            <div className="p-[12px] flex flex-col gap-[12px] rounded bg-white">
              <div className="flex flex-row flex-wrap gap-3 justify-between items-center">
                <div className="relative border w-1/3 cust_sm:w-full  rounded">
                  <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 " />
                  <input
                    className="rounded  px-4 pl-10 py-2 w-full"
                    placeholder="Order Id or Transaction Id"
                  />
                </div>
                <div className="flex flex-row gap-3 cust_sm:w-full justify-end items-center">
                  <div className="flex flex-row gap-1 border rounded px-[12px] py-[6px]">
                    <span className="text-[16px] font-inter">Sort</span>
                    <span className="flex flex-row gap-0">
                      <NorthIcon
                        className="p-0 -mr-2 text-[#4D4D4D]"
                        fontSize="small"
                      />
                      <NorthIcon
                        className="rotate-180 text-[#4D4D4D]"
                        fontSize="small"
                      />
                    </span>
                  </div>
                  <div className="px-[12px] py-[6px] border rounded">
                    <FileDownloadOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full overflow-scroll ">
                <div className="min-w-[100px] flex text-grot  flex-row gap-10  cust_sm:w-fit w-full bg-[#F2F2F2] px-[10px] py-[12px] rounded items-center justify-between">
                  {cols.map((item) => {
                    return (
                      <div className="flex whitespace-nowrap text flex-row gap-3 text-[14px] font-medium text-[#4D4D4D]">
                        <p>{item}</p>
                      </div>
                    );
                  })}
                  {}
                </div>
                {data.map((item, index) => {
                  return (
                    <div
                      className={`min-w-[100px] cust_sm:w-fit w-full flex gap-10 flex-row text-[14px] font-medium font-inter justify-between px-[10px] py-[12px] border-b-2  ${
                        data.length - 1 === index
                          ? " border-none "
                          : " border-b-2"
                      }}`}
                    >
                      <span className="text-[#146EB4]">{item.orderId}</span>
                      <span>{item.status}</span>
                      <span>{item.transactionId}</span>
                      <span>{item.refundDate}</span>
                      <span>{item.orderAmount}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
