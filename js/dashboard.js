$(function(){
    var product=0;
    var cus=0;
    var supplier=0;
    var order=0;
    $.get('./../data/products.json',function(data){
        $.each(data,function(key,value){
            product=product+1;
        });
        $('#product').append(product+' products');
    });
    
    $.get('./../data/customers.json',function(data){
        $.each(data,function(key,value){
            cus+=1;
        });
        $('#cus').append(cus+' customers');
    });
    
    $.get('./../data/suppliers.json',function(data){
        $.each(data,function(key,value){
            supplier+=1;
        });
        $('#supplier').append(supplier+' suppliers');
    });
    
    $.get('./../data/orders.json',function(data){
        $.each(data,function(key,value){
            order+=1;
        });
        $('#order').append(order+' orders');
    });  
});