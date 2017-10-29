class Product {

    constructor(id = 0, name)
    {
        let test = "Hello World";
        this._productid = id;
        this._productname = name + test;
    }

    set productid(productid)
    {
        this._productid = productid;
    }

    set productname(productname)
    {
        this._productname = productname;
    }

    get productid()
    {
        return this._productid;
    }

    get productname()
    {
        return this._productname;
    }

    uppername()
    {
        this._productname = this._productname.toUpperCase();
    }
}

export default Product;
