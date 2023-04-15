import axios from 'axios';

const Get = (url: string) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;
    axios
      .get(url)
      .then((res) => {
        fn(res, {
          status: 200,
          success: true,
        });
      })
      .catch((e) => {
        fn(e, {
          status: 500,
          success: false,
        });
      });
  };
};

class Controller {
  constructor() {}

  @Get('https://api.publicapis.org/?title=cat')
  getList(res:any, status:any) {
    console.log('res -- ', res);
    console.log('status -- ', status);
  }
}
