import { gql } from '@apollo/client'

export const PRODUCT_QUERY = gql`
    query getProducts {
        products{
        id,
        title,
        image_url,
        price(currency:USD),
        
        }
    }
`;

export const CURRENCIES_QUERY = gql`
query getCurrencies {
  currency
}`

export const PRODUCT_CURRENCY_QUERY = gql`
    query ProductByCurrency($currency: Currency!) {
        products {
            id,
            title,
            image_url,
            price(currency:$currency)
        }
    }
`
