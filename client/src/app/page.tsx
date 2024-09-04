import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[40rem]">
      <div className="container grid grid-cols-2 gap-20 items-center justify-center py-20">
        <div className="space-y-6 bg-secondary border rounded p-8">
          <h1 className="text-5xl text-pretty font-extrabold tracking-tight capitalize leading-[1.25]">
            The biggest language school in the world!
          </h1>
          <p className="leading-relaxed pb-4 text-secondary-foreground">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
            minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
          <div className="flex itemms-center gap-4">
            <Button>Join the mailing list</Button>
            <Button variant="destructive">Learn More</Button>
          </div>
        </div>
        <img
          className="h-full rounded-2xl object-center object-cover"
          src="https://images.unsplash.com/photo-1664382953481-141e97ad9825?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
}
