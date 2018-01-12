import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Credentials, User} from '../user';
import {Bonus, Game} from '../game';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const credentials: Credentials[] = [
      {
        mail: 'clement.deboos@gmail.com',
        pwd: 'azerty'
      },
      {
        mail: 'toto',
        pwd: 'toto'
      },
      {
        mail: 'root',
        pwd: 'root'
      }
    ];
    const user: User[] = [
      {
        credentials: credentials[0],
        phone: '06.43.55.67.35',
        name: 'Clement',
        token: '7g9ez645rds',
        id: '6za4vcc3aza'
      },
      {
        credentials: credentials[1],
        phone: '06.76.82.55.44',
        name: 'Toto',
        token: 'c1z8caz89cze',
        id: 'e5z4v968ezr4v'
      },
      {
        credentials: credentials[2],
        phone: '06.14.86.98.73',
        name: 'Root',
        token: 'c54za19cecv',
        id: '8rea4v98zer4eq'
      }
    ];
    const bonus: Bonus[] = [
      {
        id: 'c16ezrc16ez1vc',
        nbLvl: '3',
      },
      {
        id: 'c56ec6aregga',
        nbLvl: '0',
      },
      {
        id: 'uy494r4hrtyh',
        nbLvl: '9',
      }
    ];
    const game: Game[] = [
      {
        id: 'liu51k65yu6t',
        score: '10000',
        point: '1',
        bonus: bonus[0],
      },
      {
        id: 'j4u8y4y6th',
        score: '20',
        point: '0',
        bonus: bonus[1],
      },
      {
        id: 'zefr8e4tg4re',
        score: '5615619854654',
        point: '12',
        bonus: bonus[2],
      }
    ];
    return {credentials, user, bonus, game};
  }
}
