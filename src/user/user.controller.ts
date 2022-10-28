import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
       @Get()
       getUser(){
        return {
            nama: "Muhammad Arif",
            kota: "Bukittinggi"
        };
       }
}
