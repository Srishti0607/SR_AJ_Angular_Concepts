import { ProductbillingComponent } from "./productbilling.component"

export class Product
{
    productID!: number;
    productName!: string;
    cost!: number;
    quantity!: number;
    billAmount!: number;
    discount!: number;
    netBillAmount!: number;
}