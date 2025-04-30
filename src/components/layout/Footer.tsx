import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-secondary py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Caden Damiano</h4>
            <p className="text-sm mb-4 font-sans">Designer who can write product specs. </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Connect</h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="https://www.linkedin.com/in/caden-damiano/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:cadendamiano@gmail.com" className="hover:text-primary transition-colors">
                  cadendamiano@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200 text-center font-sans">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Caden Damiano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;