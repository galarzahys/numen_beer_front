import "./gift.css"


const Gift = () => {
  return (
    <div className="gift_container">
        <div className="text_container">
            <h2>sorprende a alguien trabajando desde casa</h2>
            <p>
                ¿Tiene un colega o familiar que trabaja duro en casa?
                Nuestra caja de bocadillos y bebidas para trabajar desde casa es <br />
                la manera perfecta de poner una sonrisa en su rostro, entregada directamente <br />
                en su puerta.
                para comprar para un grupo de personas, póngase en contacto y podemos discutir <br />
                paquetes a medida y mensajes personalizados
            </p>
        </div>
        <div className="img_container">
            <img src="./images/oferta.jpg" alt="cerveza" />
        </div>
    </div>
  )
}

export default Gift