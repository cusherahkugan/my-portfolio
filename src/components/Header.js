import React from 'react';

function Header() {
  return (
    <header className="bg-purple-900 text-white p-4 fixed w-full top-0 z-10">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
