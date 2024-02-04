export interface ItemBody {
    name: string
    price: number
    isOwner: boolean
    description: string
    id: string
}

export type RootStackParamList = {
    HomeScreen: undefined,
    YourItemsScreen: undefined,
    CartScreen: undefined,
    CheckoutScreen: undefined,
    SellScreen: undefined,
    ItemScreen: ItemBody | undefined;
  };
  