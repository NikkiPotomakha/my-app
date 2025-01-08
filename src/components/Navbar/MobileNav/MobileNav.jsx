import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleMenu(); // Закриваємо меню після натискання
    }
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`} // Додаємо клас active, якщо меню відкрите
      onClick={toggleMenu} // Закриваємо меню при натисканні на фон
    >
      <div
        className="mobile-menu-container"
        onClick={(e) => e.stopPropagation()} // Зупиняємо поширення події, щоб не закрити меню при натисканні на елементи
      >
        <a className="logo link" href="/">
          GC<span className="logo link">Gold Craft</span>
        </a>

        <ul>
          <li>
            <a
              className="menu-item"
              href="#hero"
              onClick={() => scrollToSection("home")}
            >
              O nas
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#about"
              onClick={() => scrollToSection("about")}
            >
              Co robimy
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#orders"
              onClick={() => scrollToSection("orders")}
            >
              Zamówienia
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href="#contact"
              onClick={() => scrollToSection("contact")}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
