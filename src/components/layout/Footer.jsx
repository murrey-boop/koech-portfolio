import {
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-3">
              Josphat Koech Words
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Words That Inform, Inspire,
              and Convert.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2">
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">
              Connect
            </h4>

            <div className="flex gap-4 text-xl">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>

              <a href="#">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Josphat
          Koech Words. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}