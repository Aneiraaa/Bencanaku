import { CardProfile } from "@/components/cards";
import user from "@/assets/user.png";
export default function AboutUs() {
  const members = [
    { id: 1, img: user, name: "Budi Santoso", role: "Ketua" },
    { id: 2, img: user, name: "Rina Kartika", role: "Wakil Ketua" },
    { id: 3, img: user, name: "Ahmad Faisal", role: "Sekretaris" },
    { id: 4, img: user, name: "Dewi Lestari", role: "Bendahara" },
    { id: 5, img: user, name: "Tono Prasetyo", role: "Anggota" },
  ];

  return (
    <>
      <div id="about" className="p-14 min-h-screen flex flex-col justify-center items-center gap-5">
        <div className="wrapper-text">
          <p className="capitalize font-semibold text-3xl text-center">
            Tentang Kami
          </p>
          <p className="capitalize font-thin text-xl my-5">
            Susunan pengurus dan informasi lainnya
          </p>
        </div>
        <div className="wrapper-card-information grid grid-cols-2 gap-10">
          {/* 2 card above */}
          {members.slice(0, 2).map((member, id) => (
            <CardProfile
              img={member.img}
              name={member.name}
              role={member.role}
              key={id}
            />
          ))}
        </div>
        <div className="wrapper-card-information grid grid-cols-3 gap-10">
          {/* 3 card below */}
          {members.slice(2).map((member, id) => (
            <CardProfile
              img={member.img}
              name={member.name}
              role={member.role}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
