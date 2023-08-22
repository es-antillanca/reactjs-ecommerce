import { useState } from "react";
import Logo from "../Logo";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,NavbarMenuToggle,NavbarMenu,
  NavbarMenuItem} from "@nextui-org/react";

import CartWidget from "./../CartWidget"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Celulares",
    "Computadores",
    "Accesorios"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(
          (item) => (
        <NavbarItem key={item}>
          <Link color="foreground" href="#" className="text-sm font-medium">
           {item}
          </Link>
        </NavbarItem>
          )
        )}

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Iniciar</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Regístrate
          </Button>
        </NavbarItem>
      <NavbarItem >
          <CartWidget />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-foreground"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
