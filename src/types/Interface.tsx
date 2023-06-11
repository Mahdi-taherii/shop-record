export interface IButton {
  text: string;
  Click?: any;
  config?: string;
  icon?: string;
}
export interface IProductDetails {
  text: string;
  type: "primary" | "secondary" | "success" | "danger" | "info" | "warning";
  Click: Function;
  size: "small" | "large" | "circle-sm" | "circle-lg";
  icon?: string;
}
export interface IProductCard {
  data?: any;
  id: number;
  gender: string;
  model: string;
  title: string;
  brand: string;
  price: string;
  inStock: number;
  src: Array<string>;
  description: string;
  category: string;
}
export interface IProductQuickView {
  data: any;
  gender: string;
  title: string;
  brand: string;
  price: string;
  category: string;
  src: Array<any>;
  description: string;
  condition?: boolean;
  model: string | number;
  id: string | number;
  deliveryDate?: string;
  close: Function;
  goToProduct?: Function;
}
export interface ICarousel {
  src: Array<string>;
  description?: string;
  size?: string;
  color?: string;
}
export interface ILayout {
  children: React.ReactNode;
}
export interface ICategoryCard {
  src: Array<string>;
  titles: Array<string>;
}
export interface ICardSlideShow {
  products: Array<object>;
  view: any;
  header: string;
  color: string;
}
export interface IActiveHeader {
  active: string;
}

export interface IBrands {
  src: Array<string>;
}

export interface ISearch {
  data: Array<any>;
  onChange: Function;
}
export interface IPagination {
  currentPage: string | number;
  totalPages: string | number;
  divideBy: number;
  back: Function;
  forward: Function;
}

export interface ITabs {
  color: string;
}
export interface IOrderQuickView {
  // data: {
  //   id?: number;
  //   gender: string;
  //   category: string;
  //   title: string;
  //   model: string;
  //   brand: string;
  //   price: number;
  //   inStock: number;
  //   src: Array<any>;
  //   description: string;
  //   orderDate: string;
  //   deliveryDate: string;
  //   deliveryStatus:string;
  // };
  data: any;
  condition?: boolean;
  isEdit?: boolean;
  close: Function;
  submit: Function;
}

export interface ITextEditor {
  description: string;
  setChange: Function;
}
