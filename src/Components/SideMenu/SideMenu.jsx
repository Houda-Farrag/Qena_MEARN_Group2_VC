import {
  faBabyCarriage,
  faBicycle,
  faBuilding,
  faCar,
  faCat,
  faChevronRight,
  faCouch,
  faMobileScreenButton,
  faShirt,
  faTv,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const SideMenu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedSubMenu1, setSelectedSubMenu1] = useState(null);
  const [selectedSubMenu2, setSelectedSubMenu2] = useState(null);

  const handleSubMenuTransition = (selectedItem) => {
    switch (selectedItem) {
      case "Item 1":
        setSelectedSubMenu1(null);
        setSelectedSubMenu2(null);
        break;
      case "Item 2":
        setSelectedSubMenu1(null);
        setSelectedSubMenu2(null);
        break;
      case "Item 3":
        setSelectedSubMenu1(null);
        setSelectedSubMenu2(null);
        break;
      case "Submenu 1":
        setSelectedSubMenu2(null);
        break;
      default:
        break;
    }
  };

  // useEffect to handle initial state and submenu transitions
  useEffect(() => {
    handleSubMenuTransition(selectedMenuItem);
  }, [selectedMenuItem]);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setSelectedSubMenu2(null);
  };

  const handleSubMenu1Click = (subMenu) => {
    setSelectedSubMenu1(subMenu);
  };

  const handleSubMenu2Click = (subMenu) => {
    setSelectedSubMenu2(subMenu);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold py-8">Post Your Ad</h1>
      <div className="grid grid-cols-3 border">
        <div className="bg-white">
          <div className="p-4 text-black font-bold">Choose a Category</div>
          <ul>
            <hr className="h-1" />
            <li
              className={`flex items-center py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 1" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 1")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faCar} className="text-red-600 mr-2" />
                Vehicles
              </span>
              <FontAwesomeIcon icon={faChevronRight} className="ml-auto" />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 2" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 2")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-red-600 mr-2"
                />
                Properties
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 3" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 3")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-red-600 mr-2"
                />
                Mobile & tablets
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 4" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 4")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faUserDoctor}
                  className="text-red-600 mr-2"
                />
                Jobs
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 5" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 5")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faTv} className="text-red-600 mr-2" />
                Electronics & Appliances
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 6" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 6")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faCouch} className="text-red-600 mr-2" />
                Furniture & Decor
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 7" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 7")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faCat} className="text-red-600 mr-2" />
                Pets
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 8" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 8")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faBabyCarriage}
                  className="text-red-600 mr-2"
                />
                Kids & babies
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 9" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 9")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon
                  icon={faBicycle}
                  className="text-red-600 mr-2"
                />
                Hoppies
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
            <hr className="h-1" />
            <li
              className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                selectedMenuItem === "Item 10" && "bg-gray-50"
              }`}
              onClick={() => handleMenuItemClick("Item 10")}
            >
              <span className="flex items-center">
                <FontAwesomeIcon icon={faShirt} className="text-red-600 mr-2" />
                Fashion & Beauty
              </span>
              <FontAwesomeIcon icon={faChevronRight} />
            </li>
          </ul>
        </div>
        {selectedMenuItem == "Item 1" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Cars for sale
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Cars for Rent
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Cars Spare Parts
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 4" && "bg-gray-50"
                }`}
              >
                Boats - Watercraft
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 5" && "bg-gray-50"
                }`}
              >
                Tyres , Oils & Accessories
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 2" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Apartments for Sale
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Apartments for Rent
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Villas For Sale
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Villas For Rent
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Vacation Homes for Sale
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Vacation Homes for Rent
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Commercial for Sale
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Commercial for Rent Buildings & Lands
              </li>
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Buildings & Lands
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 3" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Mobile Phones
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Tablets
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Mobile & Tablet Accessories Mobile Numbers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Mobile Numbers
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 4" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Accounting, Finance & Banking
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Engineering
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Designers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Customer Service & Call Center
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Workers and Technicians
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Management & Consulting
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Drivers & Delivery
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Education
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                HR
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Tourism, Travel & Hospitality
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                IT - Telecom
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Marketing and Public Relations
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 5" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu1Click("Submenu 1")}
              >
                <span>TV - Audio - Video</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu1Click("Submenu 2")}
              >
                <span>Computers - Accessories</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu1Click("Submenu 3")}
              >
                <span>Video games - Consoles</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 4" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu1Click("Submenu 4")}
              >
                <span>Cameras - Imaging</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 5" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu1Click("Submenu 5")}
              >
                <span>Home Appliances</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 6" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Bathroom
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Bedroom
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Dining Room
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Fabrics - Curtains - Carpets
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Garden - Outdoor
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Home Decoration
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Kitchen - Kitchenware
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Lighting Tools
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Living Room
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Multiple/Other Furniture
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 7" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Birds - Pigeons
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Cats
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Dogs
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Other Pets & Animals
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Accessories - Pet Care Products
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 8" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Baby & Mom Healthcare
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Baby Clothing
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Baby Feeding Tools
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Cribs - Strollers - Carriers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Toys
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Other Baby Items
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 9" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Antiques - Collectibles
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Bicycles
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Books
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Board - Card Games
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Movies - Music
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Musical Instruments
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Sports Equipment
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Study Tools
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Tickets - Vouchers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Luggage
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Other Items
              </li>
            </ul>
          </div>
        )}
        {selectedMenuItem == "Item 10" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 1" && "bg-gray-50"
                }`}
              >
                Women`s Clothing
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 2" && "bg-gray-50"
                }`}
              >
                Men`s Clothing
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Women`s Accessories - Cosmetics - Personal Care
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu1 === "Submenu 3" && "bg-gray-50"
                }`}
              >
                Men`s Accessories - Personal Care
              </li>
            </ul>
          </div>
        )}
        {selectedSubMenu1 == "Submenu 1" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu2 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 1")}
              >
                Televisions
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 2" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 2")}
              >
                DVD - Home Theater
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 3" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Home Audio
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 4" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Mp3 Players - Portable audio
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 5" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Satellite TV receivers
              </li>
            </ul>
          </div>
        )}
        {selectedSubMenu1 == "Submenu 2" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu2 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 1")}
              >
                Desktop computers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 2" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 2")}
              >
                Laptop computers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 3" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Computer Accessories & Spare Parts
              </li>
            </ul>
          </div>
        )}
        {selectedSubMenu1 == "Submenu 3" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu2 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 1")}
              >
                Video Game Consoles
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 2" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 2")}
              >
                Video Games & Accessories
              </li>
            </ul>
          </div>
        )}
        {selectedSubMenu1 == "Submenu 4" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu2 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 1")}
              >
                Cameras
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 2" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 2")}
              >
                Security Cameras
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 3" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Camera Accessories
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 4" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Binoculars - Telescopes
              </li>
            </ul>
          </div>
        )}
        {selectedSubMenu1 == "Submenu 5" && (
          <div className="bg-white">
            <ul className="mt-14">
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedSubMenu2 === "Submenu 1" && "bg-gray-50"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 1")}
              >
                Refrigerators - Freezers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 2" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 2")}
              >
                Ovens - Microwaves
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 3" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Dishwashers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 4" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Cooking Tools
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 5" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Washers - Dryers
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 6" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Water Coolers & Kettles
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 7" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Air conditioners & Fans
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 8" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Cleaning Appliances
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 9" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Other Home Appliances
              </li>
              <hr className="h-1" />
              <li
                className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-red-200 ${
                  selectedSubMenu2 === "Submenu 10" && "bg-red-200"
                }`}
                onClick={() => handleSubMenu2Click("Submenu 3")}
              >
                Heaters
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
