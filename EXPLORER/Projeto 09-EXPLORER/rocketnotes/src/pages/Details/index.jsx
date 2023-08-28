import { Container, Links, Content } from './styles';

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    <ButtonText title="Excluir nota" />

                    <h1>
                        Itrodução ao React
                    </h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptate, delectus ducimus saepe aspernatur, eligendi odit accusamus,
                        labore omnis magnam soluta nulla explicabo dolores distinctio rem quo
                        consequuntur ex recusandae obcaecati.</p>

                    <Section title="Links úteis">
                        <Links>
                            <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
                            <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="express" />
                        <Tag title="nodeJS" />

                    </Section>

                    <Button title="Voltar" />

                </Content>
            </main>
        </Container>
    )
}