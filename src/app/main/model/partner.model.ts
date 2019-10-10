export interface IPartner {
  id: number;
  address: string;
  avatar: string;
  description: string;
  email: string;
  name: string;
  phone_number: string;
  username: string;
}

export class PartnerModel {
  id: number;
  address: string;
  avatar: string;
  description: string;
  email: string;
  name: string;
  phoneNumber: string;
  userName: string;

  constructor(partner: IPartner) {
    this.id = (partner && partner.id) || null;
    this.address = (partner && partner.address) || '';
    this.avatar = (partner && partner.avatar) || '';
    this.description = (partner && partner.description) || '';
    this.email = (partner && partner.email) || '';
    this.name = (partner && partner.name) || '';
    this.phoneNumber = (partner && partner.phone_number) || '';
    this.userName = (partner && partner.username) || '';
  }
}
