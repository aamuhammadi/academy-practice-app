import React from "react";
import { useParams } from "react-router-dom";

function ItemDetailPage() {
  const params = useParams();

  return (
    <div>
      <h1>Product name: {params.id}</h1>
    </div>
  );
}

export default ItemDetailPage;
