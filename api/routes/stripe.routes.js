const stripe = require('stripe')('sk_test_51N4PBRLq0Q7kbXgYAxRg1hiePFEE5E5QVivcLfo1S3qIfz6prhLArOpy1iaF9ZkZqU2rTqErJjm9GcGwWgWhmpck00nvP7r8Ak')
const router = require('express').Router()

router.post("/checkout", async (req, res) => {
  const items = req.body.items
  let lineItems = []

  items.forEach((item) => {
    lineItems.push({
      price: item.stripeId,
      quantity: item.quantity
    })
  })

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://3dartprints.netlify.app/user/payments",
      cancel_url: "https://3dartprints.netlify.app/user/cart"
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).send("Test")
  }
})

module.exports = router