"use client";

import { useParams } from "next/navigation";

export default function LoginProcessing() {
  const params = useParams();
  console.log("params: ", params);

  return <></>;
}
