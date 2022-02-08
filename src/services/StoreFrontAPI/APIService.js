export const api = {
  url: 'https://pieroluxurydesign.myshopify.com/api/2022-01/graphql.json',
  token: {
    'X-Shopify-Storefront-Access-Token': '990ce2281372e77323cb61cf992dbe65',
    'Content-Type': 'application/json',
  },
  cartId: null,
};
export const createUser = (fname, lname, email, pwd) => {
  return JSON.stringify({
    query: `mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }`,
    variables: {
      input: {
        email: email,
        password: pwd,
        firstName: fname,
        lastName: lname,
      },
    },
  });
};
export const getUser = token => {
  return JSON.stringify({
    query: `query{
  customer(customerAccessToken:"${token}") {
    id
    firstName
    email
    displayName
    lastName
  }
}`,
    variables: {},
  });
};
export const createAccessToken = (email, pwd) => {
  return JSON.stringify({
    query: `mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }`,
    variables: {input: {email: email, password: pwd}},
  });
};
export const getProducts = size => {
  return JSON.stringify({
    query: `{
    products(first: ${size}) {
      edges {
        node {
          id
          title
          productType
          descriptionHtml
          featuredImage {
            url
          }
          variants(first: 250) {
            edges {
              node {
                id
                price
                title
                quantityAvailable
              }
            }
          }
          images(first: 250) {
            edges {
              node {
                url
              }
            }
          }        
        }
      }
    }
  }`,
    variables: {},
  });
};
export const createCart = information => {
  return null;
};
export const addCartItem = (cartId, variantId) => {
  return JSON.stringify({
    query: `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        attributes {
          key
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }`,
    variables: {
      cartId: cartId,
      lines: {
        merchandiseId: variantId,
      },
    },
  });
};
export const getCart = cartId => {
  return JSON.stringify({
    query: `query ($cartId: ID!){
    cart(id: $cartId) {        
      lines(first: 250) {
        edges {
          node {
            id
            merchandise {
              ... on ProductVariant {
                id
                price
                quantityAvailable
              }
            }
          }
        }
      }
    }
  }`,
    variables: {
      cartId: cartId,
    },
  });
};
export const createCheckout = information => {
  return JSON.stringify({
    query: `mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        shippingAddress {
          formatted        
        }
      }
      checkoutUserErrors {
        message
        code
        field
      }    
    }
  }`,
    variables: {
      input: {
        buyerIdentity: {countryCode: information.countryCode},
        email: information.email,
        shippingAddress: {
          address1: information.address,
          address2: information.apartment,
          city: information.city,
          country: information.country,
          firstName: information.fname,
          lastName: information.lname,
          phone: information.phone,
          province: information.state,
          zip: information.zip,
        },
      },
    },
  });
};
export const addCheckoutLineItems = (cid, items) => {
  return JSON.stringify({
    query: `mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
      checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          lineItems(first: 100) {
            edges {
              node {
                id
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          message
          code
          field
        }
      }
    }`,
    variables: {
      checkoutId: cid,
      lineItems: items,
    },
  });
};
