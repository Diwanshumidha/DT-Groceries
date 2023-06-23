const Product = {
    id:1,
    img_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHkYPuiuxkAgOOue8pjMaVHojeVQWzBekEvA&usqp=CAU",
    name: "Carrot",
    Description:'Enrich Food with Lot of Mineral, Fiber ',
    Rating:4, // 1-5
    Company:'abc',
    Discount:'15', // in percent
    type:[1,5], // Id Of categories it can be an array
    price: "24", // in usd type number and per kg
    Details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit, tempora quos unde, inventore obcaecati quibusdam ipsa ex fugit quis perspiciatis quod vitae ratione error vero delectus repudiandae accusamus? Quibusdam laborum veritatis facere a deserunt nihil incidunt sit error accusantium illum quis provident dolores fugit consequatur obcaecati, minima amet voluptatibus.",
    Reviews:[
        {Name:'',Rating:'',Reviews:''},
    ]
}


export default Product