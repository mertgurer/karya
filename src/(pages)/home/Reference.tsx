import Image from "next/image";

import DUK from "@/assets/images/home/references/DUK.png";
import GEV from "@/assets/images/home/references/GEV.png";
import KEP from "@/assets/images/home/references/KEP.png";
import LG from "@/assets/images/home/references/LG.png";
import NEE from "@/assets/images/home/references/NEE.png";
import SO from "@/assets/images/home/references/SO.png";
import TRN from "@/assets/images/home/references/TRN.png";
import XEL from "@/assets/images/home/references/XEL.png";
import ENR from "@/assets/images/home/references/ENR.png";
import FORTUM from "@/assets/images/home/references/FORTUM.png";

const References = [
  { name: "Duke Energy", image: DUK },
  { name: "GE Vernova", image: GEV },
  { name: "Korea Electric Power", image: KEP },
  { name: "LG Energy Solution", image: LG },
  { name: "Nextera Energy", image: NEE },
  { name: "Southern Company", image: SO },
  { name: "Terna", image: TRN },
  { name: "XEL", image: XEL },
  { name: "Siemens Energy", image: ENR },
  { name: "Fortum", image: FORTUM },
];

export const Reference = ({ index }: { index: number }) => {
  return (
    <section id="reference" className="w-full px-[15%] py-32">
      <div className="grid grid-cols-5 gap-0.5 mx-[10%] bg-primary shadow-lg shadow-black/10">
        {References.map((reference) => (
          <div
            key={reference.name}
            className="p-1 aspect-square overflow-hidden bg-background"
          >
            <div className="w-full h-full p-10">
              <div className="relative w-full h-full">
                <Image
                  src={reference.image}
                  alt={reference.name}
                  fill
                  priority
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
