```javascript
const query = {
  $or: [
    {
      price: {
        $type: 'double'
      },
      $expr: {
        $gt: ['$price', 100]
      }
    },
    {
      price: {
        $type: 'string' 
      }
    }
  ]
};

db.collection.find(query);
```