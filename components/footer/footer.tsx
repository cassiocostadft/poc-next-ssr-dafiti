import React from "react";
import styles from './footer.module.css';


export default function footer() {
    return (
        <>
            <div className={styles["l-footer"]}>
                <div className={styles["l-footer-group l-container container"]}>
                    <div className={styles["row"]}>
                        <div className={styles["col-md-6 top-searched-brands"]}>
                            <div className={styles["title title-36"]}>Marcas Mais Buscadas</div>
                            <ul className={styles["footer-brandlist menu-links-vertical"]}>
                                <a rel="follow" href="/colcci/" className={styles["menu-links-vertical-link"]}>Colcci</a>
                                <a rel="follow" href="/santa-lolla/" className={styles["menu-links-vertical-link"]}>Santa Lolla</a>
                                <a rel="follow" href="/adidas/" className={styles["menu-links-vertical-link"]}>Adidas</a>
                                <a rel="follow" href="/calvin-klein/" className={styles["menu-links-vertical-link"]}>Calvin Klein</a>
                                <a rel="follow" href="/capodarte/" className={styles["menu-links-vertical-link"]}>Capodarte</a>
                            </ul>
                            <ul className={styles["footer-brandlist menu-links-vertical"]}>
                                <a rel="follow" href="/nike/" className={styles["menu-links-vertical-link"]}>Nike</a>
                                <a rel="follow" href="/dumond/" className={styles["menu-links-vertical-link"]}>Dumond</a>
                                <a rel="follow" href="/lanca-perfume/" className={styles["menu-links-vertical-link"]}>Lança Perfume</a>
                                <a rel="follow" href="/melissa/" className={styles["menu-links-vertical-link"]}>Melissa</a>
                                <a rel="follow" href="/vizzano/" className={styles["menu-links-vertical-link"]}>Vizzano</a>
                            </ul>
                            <ul className={styles["footer-brandlist menu-links-vertical"]}>
                                <a rel="follow" href="/puma/" className={styles["menu-links-vertical-link"]}>Puma</a>
                                <a rel="follow" href="/fila/" className={styles["menu-links-vertical-link"]}>Fila</a>
                                <a rel="follow" href="/reserva/" className={styles["menu-links-vertical-link"]}>Reserva</a>
                                <a rel="follow" href="/carmim/" className={styles["menu-links-vertical-link"]}>Carmim</a>
                                <a rel="follow" href="/ellus/" className={styles["menu-links-vertical-link"]}>Ellus</a>
                            </ul>
                            <ul className={styles["footer-brandlist menu-links-vertical"]}>
                                <a rel="follow" href="/cantao/" className={styles["menu-links-vertical-link"]}>Cantão</a>
                                <a rel="follow" href="/democrata/" className={styles["menu-links-vertical-link"]}>Democrata</a>
                                <a rel="follow" href="/via-marte/" className={styles["menu-links-vertical-link"]}>Via Marte</a>
                                <a rel="follow" href="/forum/" className={styles["menu-links-vertical-link"]}>Forum</a>
                                <a rel="follow" href="/ray-ban/" className={styles["menu-links-vertical-link"]}>Ray-Ban</a>
                            </ul>
                            <ul className={styles["footer-brandlist menu-links-vertical"]}>
                                <a rel="follow" href="/mac/" className={styles["menu-links-vertical-link"]}>MAC</a>
                                <a rel="follow" href="/lacoste/" className={styles["menu-links-vertical-link"]}>Lacoste</a>
                                <a rel="follow" href="/tommy-hilfiger/" className={styles["menu-links-vertical-link"]}>Tommy Hilfiger</a>
                                <a rel="follow" href="/polo-ralph-lauren/" className={styles["menu-links-vertical-link"]}>Polo Ralph Lauren</a>
                                <a rel="follow" href="/maybelline/" className={styles["menu-links-vertical-link"]}>Maybelline</a>
                            </ul>
                        </div>
                        <div className={styles["col-md-6 top-categories"]}>
                            <div className={styles["title title-36"]}>
                                <a href="https://www.dafiti.com.br/sitemap.sdex">
                                    <style jsx>{`
                                        a{
                                            color: #000;
                                            text-decoration: underline
                                        }`
                                    }
                                    </style>Mapa de Categorias</a></div>
                            <ul className={styles["menu-links-vertical"]}>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-femininos/botas/">Botas Femininas</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/roupas-femininas/vestido-curto/">Vestido Curto</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-femininos/scarpins/">Scarpin</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-masculinos/tenis-casual/">Tênis Masculino</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/bolsas-e-acessorios-femininos/bolsas/">Bolsas</a>
                            </ul>

                            <ul className={styles["menu-links-vertical"]}>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/roupas-masculinas/polos-manga-curta/">Camisa Polo</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-femininos/coturno-e-biker/">Coturno</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-masculinos/sapatenis/">Sapatênis</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/roupas-femininas/calcas-jeans-calca-skinny/">Calça Skinny</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-femininos/sapatilhas/">Sapatilhas</a>


                            </ul>
                            <ul className={styles["menu-links-vertical"]}>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/cupons/">Cupom de Desconto Dafiti</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/bolsas-e-acessorios-femininos/oculos-de-sol/">Óculos de Sol</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/beleza-feminina/perfumes/">Perfume Feminino</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/calcados-femininos/mocassim/">Mocassim Feminino</a>
                                <a className={styles["menu-links-vertical-link"]} href="https://www.dafiti.com.br/roupas-femininas/vestidos-estampados/">Vestido Estampado</a>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["row"]}>
                        <div className={styles["container"]}>
                            <div className={styles["row"]}>
                                <div className={styles["col-md-12 fashion-glossary"]}>
                                    <strong className={styles["fashion-glossary-title"]}>Glossário de moda</strong>
                                    <a href="/glossario/a/" className={styles["fashion-glossary-item"]}>A</a>
                                    • <a href="/glossario/b/" className={styles["fashion-glossary-item"]}>B</a>
                                    • <a href="/glossario/c/" className={styles["fashion-glossary-item"]}>C</a>
                                    • <a href="/glossario/d/" className={styles["fashion-glossary-item"]}>D</a>
                                    • <a href="/glossario/e/" className={styles["fashion-glossary-item"]}>E</a>
                                    • <a href="/glossario/f/" className={styles["fashion-glossary-item"]}>F</a>
                                    • <a href="/glossario/g/" className={styles["fashion-glossary-item"]}>G</a>
                                    • <a href="/glossario/h/" className={styles["fashion-glossary-item"]}>H</a>
                                    • <a href="/glossario/i/" className={styles["fashion-glossary-item"]}>I</a>
                                    • <a href="/glossario/j/" className={styles["fashion-glossary-item"]}>J</a>
                                    • <a href="/glossario/k/" className={styles["fashion-glossary-item"]}>K</a>
                                    • <a href="/glossario/l/" className={styles["fashion-glossary-item"]}>L</a>
                                    • <a href="/glossario/m/" className={styles["fashion-glossary-item"]}>M</a>
                                    • <a href="/glossario/n/" className={styles["fashion-glossary-item"]}>N</a>
                                    • <a href="/glossario/o/" className={styles["fashion-glossary-item"]}>O</a>
                                    • <a href="/glossario/p/" className={styles["fashion-glossary-item"]}>P</a>
                                    • <a href="/glossario/q/" className={styles["fashion-glossary-item"]}>Q</a>
                                    • <a href="/glossario/r/" className={styles["fashion-glossary-item"]}>R</a>
                                    • <a href="/glossario/s/" className={styles["fashion-glossary-item"]}>S</a>
                                    • <a href="/glossario/t/" className={styles["fashion-glossary-item"]}>T</a>
                                    • <a href="/glossario/u/" className={styles["fashion-glossary-item"]}>U</a>
                                    • <a href="/glossario/v/" className={styles["fashion-glossary-item"]}>V</a>
                                    • <a href="/glossario/w/" className={styles["fashion-glossary-item"]}>W</a>
                                    • <a href="/glossario/x/" className={styles["fashion-glossary-item"]}>X</a>
                                    • <a href="/glossario/y/" className={styles["fashion-glossary-item"]}>Y</a>
                                    • <a href="/glossario/z/" className={styles["fashion-glossary-item"]}>Z</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["col-md-12 horizontal-separator hide-mobile"]}>
                        <div className={styles["row"]}>
                            <div className={styles["col-md-2 footer-min-height footer-social"]}>
                                <div className={styles["title title-36"]}>Social</div>
                                <ul className={styles["menu-links-vertical"]}>

                                    <a className={styles["menu-links-vertical-link"]}  title="Siga a Dafiti no Facebook" href="http://www.facebook.com/dafiti">Facebook</a>
                                    <a className={styles["menu-links-vertical-link"]}  title="Siga a Dafiti no Twitter" href="http://twitter.com/dafiti_brasil">Twitter</a>
                                    <a className={styles["menu-links-vertical-link"]}  title="Siga a Dafiti no Instagram" href="http://instagram.com/dafiti">Instagram</a>

                                </ul>
                            </div>
                            <div className={styles["col-md-2 footer-min-height footer-help"]}>
                                <div className={styles["title title-36"]}>Ajuda</div>
                                <ul className={styles["menu-links-vertical"]}>

                                    <a href="/perguntas-frequentes/" title="Dúvidas Frequentes" className={styles["menu-links-vertical-link"]}>Dúvidas frequentes</a>
                                    <a href="/atendimento/" title="Atendimento" className={styles["menu-links-vertical-link"]}> Atendimento</a>
                                    <a title="Trocas e devoluções" href="/perguntas-frequentes/#trocas-e-devolucoes" className={styles["menu-links-vertical-link"]}>Trocas e devoluções</a>
                                    <a title="Tipos de Frete" href="/faq?q=frete#tipos-de-frete" className={styles["menu-links-vertical-link"]}>Tipos de frete</a>
                                    <a title="Como Comprar" href="/faq/#topic=16" className={styles["menu-links-vertical-link"]}>Como comprar</a>
                                    <a title="Mapa do site" href="/mapa-do-site/" className={styles["menu-links-vertical-link"]}>Mapa do site</a>
                                    <a title="Glossário da Moda" href="/glossario/" className={styles["menu-links-vertical-link"]}>Glossário da moda</a>
                                    <a title="Termos de uso" href="https://www.dafitigroup.com/termos-de-uso"  className={styles["menu-links-vertical-link"]}>Termos de uso</a>
                                </ul>
                            </div>
                            <div className={styles["col-md-4 three-cols footer-min-height footer-about"]}>
                                <div className={styles["title title-36"]}>Dafiti</div>
                                <ul className={styles["menu-links-vertical"]}>
                                    <a title="Sobre o Dafiti Group" href="http://www.dafitigroup.com/" className={styles["menu-links-vertical-link"]}>Sobre o Dafiti Group</a>
                                    <a title="Sobre a Dafiti" href="https://www.dafitigroup.com/dafiti" className={styles["menu-links-vertical-link"]}>Institucional</a>
                                    <a title="Trabalhe conosco"  href="https://www.dafitigroup.com/oportunidades" className={styles["menu-links-vertical-link"]}>Trabalhe conosco</a>
                                    <a title="Seja nosso fornecedor" href="https://www.dafitigroup.com/nossos-fornecedores" className={styles["menu-links-vertical-link"]}>Nossos fornecedores</a>
                                    <a title="Parceiros marketplace" href="https://www.dafiti.com.br/quero-vender-na-dafiti/" className={styles["menu-links-vertical-link"]}>Parceiros marketplace</a>
                                    <a title="Sustentabilidade" href="https://www.dafitigroup.com/sustentabilidade/" className={styles["menu-links-vertical-link"]}>Sustentabilidade</a>
                                </ul>
                                <ul className={styles["menu-links-vertical"]}>
                                    <a title="Programa de afiliados" href="https://www.dafiti.com.br/programadeafiliados/" target="_parent" className={styles["menu-links-vertical-link"]}>Programa de afiliados</a>
                                    <a title="Contrato de Compra e Venda" href="https://dafitistatic.dafiti.com.br/stores-tests/docs-shops/Contrato-de-Compra-e-Venda-Dafiti.pdf"  className={styles["menu-links-vertical-link"]}>Contrato de compra e venda</a>
                                    <a title="É seguro comprar na Dafiti" href="/dafiti-e-confiavel/" className={styles["menu-links-vertical-link"]}>É seguro comprar na Dafiti</a>
                                    <a title="Anuncie Conosco" href="/dft-ads/" className={styles["menu-links-vertical-link"]}>Anuncie Conosco</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                 


                </div>
            </div>
        </>
    );
}