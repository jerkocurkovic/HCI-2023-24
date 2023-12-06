import { FC } from "react";

import LogoIcon from "./icons/LogoIcon";

const Logo: FC = () => (
  <div className="flex-col items-center justify-between max-w-min gap-2 ml-4 bg-opacity-0">
    <LogoIcon />
    <span className="font-abeezee font-bold text-2xl whitespace-wrap">
      binBuddy
    </span>
  </div>
);

export default Logo;
