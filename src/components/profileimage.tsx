import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="h-40 w-40 -mt-16 lg:h-44 lg:w-44 lg:-mt-44 2xl:h-48 2xl:w-48 xl:-mt-60 mx-auto rounded-full overflow-hidden relative border-soid border-b-2 border-teal-400 border-opacity-100">
      <Image
        className="ml-1"
        fill
        src="/images/PictureNoBg.png"
        alt="Picture"
      />
    </div>
  );
}
