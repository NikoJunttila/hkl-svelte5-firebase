<script>
// @ts-nocheck

  
    let {date,items, orderNumber, status, name,total } = $props();
  

  </script>
  
  <style>
    .order-container {
      border: 1px solid #ccc;
      padding: 20px;
      margin: 20px auto;
      max-width: 500px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
  
    h2 {
      text-align: center;
    }
  
    .order-details {
      margin-top: 20px;
    }
  
    .order-detail {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  
    .order-detail-label {
      font-weight: bold;
    }
  </style>
  
  <div class="order-container">
    <h2>Order #{orderNumber}</h2>
    <div class="order-details">
      <div class="order-detail">
        <span class="order-detail-label">Date:</span>
        <span>{date}</span>
      </div>
      <div class="order-detail">
        <span class="order-detail-label">Status:</span>
        <span>{status}</span>
      </div>
      <div class="order-detail">
        <span class="order-detail-label">Name:</span>
        <span>{name}</span>
      </div>
      <p class="text-gray-600">Total: {total}</p>
      <h3>Items:</h3>
      <div class="grid-container">
        {#each items as item}
        <div class="card">
          <a href={`/store/1/${item.id}`}>
            <img width="200px" height="200px" src={item.thumbnail} alt={item.item}>
            <p>{item.item} - ${item.price}</p>
          </a>
        </div>
        {/each}
      </div>
    </div>
  </div>