export interface ProductInterface {
        id: number;
        discount: number;
        isDiscount: boolean;
        name: string;
        oldPrice: number;
        price: number;
        url: string;
        rate: number;
      }
      
      export interface LoginResponse {
        sts: number;
        data: any; 
      }
      
      export interface FormikValues {
        email: string;
        password: string;
      }
      
      export interface ProductMapperInterface {
        array: Array<ProductInterface>; 
        type: string;
      }
      
      export interface BreadcrumbInterface {
        array: Array<string>; 
      }
      

      export  interface CommonMenuProps {
        anchorEl: HTMLElement | null;
        open: boolean;
        handleClose: () => void;
        children: React.ReactNode;
      }