<template>
<div>
<b-form-input v-model="product_name" placeholder="product name" required></b-form-input><br><br>
<b-form-input v-model="product_price" placeholder="product price" required></b-form-input><br><br>
<b-form-input v-model="product_category" placeholder="product category" required></b-form-input><br><br>
<b-button @click=add() >Add</b-button><br><br>
<b-table striped hover :items="products" :fields="fields">
</b-table>
</div>
</template>
<script>
export default {
name:"producT",
data() {
return {
products: [
{ name: "fridge", price: 30000, category: 'electronics' },
{ name: "books", price: 30, category: 'stationary' },
{ name: "AC", price: 30000, category: 'electronics' },
{ name: "pens", price: 20, category: 'stationary' },
],
fields:["name","price","category"],
product_name:'',
product_price:'',
product_category:''
}
},
methods:{
add(){
this.products.push({name:this.product_name, price:this.product_price ,category:this.product_category})
}
}
}
</script>

