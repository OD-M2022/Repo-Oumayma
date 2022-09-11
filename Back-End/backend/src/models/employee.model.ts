import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Employee extends Entity {
  // Define well-known properties here
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: false
  })
  id?: string;

  @property({
    type: 'string',
    required: false,
  })
  Name: string;

  @property({
    type: 'string',
    required: false,
  })
  Prenom: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroCIN: string;

  @property({
    type: 'string',
    required: false,
  })
  Statut: string;

  @property({
    type: 'string',
    required: false,
  })
  Matricule: string;

  @property({
    type: 'string',
    required: false,
  })
  Poste: string;

  @property({
    type: 'string',
    required: false,
  })
  NumeroTelephoneN1: string;

  @property({
    type: 'string',
    required: true,
  })
  Role: string;

  @property({
    type: 'string',
    required: true,
  })
  UserId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;


  constructor(data?: Partial<Employee>) {
    super(data);
  }
}

export interface EmployeeRelations {
  // describe navigational properties here
}

export type EmployeeWithRelations = Employee & EmployeeRelations;
