export default function GeneralInformation() {
    return (
        <div>
            <form action="">
                <label htmlFor="fullName">Nombre completo: </label>
                <input type="text" name="fullName" id="fullName"/>

                <label htmlFor="email">Correo: </label>
                <input type="email" name="email" id="email" />

                <label htmlFor="phone">Teléfono: </label>
                <input type="text" name="phone" id="phone" />
            </form>
        </div>
    )
}