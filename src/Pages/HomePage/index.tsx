import "./styles.css";

export default function HomePage() {
  return (
    <>
       <nav className="menu-bar">
        <div className="nav-container">
          <ul className="nav-links">
            <li><a href="#">Início</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Estoque</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div className="logo-clipa">
            <img src="src/assets/images/clipa_logo.png" alt="Logo Clipa"/>
          </div>

          <div className="user-profile">
            <img src="src/assets/images/profile_user.png" alt="Perfil do usuário"/>
          </div>
        </div>
      </nav>
  <div className="division-line"></div>

      <div className="center-title"><p>CLIPA FACILITIES</p></div>
      <div className="hero-content">
        <h2 className="headline">Soluções Completas em Locação e Serviços</h2>
        <p className="tagline">Transformando seus projetos em realidade com qualidade e eficiência</p>
        <p className="description">A CLIPA é especializada em locação de equipamentos e serviços de obras gerais, oferecendo soluções integradas para construção civil, indústria e eventos. Com ampla variedade de equipamentos modernos e uma equipe técnica especializada, garantimos agilidade, segurança e excelência em cada projeto.</p>
    </div>
      
    </>
  );
}
