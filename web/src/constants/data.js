import Perfil from "../assets/perfil.jpg";

import CheckCircle from "../assets/check-circle.svg";
import Lock from "../assets/lock.svg";
import Grafic from "../assets/grafic.svg";
import ChartPie from "../assets/pie-chart.svg";

const dataAvatar = [
  {
    name: "John",
    email: "john@email.com",
    photo: Perfil
  }
];

const dataDashboard = [
  {
    id: 1,
    title: "Trabalhos Feitos",
    quantity: "250",
    icon: Lock,
  },
  {
    id: 2,
    title: "Quantidade de colaboradores",
    quantity: "10",
    icon: CheckCircle
  },
  {
    id: 3,
    title: "Despesas",
    quantity: "R$50,000",
    icon: Grafic,
  },
  {
    id: 4,
    title: "Despesas",
    quantity: "R$50,000",
    icon: ChartPie,
  }
];

const dataColaboradores = [
  {
    name: "John",
    servicesQuantity: "10",
    faturamento: "R$ 5,500"
  },
  {
    name: "Maria",
    servicesQuantity: "5",
    faturamento: "R$ 1,200"
  },
  {
    name: "Cris",
    servicesQuantity: "7",
    faturamento: "R$ 3,000"
  },
  {
    name: "Rafael",
    servicesQuantity: "3",
    faturamento: "R$ 500"
  },
  {
    name: "John",
    servicesQuantity: "10",
    faturamento: "R$ 5,500"
  },
  {
    name: "Antonia",
    servicesQuantity: "14",
    faturamento: "R$ 15,500"
  },
  {
    name: "Joana",
    servicesQuantity: "2",
    faturamento: "R$ 1,000"
  },
  {
    name: "Christopher",
    servicesQuantity: "20",
    faturamento: "R$ 27,500"
  },
  {
    name: "Manoel",
    servicesQuantity: "5",
    faturamento: "R$ 3,500"
  },
]

export default { dataAvatar, dataDashboard, dataColaboradores };
