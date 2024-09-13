import React from "react";
import SectionTitle from "../../Components/SectionTitle";

function Contact() {
  const user = {
    name: "Muntadher Al-Akraa",
    email: "muntadher.alakraa@gmail.com",
    phone: "+905386085147",
    country: "Turkey",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center">
        <div className="text-tertiary flex flex-col gap-2 ml-0 ">

            <p className="text-sm ">{`{`}</p>
            {Object.keys(user).map((key)=>
            <p className="ml-5  ">
                <span className="text-tertiary ">{key } </span>
                : <span className="text-tertiary">"{user[key]}"</span>
            </p>
            )}
            <p>{`}`}</p>

        </div>

        <div className=" h-[35vh] w-1/2  sm:w-full">
          <dotlottie-player
            src="https://lottie.host/3dc32d92-1e16-41a2-8633-c3fa99738c87/w021pCnGvx.json"
            background="transparent"
            speed="1"
            
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
