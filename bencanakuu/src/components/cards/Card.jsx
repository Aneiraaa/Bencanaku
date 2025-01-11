export function Card({ className, title, desc, author, img }) {
  return (
    <>
      <div
        className={`${className} card border  rounded-[5px] min-h-[300px] duration-300 cursor-pointer hover:shadow-lg`}
      >
        <div className="card-header">
          <img className="object-contain rounded-t-[5px] border" src={img} />
        </div>
        <div className="p-5">

        <div className="card-body my-5">
          <p className="text-2xl font-semibold capitalize">{title}</p>
          <p className="text-xl font-thin mt-5">{desc}</p>
        </div>
        <div className="card-footer ">
          <p className="text-lg font-semibold italic">{author}</p>
        </div>
        </div>
      </div>
    </>
  );
}
