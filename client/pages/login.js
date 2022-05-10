import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Component } from "./component";
import Quizzes from "./quizzes";

export default Login;

function Login({ session }) {
  const router = useRouter();

  const loginUser = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: event.target.username.value,
      password: event.target.password.value,
    });

    console.log(res);
    if (res.ok) {
      router.push("/component");
    }
  };

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
                    <div className="col-md-6 mb-4">
                      <label className="username" htmlFor="username">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="username"
                        name="username"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="password" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="password"
                        name="password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>

                    <div className="text-center">
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
