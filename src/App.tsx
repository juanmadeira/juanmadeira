import "./style/App.css";

import furg_logo from "./assets/furg.png";
import if_logo from "./assets/if.png";
import email from "./assets/email.gif"

export default function App() {
    return (
        <>
            <p>Olá, me chamo Juan Madeira!</p>
            <img src={furg_logo} width="15" />&nbsp;&nbsp;Estudante em bacharelado de Sistemas de Informação na Universidade Federal do Rio Grande (FURG)
            <br></br>
            <img src={if_logo} width="15" />&nbsp;&nbsp;Técnico em Informática para Internet pelo Instituto Federal do Rio Grande do Sul (IFRS)
            <p>Ferramentas e tecnologias que utilizo ou estou estudando</p>

            <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" width="50" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="50" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="45" />
                &nbsp;&nbsp;
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="35" />
            </div>
            
            <div>
                <p>Entre em contato!</p>
                <a href="mailto:juan.madeira@furg.br"><img src={email} width="45" /></a>
                &nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/juan-madeira"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width="45" /></a>
            </div>
        </>
    )
}