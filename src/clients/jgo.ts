const jgoRequest = (req) => {
  const distance = Math.floor(req.distance.split(' ')[0])

  const price = 50+5*distance

  return price.toString()
}

export default jgoRequest