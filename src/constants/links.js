import React from "react"
import { GrFacebook, GrInstagram } from 'react-icons/gr'

const navigationLinks = [
  {
    page: "Home",
    path: "/",
    id: 1,
  },
  {
    page: "Treatments",
    path: "/treatments/",
    id: 2,
  },
  {
    page: "Contact",
    path: "/contact/",
    id: 3,
  },
];

const socialLinks = [
  {
    icon: <GrFacebook />,
    id: 1,
    label: "Go to our Facebook Page",
    name: 'facebook',
    url: "https://www.facebook.com/pages/Hilary-Molloy-skin-artistry-renewal/286199431401479",
  },
  {
    icon: <GrInstagram />,
    id: 2,
    label: "Go to our Instagram Page",
    name: 'instagram',
    url: "https://instagram.com/itshilarymolloy",
  },
]

export { navigationLinks, socialLinks}
