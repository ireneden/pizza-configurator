export const NEW_PRICE = 'NEW_PRICE'

export const newPrice = (price) => {
  return {
      type: NEW_PRICE,
      payload: price
  }}
