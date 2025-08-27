import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import SectionHeader from "../sectionElements/SectionHeader";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import imgNews1 from "../../assets/imgs/news/news1.png";
import imgNews2 from "../../assets/imgs/news/news2.png";
import imgNews3 from "../../assets/imgs/news/news3.png";

function NwesPosts() {
  // Array de posts
  const posts = [
    {
      link: "https://revistapegn.globo.com/negocios/noticia/2023/03/nove-em-dez-brasileiros-pesquisam-online-antes-de-comprar-diz-google.ghtml",
      title: "Nove em dez brasileiros pesquisam online antes de comprar",
      subtitle:
        "Pesquisa do Google mostra que consumidores brasileiros buscam informações online antes de comprar produtos.",
      img: <img src={imgNews1} alt="Notícia 1" className="rounded-2xl" />,
    },
    {
      link: "https://www.terra.com.br/noticias/marketing-de-conteudo-custa-62-menos-do-que-o-marketing-tradicional-e-gera-ate-3x-mais-resultados-aponta-pesquisa,0725c89939e94bfecc870cc1c6d75df169729jr6.html",
      title:
        "Marketing de conteúdo custa 62% menos que o tradicional e gera até 3x mais resultados",
      subtitle:
        "Estudo aponta que empresas que investem em marketing de conteúdo obtêm maior retorno com custo reduzido.",
      img: <img src={imgNews2} alt="Notícia 2" className="rounded-2xl" />,
    },
    {
      link: "https://itforum.com.br/sites-moveis-necessitam-bem-mais-que-um-layout-responsivo/amp/",
      title: "Sites móveis necessitam bem mais que um layout responsivo",
      subtitle:
        "Para uma boa experiência, sites móveis precisam considerar performance, UX e velocidade de carregamento.",
      img: <img src={imgNews3} alt="Notícia 3" className="rounded-2xl" />,
    },
  ];

  return (
    <SectionArea className="squares" id="blog" paddingbot={false}>
      <SectionWrapper>
        <SectionHeader
          className="text-center"
          miniTitle="NOTÍCIAS E TENDÊNCIAS"
          sectionHeaderTitle="O mundo digital não espera. Seu negócio precisa estar online."
          sectionHeaderSubtitle="Cerca de 90% dos consumidores pesquisam online antes de comprar"
          color=""
          titleColorSet="text-black"
          subtitleColorSet="text-black"
          type=""
        />

        <ul className="flex flex-wrap gap-[30px] justify-center ">
          {posts.map((post, index) => (
            <li key={index}>
              <WordPressBlogCard
                img={post.img}
                title={post.title}
                subtitle={post.subtitle}
                link={post.link}
              />
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </SectionArea>
  );
}

export default NwesPosts;
