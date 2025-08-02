export default function Footer() {
  return (
    <div className="w-full text-center py-6">
      <hr className="border-t border-gray-300 w-full mb-4" />

      <p className="text-gray-600 text-sm">
        On This Day version 1.0. A fun project developed by{" "}
        <a
          href="https://www.artisanasif.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline  hover:text-red-600 font-semibold"
        >
          Asif
        </a>
        .
      </p>
    </div>
  );
}
