

export interface Product {

_id: string;
productName: string;
type: "product";
image? :{
    asset: {
        _ref : string;
        _type : "image";

    }
};
price: number;
description: string;

}