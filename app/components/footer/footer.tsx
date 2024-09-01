import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t-[1px] border-[#353951] w-full mt-8">
      <div
        className="mx-auto px-6 sm:px-12 lg:max-w-[70rem]
       xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p>
            © Developer Portfolio by{" "}
            <Link
              href={"https://www.linkedin.com/in/yassin-samir"}
              target="_blank"
              className="text-[#16f2b3]"
            >
              Yassin Samir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
