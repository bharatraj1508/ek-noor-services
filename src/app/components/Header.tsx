export default function Header() {
  return (
    <div className="p-6">
      <ul className="flex flex-row justify-center items-center gap-6 text-xl font-extrabold">
        <li className=" hover:underline cursor-pointer hover:text-neutral-600 hover:scale-125 transition-all duration-500">
          Home
        </li>
        <li className=" hover:underline cursor-pointer hover:text-neutral-600 hover:scale-125 transition-all duration-500">
          Services
        </li>
        <li className=" hover:underline cursor-pointer hover:text-neutral-600 hover:scale-125 transition-all duration-500">
          Contact
        </li>
      </ul>
    </div>
  );
}
