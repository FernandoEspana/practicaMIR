import React from 'react';

class Form extends React.Component {

    state = {
        email: '',
        password: '',
        remember: false,
        
    }

    handleChange = ( e ) =>{
        const { name, value, checked, type } = e.target;
        this.setState( { [name] : type === 'checkbox' ? checked : value  });
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( this.state );
    }

    render() {

        //Asignacion sin destructuring
        // const  email = this.state.email;
        // const   password = this.state.password;

        const { email, password, remember } = this.state;

        return(
            <form onSubmit = { this.handleSubmit }>
                <fieldset>
                    <label htmlFor="email">Correo Electronico</label>
                    <input  type="email" 
                            id="email"
                            name="email" 
                            value={email}
                            onChange={this.handleChange} 
                            placeholder="email@test.com"
                    ></input>
                    
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Contraseña</label>
                    <input  type="password" 
                            id="password"
                            name="password" 
                            onChange={this.handleChange}
                            value={ password } 
                            placeholder="Contraseña"
                    ></input>
                    
                </fieldset>
                <fieldset>
                    <label htmlFor="remember">Recuerdame</label>
                    <input  type="checkbox" 
                            id="remember"
                            onChange={this.handleChange}
                            name="remember" 
                           checked={ remember }  
                    ></input>
                    
                </fieldset>
                <fieldset>
                    <button type="submit"> Iniciar Sesion </button>
                    <button type="button"> Canceler</button>
                    <button type="button"> Registrate</button>
                </fieldset>
                <fieldset>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d7952.883657840123!2d-74.04228774175941!3d4.693032796330417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d4.6912471!2d-74.0437254!4m3!3m2!1d4.6891513!2d-74.0415367!5e0!3m2!1sen!2sco!4v1614381914942!5m2!1sen!2sco"></iframe>
                </fieldset>
             </form>

            
        )
        

    }


}






export default Form;