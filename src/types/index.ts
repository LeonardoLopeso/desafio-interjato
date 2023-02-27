import { ReactNode } from "react";

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
  onClick?: () => void;
  children?: ReactNode;
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
  qtd?: number;
}

export interface ICart {
  id?: number;
  cartItems: IProduct[];
  valor_total: number;
}

export interface IItem {
  qtd: number;
  id?: number;
  prod?: IProduct;
}

export interface Cart {
  id: number;
  qtd: number;
}