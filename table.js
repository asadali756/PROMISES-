// fetch("https://fakestoreapi.com/products").then((data)=>{
//     // console.log(data);
//     return data.json();
// }).then((ObjectData)=>{
//     console.log(ObjectData[0].title);
//     let tableData=""
//     ObjectData.map((values)=>{
//         tableData+= `   <tr>
//         <td>${values.title}</td>
//           <td>${values.description}</td>
//           <td>${values.price}</td>
//           <td><img src="${values.img}"/></td>
//         </tr>`;
//     });
//     document.getElementById("table_body").innerHTML=tableData;
// })


//FAKE STORE API PRODUCTS

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        // console.log(data[0].title);
        let tableData = "";
        data.forEach(product => {
            tableData += `
        <tr>
          <td>${product.title}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td><img src="${product.image}" alt="${product.title}"/></td>
        </tr>`;
        });
        document.getElementById("table_body").innerHTML = tableData;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });