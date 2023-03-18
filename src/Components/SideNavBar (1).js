import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { appContext } from "../context/ContextProvider";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  ChatBubbleBottomCenterIcon,
  ArrowLeftOnRectangleIcon,
  RectangleStackIcon,
  UsersIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

function NavBar(props) {
  const  { user, setUser, setToken, setPermissions, permissions } =
    useContext(appContext);
  const location = useLocation();

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isOpen, setisOpen] = useState(false)

  const navigation = [
    {
      name: "Dashboard",
      icon: HomeIcon,
      path: "dashboard",
      permission: "view-dashboard",
    },
    {
      name: "Beneficiaries",
      icon: UserGroupIcon,
      path: "beneficiary",
      permission: "view-beneficiary",
    },
    {
      name: "Eligibility",
      icon: ScaleIcon,
      path: "eligibility",
      permission: "view-eligibility",
    },
    {
      name: "Pre-Auth",
      icon: ClockIcon,
      path: "pre-auth",
      permission: "view-preauth",
    },
    {
      name: "Claims",
      icon: ChatBubbleBottomCenterIcon,
      path: "claims",
      permission: "view-claims",
    },
    {
      name: "Payment Reconciliation",
      icon: CreditCardIcon,
      path: "payment-reconciliation",
      permission: "view-payments",
    },
    {
      name: "Physicians",
      icon: BellIcon,
      path: "physician",
      permission: "view-physicians",
    },
  ];
  const secondaryNavigation = [
    { name: "ACL", path: "acl", icon: CogIcon, permission: "view-acl" },
    { name: "Users", path: "users", icon: UsersIcon, permission: "view-users" },
    {
      name: "Payers",
      path: "ptpa",
      icon: ShieldCheckIcon,
      permission: "view-payers",
    },
    {
      name: "Branches",
      path: "branches",
      icon: RectangleStackIcon,
      permission: "view-branches",
    },
    {
      name: "Clinics",
      path: "providers",
      icon: BuildingStorefrontIcon,
      permission: "view-providers",
    },
  ];

  const thirdNavigation = [
    { name: "Logout", path: "logout", icon: ArrowLeftOnRectangleIcon },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const onLogout = (navName) => {
    if (navName == "Logout") {
      localStorage.clear();
      setToken(null);
    } else {
    }
  };

  return (
    <nav
      className={`flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
      aria-label="Sidebar"
        relative
        transition-all duration-700
        w-full
        top-0
        cursor-pointer
        px-14
        ${isOpen?'w-24 ':'w-24 '}
        `}
    onClick={()=>setisOpen(!isOpen)}>
         <div className={`space-y-1 
         flex flex-col
         ${isOpen?"gap-4":"gap-4"}
         `}>
        {navigation.map((item) => (
          <div
          className={`${isOpen?"flex flex-col gap-1 items-center    ":"flex-col  flex gap-1   items-center "}`}
          >

       
          <NavLink
            key={item.name}
            to={item.path}
            className={ classNames(
              location.pathname.split("/")[1] == item.path
                ? "bg-cyan-800 "
                : "",
              "group flex items-center     text-sm leading- font-medium rounded-md"
            
            )}
            aria-current={
              location.pathname.split("/")[1] == item.path ? "page" : undefined
            }
          >
            <div className="w-24 flex items-center justify-center align-self-center align-middle">

            <item.icon
              className=" h-8  text-2xl w-8 flex-shrink-0   text-cyan-300 hover:text-cyan-800"
              aria-hidden="true"
              />
              </div>
            
          </NavLink>
          <NavLink to={item.path}
          className={'w-24'}
          >

            <h2
            className={`${!isOpen?" text-white text-sm  text-center ":"text-white text-sm text-center "}`}
            >{item.name}</h2>
            </NavLink>
            </div>

        ))}
      </div>
      <div className="space-y-1 ">
        {thirdNavigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={classNames(
              location.pathname.split("/")[1] == item.path
                ? "bg-cyan-800 text-white logout-btn "
                : "text-cyan-100 hover:text-white hover:bg-cyan-600",
              "group flex items-center  py-2 text-sm leading-6 px-1 font-medium align-self-center  rounded-md logout-btn align-self-center"
            )}
            aria-current={
              location.pathname.split("/")[1] == item.path ? "page" : undefined
            }
            onClick={() => onLogout(item.name)}
          >
            <item.icon
              className=" h-6 w-6 flex-shrink-0 text-cyan-200 "
              aria-hidden="true"
            />
            {item.name}
          </NavLink>
        ))}
      </div>
   
    </nav>
  );
}

function SideNavBar(props) {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex  lg:flex-col z-50">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pt-1">
        <div className="flex flex-shrink-0 items-center px-4 mb-4">
          {/* <img className="" src="/images/logos-02.png" alt="PMC logo" /> */}
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default SideNavBar;