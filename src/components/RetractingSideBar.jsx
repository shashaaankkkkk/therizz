"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FiArchive } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import reactLogo from "../assets/admin.svg";

export function Sidebar2() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={reactLogo}>
        Admin
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FiArchive}>
            Orders
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Customers
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Reviews
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={IoIosSettings}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
