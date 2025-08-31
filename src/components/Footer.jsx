export default function Footer() {
  return (
    <div className="w-full text-center py-6">
      <hr className="border-t border-gray-300 w-full mb-4" />

      <p className="text-gray-600 text-sm">
        On This Day v1.0 — A React-based interactive app that brings history to
        life by highlighting key events on any given date. Developed by{" "}
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
