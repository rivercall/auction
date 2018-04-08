import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 1.5, "这是第二个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["汽车"]),
    new Product(3, "第三个商品", 3.99, 2.5, "这是第三个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["电子产品"]),
    new Product(4, "第四个商品", 4.99, 3.5, "这是第四个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["硬件设备"]),
    new Product(5, "第五个商品", 5.99, 4.5, "这是第五个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["电子产品", "硬件设备"]),
    new Product(6, "第六个商品", 6.99, 3.5, "这是第六个商品，我是商品的个描述我是商品的个描述我是商品的个描述", ["图书"]),
  ]

  private comments:Comment[] = [
    new Comment(1, 1, "2017-02-01 22:22:21", "张三1-1", 4.5, "东西不错1-1"),
    new Comment(2, 1, "2017-02-02 22:22:22", "张三1-2", 1.5, "东西不错1-2"),
    new Comment(3, 1, "2017-02-03 22:22:23", "张三1-3", 2.5, "东西不错1-3"),
    new Comment(4, 2, "2017-02-04 22:22:24", "张三2-1", 3.5, "东西不错2-1"),
    new Comment(5, 3, "2017-02-05 22:22:25", "张三3-1", 4.5, "东西不错3-1"),
  ]


  constructor() { }

  getProducts():Product[]{
    return this.products;
  }

  getProduct(id:number):Product{
    return this.products.find((product)=>product.id == id)
  }

  getCommentForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId ==id)
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: Array<string>
  ){

  }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ){

  }
}