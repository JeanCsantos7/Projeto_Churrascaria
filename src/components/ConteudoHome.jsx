import styleCortes from "../styles/ConteudoLandingPage.module.css";
import carneImagem from "../image/churrasco imagem.jpg";
import Promoção from "./Promoção";
import Diferenciais from "./Diferenciais";
import Formulario from "./Formulario";
import Footer from "./Footer";


export default function CortesSelecionados() {
  return (
    <>
      <h1 className={styleCortes.titulo}>Cortes Selecionados todos os dias</h1>
      <h2 className={styleCortes.subTitulo}>
        O AMBIENTE PERFEITO PARA SUA FAMÍLIA
      </h2>
      <p className={styleCortes.informações}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure
        sapiente voluptas, laborum fugit ut reprehenderit reiciendis quidem
        aspernatur rem. Doloremque aliquid voluptas, natus ducimus earum
        exercitationem impedit esse quo? <br /> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dignissimos quisquam veritatis cupiditate
        numquam. Molestias quam sint itaque, id commodi qui maxime distinctio
        repellendus nemo, quas saepe facere quos, vitae laudantium.
      </p>
      <span className={styleCortes.containerImage}>
        <img className={styleCortes.imagemCarne} src={carneImagem} alt="" />
      </span>

      <Promoção></Promoção>
      <Diferenciais></Diferenciais>
      <Formulario></Formulario>
      <Footer></Footer>
    </>
  );
}
