import Link from 'next/link'


export default function PageWithJSbasedForm() {
    // Handle the submit event on form submit.
    const registerUser = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value,
            phone: event.target.phone.value

        }

        const JSONdata = JSON.stringify(data)

        // Send the form data to our API and get a response.
        const response = await fetch('http://localhost:8081/user/', {
            // Body of the request is the JSON data we created above.
            body: JSONdata,

            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            
            method: 'POST',
        })

        
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }
    return (
        <div>
            <form onSubmit={registerUser}>
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ border_radius: "15px" }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                        

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" id="firstName" name="firstName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" id="lastName" name="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" name="username" className="form-control form-control-lg" id="username" />
                                                        <label htmlFor="username" className="form-label">Username</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline datepicker w-100">
                                                        <input type="password" name="password" className="form-control form-control-lg" id="password" />
                                                        <label htmlFor="password" className="form-label">Password</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="email" id="email" name="email" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="email">Email</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">

                                                    <div className="form-outline">
                                                        <input type="tel" id="phone" name="phone" className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phone">Phone Number</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="mt-4 pt-2">
                                                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />

                                            </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}