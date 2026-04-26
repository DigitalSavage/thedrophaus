# Stripe Payment Integration Guide

## Overview
This guide shows how to integrate Stripe payment processing for The Drop Haus lead generation form.

## Features Implemented
✅ Email validation (proper format required)
✅ Website URL validation (accepts example.com or https://example.com)
✅ Required field validation for all steps
✅ Real-time error messages with visual feedback
✅ Payment processing state with loading indicator
✅ Success screen only shows after payment completes

## Setup Stripe Integration

### 1. Install Stripe
```bash
pnpm add @stripe/stripe-js stripe
```

### 2. Get Your Stripe Keys
1. Sign up at https://stripe.com
2. Go to Dashboard → Developers → API keys
3. Copy your **Publishable key** and **Secret key**

### 3. Add Environment Variables
Create `.env` file:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

### 4. Create Backend API Endpoint
Create `/api/create-checkout-session.ts`:

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: Request) {
  const { depositTier, email, customerData } = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Drop Haus Strategy Session - ${
              depositTier === '500' ? 'Standard' :
              depositTier === '1000' ? 'Priority' : 'VIP'
            }`,
            description: 'Strategy session deposit - applies toward full campaign',
          },
          unit_amount: parseInt(depositTier) * 100, // Convert to cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    customer_email: email,
    success_url: `${process.env.DOMAIN}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.DOMAIN}/payment-cancelled`,
    metadata: {
      brandName: customerData.brandName,
      industry: customerData.industry,
      campaignType: customerData.campaignType,
      budget: customerData.budget,
      timeline: customerData.timeline,
    },
  });

  return Response.json({ sessionId: session.id });
}
```

### 5. Update IntakeModal.tsx

Replace the payment section in `handleSubmit`:

```typescript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const handleSubmit = async () => {
  if (!validateStep(7)) return;
  setIsProcessingPayment(true);

  try {
    // Create Stripe checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        depositTier: formData.depositTier,
        email: formData.email,
        customerData: formData,
      }),
    });

    const { sessionId } = await response.json();
    
    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({ sessionId });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Payment error:', error);
    setErrors({ payment: 'Payment failed. Please try again.' });
    setIsProcessingPayment(false);
  }
};
```

## Alternative: Stripe Payment Element (Embedded)

For an embedded payment form (stays on your site), use Stripe Elements:

```bash
pnpm add @stripe/react-stripe-js
```

See: https://stripe.com/docs/payments/payment-element

## Webhook Setup (Important!)

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/stripe-webhook`
3. Listen for `checkout.session.completed`
4. Save lead data to your CRM when payment succeeds

## Testing

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

Any future expiry date and any 3-digit CVC.

## Production Checklist

- [ ] Replace test keys with live keys
- [ ] Set up webhook endpoint
- [ ] Configure success/cancel URLs
- [ ] Test payment flow end-to-end
- [ ] Enable email receipts in Stripe
- [ ] Connect to CRM (HubSpot, etc.)
