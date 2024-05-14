<script>
// @ts-nocheck

    let {name,extra,items,address,status,payment,email,orderNumber,stripeSessionId,date,total} = $props();
</script>
<div class="max-w-80 sm:max-w-96 md:max-w-2xl mx-auto p-4  md:p-6  lg:p-12 text-wrap bg-white rounded shadow-md">
    <h1 class="text-2xl font-bold mb-4">Order Details</h1>
    <p class="text-gray-600">Name: {name}</p>
    <p class="text-gray-600">Email: {email}</p>
    <p class="text-gray-600">Extra:{extra}</p>
    <p class="text-gray-600">Order Number: {orderNumber}</p>,
    <p class="text-gray-600">Total: {total}</p>
    <p class="text-gray-600">Status: {status}</p>
    <p class="text-gray-600">Payment: {payment}</p>
    <p class="text-gray-600">Stripe Session ID: {stripeSessionId}</p>
    <p class="text-gray-600">Date:{date}</p>
    <h2 class="text-lg font-bold mt-6">Address</h2>
    <p class="text-gray-600">Line 1: {address.line1}</p>
    <p class="text-gray-600">Line 2: {address.line2}</p>
    <p class="text-gray-600">City: {address.city}</p>
    <p class="text-gray-600">Postal Code: {address.postal_code}</p>
    <p class="text-gray-600">Country: {address.country}</p>
  
    <h2 class="text-lg font-bold mt-6">Items</h2>
    <ul>
      {#each items as item}
        <li class="flex items-center mb-4">
          <img src={item.thumbnail} alt={item.item} class="w-12 h-12 rounded mr-4" />
          <div>
            <p class="text-gray-600">{item.item}</p>
            <p class="text-gray-600">{item.price}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>