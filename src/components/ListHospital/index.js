import React from 'react';
import {
  ListOption,
  ListHospitalContainer,
  ListHospitalTitle,
  ListHospitalDescription,
  ListHospitalHeader,
  ListHospitalCity,
  ListHospitalUF,
  ImgHospital,
} from './styles';

import adao from '../../assets/hospitais/adaopereiranunes.png';
import infantil from '../../assets/hospitais/infantildc.png';
import moacyr from '../../assets/hospitais/moacyr.jpg';
import saovicente from '../../assets/hospitais/saovicente.png';
import upa1 from '../../assets/hospitais/upa1.jpg';
import upa2 from '../../assets/hospitais/upasarapui.png';
import xerem from '../../assets/hospitais/xerem.png';

const items = [
  {
    key: String(Math.random()),
    img: adao,
    name: 'Hospital Estadual Adão Pereira Nunes',
    type: 'Hospital Geral',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },

  {
    key: String(Math.random()),
    img: infantil,
    name: 'Hospital Infantil Ismélia Silveira',
    type: 'Hospital Especializado',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },

  {
    key: String(Math.random()),
    img: moacyr,
    name: 'Hospital Municipal Moacyr Rodrigues do Carmo',
    type: 'Hospital Geral',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },

  {
    key: String(Math.random()),
    img: saovicente,
    name: 'Hospital de Clínicas São Vicente',
    type: 'Hospital Geral',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },

  {
    key: String(Math.random()),
    img: upa1,
    name: 'UPA 24H Duque de Caxias I',
    type: 'UPA',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },

  {
    key: String(Math.random()),
    img: upa2,
    name: 'UPA 24H Duque de Caxias II',
    type: 'UPA',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },
  {
    key: String(Math.random()),
    img: xerem,
    name: 'Hospital Municipal de Xerém',
    type: 'Hospital Especializado',
    city: 'Duque de Caxias',
    uf: 'RJ',
  },
];

export default function ListHospital() {
  return (
    <ListHospitalContainer>
      {items.map((item) => (
        <ListOption key={item.key}>
          <ListHospitalTitle>{item.name}</ListHospitalTitle>
          <ListHospitalDescription>{item.type}</ListHospitalDescription>
          <ListHospitalHeader>
            <ListHospitalCity>{item.city}</ListHospitalCity>
            <ListHospitalUF>{item.uf}</ListHospitalUF>
          </ListHospitalHeader>
          <ImgHospital source={item.img} />
        </ListOption>
      ))}
    </ListHospitalContainer>
  );
}
