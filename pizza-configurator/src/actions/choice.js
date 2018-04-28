export const NEW_CHOICE = 'NEW_CHOICE'

export const newChoice = (name, price) => {
  return {
      type: NEW_CHOICE,
      payload: {
        name: name,
        price: price}
  }}
