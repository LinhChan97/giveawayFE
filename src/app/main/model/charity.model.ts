export interface ICharity {
  id: number;
  image: string;
  name: string;
  description: string;

}

export class CharityModel {
  id: number;
  image: string;
  name: string;
  description: string;

  constructor(charity: ICharity) {
    this.id = (charity && charity.id) || null;
    this.image = (charity && charity.image) || '';
    this.name = (charity && charity.name) || '';
    this.description = (charity && charity.description) || '';
  }
}
