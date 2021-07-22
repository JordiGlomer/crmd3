// import { MaterialModule } from '../material.module';

export class Cliente {
  numeroCliente: number = this.generator();
  name!: string;
  surname!: string;
  email!: string;
  category!: string;

  generator(): number {
    return Math.floor(Math.random() * 100000);
  }
}
