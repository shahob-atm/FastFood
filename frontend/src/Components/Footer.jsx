import logo from "../assets/logo.png";
import insta from "../assets/insta.svg";
import twit from "../assets/twit.svg";
import face from "../assets/face.svg";
import you from "../assets/you.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <img src={logo} />
          <ul className="space-y-2 text-gray-400">
            <li>www.company name.com</li>
            <li>companyname@gmail.com</li>
            <li>Phone: +7 485-118-03-25</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 own">Team Members</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Shakhab</li>
            <li>Shakhruz</li>
            <li>Diyor</li>
            <li>Timur</li>
          </ul>
        </div>

        {/* Languages Used */}
        <div>
          <h2 className="text-lg font-semibold mb-4 own">Languages Used</h2>
          <ul className="space-y-2 text-gray-400">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 own">
            Libraries & Frameworks
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>React.jsx</li>
            <li>Tailwind CSS</li>
            <li>Axios</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 own">Project Timeline</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <strong>Start Date:</strong> November 25, 2024
            </li>
            <li>
              <strong>Server Deployment:</strong> November 28, 2024
            </li>
          </ul>
          <div className="flex gap-2 mt-2">
            <img src={insta} alt="" />
            <img src={twit} alt="" />
            <img src={face} alt="" />
            <img src={you} alt="" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Project Team. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
