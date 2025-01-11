export function CardProfile({ className, img, name, role }) {
  return (
    <>
      <div
        className={`${className} card border p-5 rounded-[5px] min-h-[300px] duration-300 cursor-pointer hover:shadow-lg`}
      >
        <div className="card-header">
          <img
            src={img}
            alt={img + " " + name}
            className="border p-5 h-[175px] w-[200px] object-contain rounded-[5px]"
          />
        </div>
        <div className="card-body my-5">
          <p className="text-2xl font-semibold capitalize">{name}</p>
          <p className="text-xl font-thin mt-5">{role}</p>
        </div>
      </div>
    </>
  );
}
