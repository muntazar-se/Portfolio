import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex gap-5 font-semibold loader">
        <h1 className="text-tertiary text-5xl  m">M</h1>
        <h1 className="text-tertiary text-5xl  letter dot">.</h1>
        <h1 className="text-tertiary text-5xl letter a1">A</h1>
        <h1 className="text-tertiary text-5xl letter l">l</h1>
        <h1 className="text-tertiary text-5xl  dash">-</h1>
        <h1 className="text-tertiary text-5xl  a2">A</h1>
        <h1 className="text-tertiary text-5xl  k">k</h1>
        <h1 className="text-tertiary text-5xl  r">r</h1>
        <h1 className="text-tertiary text-5xl  a3">a</h1>
        <h1 className="text-tertiary text-5xl  a4">a</h1>


       
      </div>
    </div>
  );
}

export default Loader;
