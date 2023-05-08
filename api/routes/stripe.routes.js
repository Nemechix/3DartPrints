// price_1N5RP8Lq0Q7kbXgYpEsyfyyI cafe
//price_1N5RQzLq0Q7kbXgYT3YR62cr gafas
//price_1N5RS6Lq0Q7kbXgYuYQnWyZr camera


const stripe = require('stripe')('sk_test_51N4PBRLq0Q7kbXgYAxRg1hiePFEE5E5QVivcLfo1S3qIfz6prhLArOpy1iaF9ZkZqU2rTqErJjm9GcGwWgWhmpck00nvP7r8Ak')


const router = require('express').Router()

const { checkAuth, checkAdmin } = require('../middleware/auth')


router.post("/checkout", async (req, res) => {


    console.log("items are", req.body.items)
    const items = req.body.items
    let lineItems = []
    console.log("line items are", lineItems)
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"

    })

    res.send(JSON.stringify({
        url: session.url
    }))
})



module.exports = router