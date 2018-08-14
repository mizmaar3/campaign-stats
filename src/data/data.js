import C from '../js/constants.js';
const uid = C.uid;

const Data ={
  records: [
    {
      id: uid(),
      title: "Campaign 1",
      balance: -2000,
    },
    {
      id: uid(),
      title: "Campaign 2",
      balance: 4000,
    },
    {
      id: uid(),
      title: "Campaign 3",
      balance: 5000,
    },
    {
      id: uid(),
      title: "Campaign 3",
      balance: -7000,
    },
    {
      id: uid(),
      title: "Campaign 4",
      balance: 0,
    },
    {
      id: uid(),
      title: "Campaign 5",
      balance: -9000,
    }
  ]
};

export default Data;
