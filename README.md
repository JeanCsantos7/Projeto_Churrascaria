import styleContatos from "../styles/ConteudoContatos.module.css";
import Logotipo from "../image/Logotipo.png";

export default function ConteudoContatos() {
  return (
    <>
      <h1 className={styleContatos.Titulo}>Ficou alguma dúvida?</h1>
      <h2 className={styleContatos.Subtitulos}>Fale Conosco</h2>
      <div className={styleContatos.Container}>
        <div className={styleContatos.Circulo}>
          <img className={styleContatos.Logotipo} src={Logotipo} alt="" />
        </div>

        <label className={styleContatos.containerInputs} htmlFor="">
          Nome
          <input className={styleContatos.camposInput} type="text" />
        </label>

        <label className={styleContatos.containerInputs} htmlFor="">
          E-mail
          <input className={styleContatos.camposInput} type="text" />
        </label>

        <label className={styleContatos.containerInputs} htmlFor="">
          Telefone
          <input className={styleContatos.camposInput} type="text" />
        </label>

        <label className={styleContatos.containerInputs} htmlFor="">
          Sua Dúvida
          <input className={styleContatos.caixaTexto} type="text" />
        </label>

        <button className={styleContatos.btnInput}>Enviar</button>
      </div>

      <div>
        <p style={{ color: "#FFF" }}>.</p>
      </div>
    </>
  );
}
