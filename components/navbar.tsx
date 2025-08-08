import { Navbar, NavbarBrand, NavbarContent, Button } from "@heroui/react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <Navbar className="sticky top-0 z-50">
      <NavbarBrand>
        <Image src={Logo} alt="Logo" width={36} height={36} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button as={Link} href="#contact" color="primary" variant="flat">
          contact us
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
