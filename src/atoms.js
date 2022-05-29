
import { atom } from "recoil";

const selected = atom({
  key: 'selected',
  default: [],
});

const services_data_hair = atom({
  key: 'services_data_hair',
  default: [],
});

const services_data_color = atom({
  key: 'services_data_color',
  default: [],
});


const services_data_treatment = atom({
  key: 'services_data_treatment',
  default: [],
});

const data_special_services = atom({
  key: 'data_special_services',
  default: [],
});

export {  selected,services_data_hair,services_data_color,services_data_treatment,data_special_services };

