
document.getElementById('addItemBtn').addEventListener('click', function() {
  // Create a new item
  var newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = 'New Item';

  // Change color of an existing item
  var existingItem = document.querySelector('.item');
  existingItem.style.color = 'red';

  // Append the new item to the list
  document.getElementById('itemList').appendChild(newItem);
});
