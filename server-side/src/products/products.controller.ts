import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/products.dto';
import { Product } from './Schemas/products.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get()
    getProducts(): Promise<Product[]> {
        return this.ProductsService.findAll();
    }

    @Post()
    createProducts(@Body() createProductsDto: CreateProductsDto): Promise<CreateProductsDto> {
        return this.ProductsService.create(createProductsDto);
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.ProductsService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id') id) {
      return this.ProductsService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() Product: CreateProductsDto) {
        return this.ProductsService.update(id, Product);
    }
}
