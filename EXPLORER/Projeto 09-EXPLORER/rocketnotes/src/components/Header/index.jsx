import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/kiqsmg.png"
                    alt="foto de usuario" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Caique Sales </strong>

                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}