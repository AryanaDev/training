import HardItems from "@/components/Elements/hardItems";
import SimpleItems from "@/components/Elements/simpleItems";

export default function Menu() {

    return (

        <div className="w-full flex flex-col">
            <div className="w-[300px] text-white flex-col bg-black h-screen justify-items-center">
                <h1 className="mt-5 text-2xl">Dashboard</h1>
                <div className="text-white bg-amber-300 w-full h-screen mt-6">
                    <HardItems/>
                    <SimpleItems/>
                </div>
                </div>
            </div>
            );
            }
