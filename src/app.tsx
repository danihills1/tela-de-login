import React from 'react';
import '/Users/prefe/Desktop/tela-login/src/App.css'; // Certifique-se de que o caminho para o CSS está correto

const Login: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        console.log("Login attempt");
    };

    return (
        <div className="container">
            <div className="img-miniatura">
                <img src="miniatura.png" alt="Logo da prefeitura em miniatura" />
            </div>
            <h1>Sistema de Agendamento</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" placeholder="Matricula" required />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Senha" required />
                </div>
                <div className="input-group">
                    <button type="submit">ENTRAR</button>
                </div>
            </form>
            <div>
               
            </div>

        </div>
    );
};

export default Login;
