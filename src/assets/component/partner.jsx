import React, { useEffect } from "react";

function Partner() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [partner, setPartner] = React.useState([]);
  useEffect(() => {
    async function dataPartner() {
      try {
        const partner = await fetch(`${BASE_URL}/partners`);
        console.log(partner);
        if (!partner.ok) {
          throw new Error(`partner status ${partner.status}`);
        }
        const json = await partner.json();
        setPartner(json.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    dataPartner();
  }, []);
  return (
    <div className="md:flex grid grid-cols-2 gap-[30px] items-center justify-center mt-[93px]">
      {partner.map((items) => {
        return (
          <img
            className="w-[100px] bg-white p-[20px] rounded-xl"
            src={items.img}
          ></img>
        );
      })}
    </div>
  );
}
export default Partner;
