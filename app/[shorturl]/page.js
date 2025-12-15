import { redirect } from "next/navigation";

export default function Page({ params }) {
  redirect("https://google.com");
}
