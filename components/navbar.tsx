import { Navbar, NavbarBrand, NavbarContent, Button } from "@heroui/react";
import Image from "next/image";
import Logo from "../public/logo.png";

export default function AppNavbar() {
  return (
    <Navbar className="sticky top-0 z-50">
      <NavbarBrand>
        <Image src={Logo} alt="Logo" width={36} height={36} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button color="primary" variant="flat">
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
