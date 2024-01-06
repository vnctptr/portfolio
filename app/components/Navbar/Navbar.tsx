export default function Navbar() {
  return (
    <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="#"
          className="page-title text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Vincent Potrykus
        </a>
      </div>
      <div>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          About
        </a>
        <a
          href="#"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}