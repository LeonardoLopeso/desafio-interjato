export interface IPropHeader {
  numpage: number;
}

export interface IPropBreadCrumbs {
  page: number;
}

export interface IPropButton {
  title: string;
  wButton?: string;
  bgColor?: string;
}

export interface IInformationProduct {
  label: string;
  description: string;
}
export interface IDetailsProduct {
  label: string;
  description: string;
}

export interface IProduct {
  id: number;
  img?: string;
  name: string;
  price: number;
  description: string;
  onClick?: () => void;
  infoProduct?: IInformationProduct[];
  detailsProduct?: IDetailsProduct[];
}