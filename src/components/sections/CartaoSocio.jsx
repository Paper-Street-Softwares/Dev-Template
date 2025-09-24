import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import SalvarContatoButton from "../interactives/Cartao/SalvarContato";
import CartaoRedeSocial from "../interactives/Cartao/CartaoRedeSocial";

function CartaoSocio() {
  const { nome } = useParams(); // pega a rota
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  // Busca o sócio no conteúdo
  const socioKey = Object.keys(content.texts.socios).find((key) => {
    const socioNome = content.texts.socios[key]?.nome;
    return socioNome?.toLowerCase() === nome?.toLowerCase();
  });

  if (!socioKey) return <div>Sócio não encontrado</div>;

  const socio = content.texts.socios[socioKey];
  const url = `${window.location.origin}/${nome.toLowerCase()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Conteúdo do modal de compartilhamento
  const modalTitle = "Compartilhar";
  const modalContent = (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-green-500 text-white"
        >
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-blue-600 text-white"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 border rounded bg-sky-400 text-white"
        >
          Twitter
        </a>
      </div>

      <p className="text-sm text-gray-600">
        Copie o link e cole em qualquer lugar que você queira compartilhá-lo:
      </p>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={url}
          readOnly
          className="flex-1 border rounded p-1"
        />
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-gray-800 text-white rounded"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="pt-6 max-w-[320px] m-auto font-mainFont">
      {/* Botões principais */}
      <div className="flex justify-center gap-2">
        <SalvarContatoButton socio={socio} />
        <button
          onClick={() => setVisible(true)}
          className="border-[1px] rounded-[3px] p-1"
        >
          Compartilhar
        </button>
      </div>

      <div className="p-[24px]">
        {/* Imagem principal */}
        <div className="max-w-[248px] m-auto">
          <img
            src="https://framerusercontent.com/images/sDneavQmO6nNghSxaAImS72j4g8.webp?scale-down-to=512&width=720&height=526"
            alt=""
          />
        </div>

        {/* Logo e descrição */}
        <div className="pt-[24px]">
          <div>
            <img
              src="https://dev-site-paper.vercel.app/assets/logo-CbJtwANr.webp"
              alt=""
              className="border-[1px] w-[200px] bg-black p-5 rounded-[5px] m-auto"
            />
          </div>
          <div className="w-[200px] m-auto text-center leading-5 py-[10px]">
            <h1 className="text-paragraph5 font-semibold">
              Degustatto Sabores Artesanais
            </h1>
          </div>
          <div className="pt-[24px] w-[190px] m-auto">
            <i>
              <p className="text-black/30 m-auto text-paragraph3 text-center">
                Reiventamos sabores para compor a sua mesa, seja num delicioso
                café da manhã ou até mesmo numa inusitada noite de vinhos.
                Deguste incríveis geléias e conservas produzidas artesanalmente,
                com muito afeto e carinho.
              </p>
            </i>
          </div>

          {/* Informações profissionais */}
          <div className="w-[205px] m-auto pt-[24px]">
            <h1 className="text-black/30 text-[15px] font-bold text-center pb-[10px]">
              Informações Profissionais
            </h1>
            <div className="flex flex-wrap gap-2 h-[48px] w-[205px] px-2 justify-center">
              <CartaoRedeSocial tipo="contato" socio={socio} />
            </div>
            <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div>
          </div>

          {/* Perfis profissionais */}
          <div className="w-[205px] m-auto pt-[24px]">
            <h1 className="text-black/30 font-bold text-center pb-[10px]">
              Perfis Profissionais
            </h1>
            <div className="flex justify-around h-[48px]">
              <CartaoRedeSocial tipo="social" socio={socio} />
            </div>
            <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de compartilhamento */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </div>
  );
}

export default CartaoSocio;
