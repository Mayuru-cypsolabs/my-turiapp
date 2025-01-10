import Home1 from "@/components/Home1";
import Greet from "./greet";


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <Greet />
      {/* Other components */}
      <Home1/>
    </main>
  )
}