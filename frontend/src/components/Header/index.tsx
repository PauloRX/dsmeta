import logo from '../../assets/img/logo-dsmeta.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DS Meta" />
                <h1>DS Meta</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://instagram.com/paulo_xavier3">
                        @PauloRX
                    </a>
                </p>
            </div>
        </header>
    );
}

  
  export default Header
  