import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  { title: "Products", description: "Find the perfect solution for your needs.", icon: SquaresPlusIcon },
  { title: "About Us", description: "Meet and learn about our dedication", icon: UserGroupIcon },
  { title: "Blog", description: "Find the perfect solution for your needs.", icon: Bars4Icon },
  { title: "Services", description: "Learn how we can help you achieve your goals.", icon: SunIcon },
  { title: "Support", description: "Reach out to us for assistance or inquiries", icon: GlobeAmericasIcon },
  { title: "Contact", description: "Find the perfect solution for your needs.", icon: PhoneIcon },
  { title: "News", description: "Read insightful articles, tips, and expert opinions.", icon: NewspaperIcon },
  { title: "Products", description: "Find the perfect solution for your needs.", icon: RectangleGroupIcon },
  { title: "Special Offers", description: "Explore limited-time deals and bundles", icon: TagIcon },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-gray-900",
            })}
          </div>

          <div>
            <Typography className="text-sm font-bold text-blue-gray-900">
              {title}
            </Typography>
            <Typography className="text-xs font-medium text-blue-gray-500">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        offset={{ mainAxis: 20 }}
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources

              <ChevronDownIcon
                className={`hidden h-3 w-3 lg:block transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />

              <ChevronDownIcon
                className={`block h-3 w-3 lg:hidden transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden max-w-screen-xl lg:block rounded-xl">
          <ul className="grid grid-cols-3 gap-2">{renderItems}</ul>
        </MenuList>
      </Menu>

      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="flex flex-col lg:flex-row gap-2 p-0">
      <Typography as="a" href="#">
        <ListItem>Home</ListItem>
      </Typography>

      <NavListMenu />

      <Typography as="a" href="#">
        <ListItem>Contact Us</ListItem>
      </Typography>
    </List>
  );
}

export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <MTNavbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between">
        <Typography as="a" href="#" className="font-bold">
          Material Tailwind
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>

        <div className="hidden lg:flex gap-2">
          <Button variant="text" size="sm">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div>

        <IconButton
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList />

        <div className="flex lg:hidden gap-2 mt-2">
          <Button fullWidth variant="outlined">
            Log In
          </Button>
          <Button fullWidth variant="gradient">
            Sign In
          </Button>
        </div>
      </Collapse>
    </MTNavbar>
  );
}