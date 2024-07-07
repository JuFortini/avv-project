export interface FAQDataProps {
  id: number;
  question: string;
  answer: string;
}

export const FAQS: FAQDataProps[] = [
  {
    id: 1,
    question: "A consulta é de graça mesmo?",
    answer: "Sim! Trabalhamos de maneira voluntária, levando saúde ocular para as comunidades gratuitamente."
  },
  {
    id: 2,
    question: "São profissionais que fazem o atendimento?",
    answer: "Sim! Nossos profissionais são devidamente qualificados todos com faculdade concluída e experiência mínima de 5 anos. Não atuamos com estagiários",
  },
  {
    id: 3,
    question: "Quem pode participar?",
    answer: "Crianças até 2 anos para 'Teste do Olhinho' e pessoas a partir de 7 anos completados para consulta normal.",
  },
  {
    id: 4,
    question: "Preciso de óculos e agora?",
    answer: "O laboratório Social tem essa função: garantir que todo paciente que precisar de óculos consiga comprá-los por um preço acessível.",
  },
  {
    id: 5,
    question: "O paciente fica com a receita?",
    answer: "Sim! A receita é do paciente. Não existe nenhuma obrigatoriedade de aquisição com o Laboratório Social.",
  },
];
