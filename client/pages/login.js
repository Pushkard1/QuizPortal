import Link from 'next/link'

export default Login;

function Login() {
    const loginUser = async (event) =>{
        event.preventDefault()

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        const JSONdata = JSON.stringify(data)
        const tokenGeneration = await fetch('http://localhost:8081/generate-token',{
            body: JSONdata,

            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        })

        const token = await tokenGeneration.json()
    }

    return (
      <div>
        <form onSubmit={loginUser}>
          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div
                    className="card shadow-2-strong card-registration"
                    style={{ border_radius: "15px" }}
                  >
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Registration Form
                      </h3>
                      <div class="col-md-6 mb-4">
                        <input
                          type="text"
                          id="username"
                          className="form-control"
                          name="username"
                        />
                        <label className="form-label" for="form2Example1">
                          Username
                        </label>
                      </div>

                      <div class="col-md-6 mb-4">
                        <input
                          type="password"
                          id="form2Example2"
                          class="form-control"
                          name='password'
                        />
                        <label class="form-label" for="form2Example2">
                          Password
                        </label>
                      </div>

                      <button
                        type="button"
                        class="btn btn-primary btn-block mb-4"
                      >
                        Sign in
                      </button>

                      <div class="text-center">
                        <Link href="/js-form">
                          <input
                            className="btn btn-primary btn-lg"
                            type="submit"
                            value="Register"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
}