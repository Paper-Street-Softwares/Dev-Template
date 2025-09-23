import React from "react";
import IconButton from "../interactives/IconButton";
import CartaoRedeSocial from "../interactives/Cartao/CartaoRedeSocial";

function CartaoSocio() {
  return (
    <div className="pt-6 max-w-[320px] m-auto font-mainFont">
      {/* div dos botoes */}
      <div className="flex justify-center gap-2">
        <button className="border-[1px] rounded-[3px] p-1">
          Salvar Contato
        </button>
        <button className="border-[1px] rounded-[3px] p-1">Compartilhar</button>
      </div>

      <div className="p-[24px]">
        {/* div da imagem maior */}
        <div className="max-w-[248px] m-auto">
          <img
            src="https://framerusercontent.com/images/sDneavQmO6nNghSxaAImS72j4g8.webp?scale-down-to=512&width=720&height=526"
            alt=""
          />
        </div>

        {/* div da logo com os textos */}
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
              {" "}
              <p className="text-black/30 m-auto text-paragraph3 text-center">
                {" "}
                Reiventamos sabores para compor a sua mesa, seja num delicioso
                café da manhã ou até mesmo numa inusitada noite de vinhos.
                Deguste incríveis geléias e conservas produzidas artesanalmente,
                com muito afeto e carinho.
              </p>
            </i>
          </div>

          {/* div Informações Profissionais */}
          <div className=" w-[205px] m-auto pt-[24px]  ">
            <h1 className="text-black/30 text-[15px] font-bold text-center pb-[10px] ">
              Informações Profissionais
            </h1>
            <div className="flex flex-wrap gap-2 h-[48px] w-[205px] px-2 justify-center">
              <CartaoRedeSocial whatsapp={true} telefone={true} />
            </div>
            <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div>
          </div>

          {/* div Perfis Profissionais */}
          <div className="w-[205px] m-auto pt-[24px]">
            {" "}
            <h1 className="text-black/30 font-bold text-center pb-[10px]">
              Perfis Profissionais
            </h1>
            <div className="flex justify-around h-[48px]">
              <CartaoRedeSocial instagram={true} />
            </div>
            <div className="flex justify-center">
              <button className="border-[1px] text-paragraph2 rounded-[3px] py-[3.2px] px-[9.6px]">
                Ver como texto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartaoSocio;
