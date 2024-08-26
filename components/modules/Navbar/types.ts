import React from "react";

export type NavbarProps = {
  links?: {
    href: string;
    label: string;
  }[];
  children?: React.ReactNode;
};
