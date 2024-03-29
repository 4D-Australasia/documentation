---
id: api
title: API
sidebar_label: API
slug: /api
---

# General

## Login

Returns a Bearer token. This token must be passed to all API calls.

```
POST https://<Dashnetics domain>/rest2/login
```

### Input

```json
{
  "username": "<USERNAME>",
  "password": "<PASSWORD>"
}
```

| Param    | Details  |
| -------- | -------- |
| username | Username |
| password | Password |

### Output

```json
{
  "auth_token": "XXX",
  "refresh_token": "YYY",
  "token_type": "Bearer",
  "expires_in": 8400
}
```

| Param         | Details                                               |
| ------------- | ----------------------------------------------------- |
| auth_token    | Token to be used as a Bearer token in other API calls |
| refresh_token |                                                       |
| token_type    | Always 'Bearer'                                       |
| expires_in    | Time to token expiry                                  |

# Payments

## Using Dashnetics to collect Payments

Dashnetics can be used to collect payments via custom forms and integrated payment gateways.

### Process

1. Start Transaction process in Dashnetics

1. [Login](api.md#login)
1. [Start Transaction](api.md#start-transaction)

1. Send Users to page in Dashnetics

1. The URI is the payment page that has been setup. Pass the order ID returned from the call to start transaction as a parameter.

```
https://Dashnetics.com.au/payment?orderId=<your orderId>&return=<Uri to return to after payment is submitted>
```

| Param     |          | Details                                                                      |
| --------- | -------- | ---------------------------------------------------------------------------- |
| orderId   | Required | order ID returned from call to [Start Transaction](api.md#start-transaction) |
| returnUrl | Optional | Url to return to after payment has been submitted by user                    |

1. Once user has submitted the form for payment they will either be returned to 'returnUrl' passed, or handled by Dashnetics.

1. Receive Status of Payment
1. Once payment has been processed Dashnetics will call URL passed as callback in [Start Transaction](api.md#start-transaction) with the [result of the payment](api.md#payment-result)

## Start Payment

Starts a payment transaction in Dashnetics

```
POST https://<Dashnetics domain>/rest2/payment/create
```

### Input

```json
{
    "amount":10000,
    "description: "Test Payment",
    "info": "Payment 1",
    "callback": "https://your.callback.url"
}
```

| Param       | Details                                                                  |
| ----------- | ------------------------------------------------------------------------ |
| amount      | Amount of the payment in cents                                           |
| description | Description of the payment, can be shown to users in the Dashnetics form |
| info        | Payment information sent to the payment gateway                          |
| callback    | URI to callback with the results of the payment                          |

### Output

```json
{
  "orderId": "XXX"
}
```

| Param   | Details                           |
| ------- | --------------------------------- |
| orderId | Order ID to be sent to Dashnetics |

## Payment Result

Sent back to callback URI sent in [Start Payment](#start-payment)

### Output

```json
{
  "dateSent": "2020-07-28T00:15:02.868Z",
  "status": "Success",
  "bankTransactionId": "111111",
  "message": "Transaction successful"
}
```

| Param             | Details                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- |
| dateSent          | Date and time sent to payment gateway                                                    |
| status            | Status of Transaction "Success" or "Failure"                                             |
| bankTransactionId | Id of the payment from the payment gateway                                               |
| message           | Message from the payment gateway. If status is Failure, will be the cause of the failure |
