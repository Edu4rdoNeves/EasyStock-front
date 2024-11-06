import React, { useState, useEffect } from 'react';
import './ProductManagement.css';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Importando ícones de lápis e lixeira

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', quantity: '' });

  const handleSearch = () => {
    // Substitua com a chamada real à sua API
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/api/v1/product?search=${searchTerm}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setSearchTerm(''); // Limpa o campo de busca após a busca
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true); // Abre o formulário de edição
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/api/v1/product/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch((error) => {
        console.error("Erro ao deletar produto:", error);
      });
  };

  const handleAddProduct = () => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:8080/api/v1/product`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        setProducts([...products, data]);
        setNewProduct({ name: '', description: '', price: '', quantity: '' });
        setShowForm(false); // Fecha o formulário após adicionar
      })
      .catch(error => {
        console.error("Erro ao adicionar produto:", error);
      });
  };

  return (
    <div className="product-management-container">
      <h1>Product Management</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por ID ou nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {products.length > 0 && (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h2>{product.name}</h2>
              <p>Descrição: {product.description}</p>
              <p>Preço: {product.price.toFixed(2)} USD</p>
              <p>Quantidade: {product.quantity}</p>
              <p>ID: {product.id}</p>
              <div className="action-buttons">
                <FaEdit onClick={() => handleEdit(product)} />
                <FaTrash onClick={() => handleDelete(product.id)} />
              </div>
            </div>
          ))}
        </div>
      )}

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar Cadastro' : 'Adicionar Novo Produto'}
      </button>

      {showForm && (
        <div className="form-container">
          <h3>{selectedProduct ? 'Editar Produto' : 'Cadastrar Novo Produto'}</h3>
          <input
            type="text"
            placeholder="Nome"
            value={selectedProduct ? selectedProduct.name : newProduct.name}
            onChange={(e) => {
              if (selectedProduct) {
                setSelectedProduct({ ...selectedProduct, name: e.target.value });
              } else {
                setNewProduct({ ...newProduct, name: e.target.value });
              }
            }}
          />
          <input
            type="text"
            placeholder="Descrição"
            value={selectedProduct ? selectedProduct.description : newProduct.description}
            onChange={(e) => {
              if (selectedProduct) {
                setSelectedProduct({ ...selectedProduct, description: e.target.value });
              } else {
                setNewProduct({ ...newProduct, description: e.target.value });
              }
            }}
          />
          <input
            type="number"
            placeholder="Preço"
            value={selectedProduct ? selectedProduct.price : newProduct.price}
            onChange={(e) => {
              if (selectedProduct) {
                setSelectedProduct({ ...selectedProduct, price: e.target.value });
              } else {
                setNewProduct({ ...newProduct, price: e.target.value });
              }
            }}
          />
          <input
            type="number"
            placeholder="Quantidade"
            value={selectedProduct ? selectedProduct.quantity : newProduct.quantity}
            onChange={(e) => {
              if (selectedProduct) {
                setSelectedProduct({ ...selectedProduct, quantity: e.target.value });
              } else {
                setNewProduct({ ...newProduct, quantity: e.target.value });
              }
            }}
          />
          <button onClick={selectedProduct ? () => handleAddProduct() : handleAddProduct}>
            {selectedProduct ? 'Atualizar Produto' : 'Cadastrar Produto'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
