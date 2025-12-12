"use client";

import { Button } from "../ui/button";

export const Landing = () => {
  return (
    <div className="flex gap-4 items-center flex-col">
      <p>Jewel</p>
      <Button onClick={() => console.log("!!!")}>YO</Button>
    </div>
  );
};
