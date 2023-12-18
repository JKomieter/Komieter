import Content from "@/layout/Content";
import Sidebar from "@/layout/Sidebar";


export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <Content />
    </main>
  )
}
