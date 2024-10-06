import MixBlende from "@/Components/MixBlende/MixBlende";

export default function Home() {
  return (
    <div className={'w-screen h-screen bg-orange-700 flex justify-center items-center'}>
      <MixBlende/>
      <h1 className="text-[10vw] flex text-black">This is cursor in mix blende mode</h1>
    </div>
  );
}
