const CajaUsuario = ({ comparePlays }) => {

  return (
    <div className="bg-sky-400">
      <div className="flex justify-center gap-10 pt-10">
        <button className="px-3 cursor-pointer py-1 border-none
         bg-green-200 rounded-lg" onClick={() => comparePlays('Piedra')}>Piedra</button>
        <button className="px-3 border-none 
        bg-green-200 rounded-lg" onClick={() => comparePlays('Papel')}>Papel</button>
        <button className="px-3 border-none 
        bg-green-200 rounded-lg" onClick={() => comparePlays('Tijera')}>Tijera</button>
      </div>
    </div>
  )
}

export default CajaUsuario
