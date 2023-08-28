import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  RiCompassLine,
  RiUploadLine,
  RiHome2Line,
  RiBookmarkLine,
  RiUser3Line,
} from "react-icons/ri";

type Props = {};

const Footer = (props: Props) => {
  const router = useRouter();
  return (
    <div className="btm-nav">
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        <RiHome2Line className="h-5 w-5" />
        <p className="text-xs font-semibold">Home</p>
      </Link>
      <Link
        href="/discover"
        className={router.pathname === "/discover" ? "active" : ""}
      >
        <RiCompassLine className="h-5 w-5" />
        <p className="text-xs font-semibold">Discover</p>
      </Link>
      <Link
        href="/upload"
        className={router.pathname === "/upload" ? "active" : ""}
      >
        <RiUploadLine className="h-5 w-5" />
        <p className="text-xs font-semibold">Upload</p>
      </Link>
      <Link
        href="/collection"
        className={router.pathname === "/collection" ? "active" : ""}
      >
        <RiBookmarkLine className="h-5 w-5" />
        <p className="text-xs font-semibold">Collection</p>
      </Link>
      <Link
        href="/login"
        className={router.pathname === "/login" ? "active" : ""}
      >
        <RiUser3Line className="h-5 w-5" />
        <p className="text-xs font-semibold">Login</p>
      </Link>
    </div>
  );
};

export default Footer;
