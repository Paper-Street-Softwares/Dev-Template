/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";
import emailjs from "emailjs-com";
import {
  User,
  Phone,
  Mail,
  FileText,
  DollarSign,
  ListChecks,
  Calendar,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contractInfo, setContractInfo] = useState("");
  const [type, setType] = useState("");
  const [financedValue, setFinancedValue] = useState("");
  const [installments, setInstallments] = useState("");
  const [paidInstallments, setPaidInstallments] = useState("");
  const [installmentValue, setInstallmentValue] = useState("");
  const [lateInstallments, setLateInstallments] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendToEmail = () => {
    setIsSubmitting(true);
    const validationErrors = {};

    if (!name) validationErrors.name = "O campo Nome é obrigatório.";
    if (!phone) validationErrors.phone = "O campo Telefone é obrigatório.";
    if (!email) validationErrors.email = "O campo Email é obrigatório.";
    if (!contractInfo)
      validationErrors.contractInfo =
        "O campo Informações do contrato é obrigatório.";
    if (!type) validationErrors.type = "O campo Tipo é obrigatório.";
    if (!financedValue)
      validationErrors.financedValue =
        "O campo Valor Financiado é obrigatório.";
    if (!installments)
      validationErrors.installments =
        "O campo Quantidade de Parcelas é obrigatório.";
    if (!paidInstallments)
      validationErrors.paidInstallments =
        "O campo Quantidade de parcelas pagas é obrigatório.";
    if (!installmentValue)
      validationErrors.installmentValue =
        "O campo Valor da Parcela é obrigatório.";
    if (!lateInstallments)
      validationErrors.lateInstallments =
        "O campo Parcelas em atraso é obrigatório.";
    if (!message) validationErrors.message = "O campo Mensagem é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      phone,
      email,
      contractInfo,
      type,
      financedValue,
      installments,
      paidInstallments,
      installmentValue,
      lateInstallments,
      message,
    };

    emailjs
      .send(
        "service_gik4w8p", // substitua pelo seu Service ID
        "template_o4kc0ak", // substitua pelo seu Template ID
        templateParams,
        "8bJXn-qPMOzTraXbd" // substitua pela sua Public Key
      )
      .then(
        () => {
          alert("Mensagem enviada por email com sucesso!");
          setIsSubmitting(false);
          // Limpar campos
          setName("");
          setPhone("");
          setEmail("");
          setContractInfo("");
          setType("");
          setFinancedValue("");
          setInstallments("");
          setPaidInstallments("");
          setInstallmentValue("");
          setLateInstallments("");
          setMessage("");
          setErrors({});
        },
        (error) => {
          alert("Erro ao enviar email: " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="bg-bgSectionDark p-6 rounded-[10px] w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4">
        {/* Nome */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block font-medium mb-1 text-gray-300"
          >
            Nome
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <User />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
            />
          </div>
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        {/* Telefone */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block font-medium mb-1 text-gray-300"
          >
            Telefone
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <Phone />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(00) 00000-0000"
              required
            />
          </div>
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block font-medium mb-1 text-gray-300"
          >
            Email
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <Mail />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
            />
          </div>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Informações do contrato */}
        <div className="mb-6">
          <label
            htmlFor="contractInfo"
            className="block font-medium mb-1 text-gray-300"
          >
            Informações do contrato
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <FileText />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="contractInfo"
              value={contractInfo}
              onChange={(e) => setContractInfo(e.target.value)}
              placeholder="Contrato"
              required
            />
          </div>
          {errors.contractInfo && (
            <p className="text-red-500">{errors.contractInfo}</p>
          )}
        </div>

        {/* Tipo */}
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block font-medium mb-1 text-gray-300"
          >
            Tipo
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <ListChecks />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Tipo"
              required
            />
          </div>
          {errors.type && <p className="text-red-500">{errors.type}</p>}
        </div>

        {/* Valor Financiado */}
        <div className="mb-6">
          <label
            htmlFor="financedValue"
            className="block font-medium mb-1 text-gray-300"
          >
            Valor Financiado
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <DollarSign />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="financedValue"
              value={financedValue}
              onChange={(e) => setFinancedValue(e.target.value)}
              placeholder="R$ 0,00"
              required
            />
          </div>
          {errors.financedValue && (
            <p className="text-red-500">{errors.financedValue}</p>
          )}
        </div>

        {/* Quantidade de Parcelas */}
        <div className="mb-6">
          <label
            htmlFor="installments"
            className="block font-medium mb-1 text-gray-300"
          >
            Quantidade de Parcelas
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <Calendar />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="number"
              id="installments"
              value={installments}
              onChange={(e) => setInstallments(e.target.value)}
              placeholder="Ex: 36"
              required
            />
          </div>
          {errors.installments && (
            <p className="text-red-500">{errors.installments}</p>
          )}
        </div>

        {/* Parcelas Pagas */}
        <div className="mb-6">
          <label
            htmlFor="paidInstallments"
            className="block font-medium mb-1 text-gray-300"
          >
            Parcelas Pagas
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <ListChecks />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="number"
              id="paidInstallments"
              value={paidInstallments}
              onChange={(e) => setPaidInstallments(e.target.value)}
              placeholder="Ex: 12"
              required
            />
          </div>
          {errors.paidInstallments && (
            <p className="text-red-500">{errors.paidInstallments}</p>
          )}
        </div>

        {/* Valor da Parcela */}
        <div className="mb-6">
          <label
            htmlFor="installmentValue"
            className="block font-medium mb-1 text-gray-300"
          >
            Valor da Parcela
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <DollarSign />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="text"
              id="installmentValue"
              value={installmentValue}
              onChange={(e) => setInstallmentValue(e.target.value)}
              placeholder="R$ 500,00"
              required
            />
          </div>
          {errors.installmentValue && (
            <p className="text-red-500">{errors.installmentValue}</p>
          )}
        </div>

        {/* Parcelas em atraso */}
        <div className="mb-6">
          <label
            htmlFor="lateInstallments"
            className="block font-medium mb-1 text-gray-300"
          >
            Parcelas em atraso
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-center justify-center w-12 px-1 bg-bgSectionLight">
              <AlertTriangle />
            </div>
            <input
              className="w-full px-1 py-2 border-0 rounded-none"
              type="number"
              id="lateInstallments"
              value={lateInstallments}
              onChange={(e) => setLateInstallments(e.target.value)}
              placeholder="Ex: 2"
              required
            />
          </div>
          {errors.lateInstallments && (
            <p className="text-red-500">{errors.lateInstallments}</p>
          )}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block font-medium mb-1 text-gray-300"
          >
            Mensagem
          </label>
          <div className="flex text-gray-500">
            <div className="flex items-start justify-center w-12 px-1 bg-bgSectionLight">
              <MessageCircle className="mt-[14px]" />
            </div>
            <textarea
              className="w-full px-1 py-2 border-0 rounded-none"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />
          </div>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        {/* Botão */}
        <button
          type="button"
          className="flex items-center w-full font-medium text-bgSectionDark bg-white transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToEmail}
          disabled={isSubmitting}
        >
          <div className="flex items-center justify-center w-full">
            <img
              src={WhatsAppIcon}
              className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
              alt="Email Icon"
            />
            <p>{isSubmitting ? "Enviando..." : "Solicitar análise gratuita"}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
