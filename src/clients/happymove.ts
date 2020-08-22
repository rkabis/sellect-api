const distanceToPrice = (size,distance) => {
  switch (size) {
  case 'small':
    return 60+8*distance
  case 'medium':
    return 250+20*distance
  case 'large':
    return 480+30*distance
  }
}

const happymoveRequest = (req) => {
  const size = req.size
  const distance = Math.floor(req.distance.split(' ')[0])

  const price = distanceToPrice(size,distance)

  return price.toString()
}

export default happymoveRequest