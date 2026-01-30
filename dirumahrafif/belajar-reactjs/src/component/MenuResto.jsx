function MenuResto() {
  const menu = [
    {
      id: 1,
      nama: "Nasi Bakar 🍘",
      harga: 20000,
    },
    {
      id: 2,
      nama: "Ayam Goreng 🍗",
      harga: 15000,
    },
    {
      id: 3,
      nama: "Mie Goreng 🍜",
      harga: 10000,
    },
    {
      id: 4,
      nama: "Mie Ayam 🍜",
      harga: 10000,
    },
  ];

  return (
    <>
      {menu.map((item) => (
        <div key={item.id}>
          <b>Nama Menu: </b>
          <em>{item.nama}</em>
          <div>
            <b>Harga : </b>
            <em>{item.harga}</em>
          </div>
        </div>
      ))}
    </>
  );
}

export default MenuResto;
