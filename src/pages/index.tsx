import api from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  // const [cats, setCats] = useState([]);

  // const getCats = async () => {
  //   const response = await api.get("/images");
  //   console.log(response);
  //   setCats(response.data);
  // };

  // useEffect(() => {
  //   getCats();
  // }, []);
  return (
    <main>
      <div className="tabs tabs-boxed center flex items-center justify-evenly">
        <Link
          href={{
            pathname: "/",
          }}
          className={`tab ${
            router.query.tab === undefined ? "tab-active font-semibold" : ""
          }`}
        >
          For You
        </Link>
        <Link
          href={{
            pathname: "/",
            query: {
              tab: "following",
            },
          }}
          className={`tab ${
            router.query.tab === "following" ? "tab-active font-semibold" : ""
          }`}
        >
          Following
        </Link>
        <Link
          href={{
            pathname: "/",
            query: {
              tab: "foryou",
            },
          }}
          className={`tab ${
            router.query.tab === "foryou" ? "tab-active font-semibold" : ""
          }`}
        >
          For You
        </Link>
      </div>
    </main>
  );
}
