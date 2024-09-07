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
      <div className="flex">
        <div className="text-tertiary">
            
        </div>

        <div className="w-[60]">
          <dotlottie-player
            src="https://lottie.host/e05513e9-0c82-4c99-a5a9-45e4befbb10d/2eEWo1lkMw.json"
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
