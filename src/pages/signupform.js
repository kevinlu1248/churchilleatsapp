import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

export default () => (
        <div>
            <Formik
                initialValues={{ email: '', password: '', studentId: ''}}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                            <Field
                                type="email"
                                name="email"
                                className="FormField__Input"
                                placeholder="Email"
                            />
                            <br/>
                            {/* {errors.email && touched.email && errors.email} */}
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="studentId">Student ID</label>
                            <Field
                                type="studentId"
                                name="studentId"
                                className="FormField__Input"
                                placeholder="Student ID"
                            />
                            <br/>
                            {/* {errors.password && touched.password && errors.password} */}
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="FormField__Input"
                                placeholder="Password"
                            />
                            <br/>
                            {/* {errors.password && touched.password && errors.password} */}
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="rpassword">Repeat Password</label>
                            <Field
                                type="rpassword"
                                name="rpassword"
                                className="FormField__Input"
                                placeholder="Repeat Password"
                            />
                            <br/>
                            {/* {errors.password && touched.password && errors.password} */}
                        </div>

                        <div className="FormField">
                            <button type="isSubmitting" className="FormField__Button mr-20" disabled={isSubmitting}>Sign In</button> <Link to="/" className="FormField__Link" >Create an account</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
)

db.createUser(
  {
    user: "kevin",
    pwd: passwordPrompt(),  // or cleartext password
    roles: [
       "userAdminAnyDatabase",
       "readWriteAnyDatabase",
       "dbAdminAnyDatabase",
       "clusterAdmin"
    ]
  }
)

{/* <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} /> */}
{/* <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} /> */}

// export default class SignUpForm extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             email: '',
//             password: '',
//             name: '',
//             hasAgreed: false
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(e) {
//         let target = e.target;
//         let value = target.type === 'checkbox' ? target.checked : target.value;
//         let name = target.name;
//
//         this.setState({
//           [name]: value
//         });
//     }
//
//     handleSubmit(e) {
//         e.preventDefault();
//
//         console.log('The form was submitted with the following data:');
//         console.log(this.state);
//     }
//
//     render() {
//         return (
//         <div className="FormCenter">
//             <form onSubmit={this.handleSubmit} className="FormFields">
//                 <div className="FormField">
//                     <label className="FormField__Label" htmlFor="name">Full Name</label>
//                     <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
//                 </div>
//                 <div className="FormField">
//                     <label className="FormField__Label" htmlFor="password">Password</label>
//                     <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//                 </div>
//                 <div className="FormField">
//                     <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                     <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//                 </div>
//
//                 <div className="FormField">
//                     <label className="FormField__CheckboxLabel">
//                         <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
//                     </label>
//                 </div>
//
//                 <div className="FormField">
//                     <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
//                 </div>
//             </form>
//         </div>
//         );
//     }
// }
