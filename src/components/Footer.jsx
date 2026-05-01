import {
  Envelope,
  FloppyDisk,
  Handset,
  LocationArrow,
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  MapPin,
} from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-card)] pt-15 pb-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-4">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)] bg-clip-text text-transparent">
              Luxury
            </span>{" "}
            <span className="bg-gradient-to-r from-[var(--accent-soft)] to-[var(--neutral-warm)] bg-clip-text text-transparent">
              Tiles
            </span>
          </h1>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed">
            Discover premium quality tiles for modern interiors. We bring
            elegance, durability, and style together for your dream spaces.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-main)]">
            Quick Links
          </h3>
          <ul className=" space-y-2 text-[var(--text-muted)]">
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                All Tiles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                My Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 text-[var(--text-main)]">
            Categories
          </h3>
          <ul className="space-y-2 text-[var(--text-muted)] capitalize">
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Ceramic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Marble
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Granite
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Porcelain
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[var(--accent)] transition">
                Mosaic
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center md:block">
          <h3 className="text-[var(--text-main)] font-semibold mb-4 text-lg">
            Contact Us
          </h3>
          <div className="flex gap-2 items-center ">
            <MapPin />
            <p className="text-sm text-[var(--text-muted)] ">
              Bikrampur Tower, Distilary Road, Sutrapur, Dhaka
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <Handset />
            <p className="text-sm text-[var(--text-muted)]">019-0000-0000</p>
          </div>
          <div className="flex gap-2 items-center ">
            <Envelope />
            <p className="text-sm text-[var(--text-muted)]">
              salauddincse96@gmail.com
            </p>
          </div>
          <div>
            <Form className="max-w-96 text-[var(--text-muted)]">
              <Fieldset>
                <FieldGroup>
                  <TextField name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                  </TextField>

                  <TextField name="message">
                    <Label>Message</Label>
                    <TextArea placeholder="Write your message..." />
                  </TextField>
                  <Button type="submit" className="rounded-sm">
                    <LocationArrow />
                    Send Message
                  </Button>
                </FieldGroup>
              </Fieldset>
            </Form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto border-t-2 border-[var(--border-color)] pt-8 text-sm  flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Luxury Tiles. All rights reserved.
        </p>
        <div className="flex gap-4 items-center text-[var(--text-muted)]">
          <span>Privacy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="p-2 bg-[var(--accent-soft)] text-[var(--text-main)] rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <LogoLinkedin />
          </a>
          <a
            href="#"
            className="p-2 bg-[var(--accent-soft)] text-[var(--text-main)] rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <LogoFacebook />
          </a>
          <a
            href="#"
            className="p-2 bg-[var(--accent-soft)] text-[var(--text-main)] rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <LogoGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
