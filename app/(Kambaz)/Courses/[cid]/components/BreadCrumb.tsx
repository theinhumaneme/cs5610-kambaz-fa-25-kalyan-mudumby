"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  courseName,
}: {
  courseName: string | undefined;
}) {
  const pathname = usePathname();
  return (
    <span>
      {courseName} &gt; {pathname.split("/").pop()}
    </span>
  );
}
