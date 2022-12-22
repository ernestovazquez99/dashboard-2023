import React, { useState } from 'react';
import { PowerBIEmbebd } from 'powerbi-client-react';
import { models, Embebd, service } from 'powerbi-client';
import logo99min from '../../img/icon-99min.jpg';
import logoanalytics from '../../img/icon-analitica.png';
import logonotification from '../../img/icon-notification.png';
import './styles.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Header'>
      <div><img src={logo99min} width='150'/></div>
      <div><img src={logoanalytics} width='25'/> Analíticas </div>
      <div>Hola, USUARIO.
        <button onClick={() => setIsOpen(true)}>
          <img src={logonotification} width='30'/>
        </button>
        {isOpen && (
          <div>
            <div>
              Notificaciones
            </div>
            <button onClick={() => setIsOpen(false)}>
              CERRAR
            </button>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default Header;
