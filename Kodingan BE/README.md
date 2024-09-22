# Catalog-Product
###### _Ini adalah kodingan back end untuk project catalog product yang berisi beberapa fitur seperti membuat catalog, mengapus catalog, dll_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Fitur yang tersedia :

- Registrasi, login dan melihat profil
- Membuat produk dan menghapus produk
- Membuat dan menghapus katalog
- Menambahkan produk ke dalam katalog
- Menghapus produk dari katalog

## Tech

Project ini dibangun dengan menggunakan :

- [TypeScript] - Bahasa Pemrograman
- [Nest.js] - framework
- [MongoDB] - platform utuk databasenya
- [Postman] - untuk melakukan testing API

#### 1. Registrasi
Endpoint: api/auth/register  
Method: POST  
Request Body:  

```
{
    "name": "test",
    "email": "test@example.com",
    "password": "password123"
}
```
Response
```
{
    "name": "test",
    "email": "test@example.com",
    "password": "$2a$10$RQnR88zIGQe.3nA2H38yxe4DndMR5t55cVtC39PC707sMgwv7Swpq"
}
```
#### 2. Login
Endpoint: api/auth/login  
Method: POST  
Request Body:  

```
{
    "email": "test@example.com",
    "password": "password123"
}
```
Response
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```
#### 3. Buat Produk
Endpoint: api/product  
Method: POST  
Request Body:  

```
{
    "name": "Laptop XYZ",
    "price": 1200,
    "quantity_available": 5
}
```
Response
```
{
    "name": "Laptop XYZ",
    "price": 1200,
    "quantity_available": 5
}
```
#### 4. Hapus Produk
Endpoint: api/product/:productID  
Method: DELETE  
Path Parameters: id: ID dari produk yang akan dihapus  

Response
```
{
    "status": true,
    "message": "Product Deleted Successfully"
}
```
#### 5. Melihat produk
Endpoint: api/product  
Method: GET  

Response
```
{
akan menampilkan semua product
}
```

#### 6. Membuat Katalog
Endpoint: api/catalog  
Method: POST  
Request Body:  

```
{
   "catalog_name": "Catalog 1",
    "is_active" : false
}
```
Response
```
{
    "id": "66e04de33aa6f37b762210e4",
    "is_active": false,
    "url": "www.linkcatalog.com/66e04de33aa6f37b762210e4"
}
```

#### 7. Menghapus Katalog
Endpoint: api/catalog/:catalogID  
Method: DELETE  
Path Parameters: catalogID: ID dari catalog yang akan dihapus  

Response
```
{
    "status": true,
    "message": "Catalog Deleted Successfully"
}
```

#### 8. Melihat Catalog
Endpoint: api/catalog  
Method: GET  

Response
```
{
akan menampilkan semua catalog
}
```

#### 9. Menambahkan Produk ke Katalog
Endpoint: api/catalog-product/:catalogID/product  
Method: POST  
Path Parameters: catalogID: isi dengan ID dari catalognya  
Request Body:  

```
{
    "product" : "66e03882beb63c099ae9e134"
}
```
Response
```
{
    "product": "66e03882beb63c099ae9e134",
    "catalog": "66e03aea8c8e03a10f8eca9e"
}
```
#### 10. Menghapus Produk dari Katalog
Endpoint: api/catalog-product/:catalogID/product/:productID  
Method: DELETE  
Path Parameters: catalogID: isi dengan ID dari catalognya  
		 productid: isi dengan ID dari produk yang ingin di delete  

Response
```
{
    "status": true,
    "message": "Product deleted from catalog Successfully"
}
```
