export interface ItemBody {
    name: string
    price: number
    seller: string
    description: string
    id: string
}

export type RootStackParamList = {
    HomeScreen: undefined,
    CartScreen: undefined,
    CheckoutScreen: undefined,
    SellScreen: undefined,
    ItemScreen: ItemBody | undefined;
  };
  