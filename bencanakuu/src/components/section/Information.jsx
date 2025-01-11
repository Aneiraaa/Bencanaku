import { Card } from "@/components/cards";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInformationSelector, getInformation } from "@/store/information";
import foto from "@/assets/banjir.jpg";
export default function Information() {
  const [count, setCount] = useState(3);
  const dispatch = useDispatch();
  const { data } = useSelector(getInformationSelector);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getInformation());
    }
  }, [dispatch, data]);

  const visibleData = data.slice(0, count);

  return (
    <>
      <div
        id="information"
        className="p-14 min-h-screen flex flex-col justify-center items-center gap-10"
      >
        <div className="wrapper-text">
          <p className="capitalize font-semibold text-3xl text-center">
            berita terbaru
          </p>
          <p className="capitalize font-thin text-xl my-5">
            informasi terkini berita bencana daerah semarang
          </p>
        </div>
        <div
          className={
            `wrapper-card-information flex justify-center gap-10` +
            (count >= data.length ? " flex-wrap" : "")
          }
        >
          {visibleData.map((item, id) => (

            <Card
              className={count >= data.length ? "max-w-xl" : "max-w-md"}
              key={id}
              img={foto}
              title={item.title}
              desc={item.desc}
              author={item.author}
            />
          ))}
        </div>
        <button
          className={
            `capitalize px-6 py-4 border rounded-[5px] duration-200 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:font-semibold` +
            (count >= data.length ? " hidden" : "")
          }
          onClick={() => setCount(count + 3)}
        >
          selengkapnya
        </button>
      </div>
    </>
  );
}
