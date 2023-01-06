import app from './app';
import config from 'config';
// const port = 3000;


const port = config.get<number>('port');
//data model interfacess

//In memory database
app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

//service methods



