
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
                            <button type="isSubmitting" className="FormField__Button mr-20" disabled={isSubmitting}>Sign In</button> <Link to="/" className="FormField__Link" >Create an account</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
)


// class SignInForm extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             email: '',
//             password: ''
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
//             <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
//                 <div className="FormField">
//                     <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
//                     <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//                 </div>
//
//                 <div className="FormField">
//                     <label className="FormField__Label" htmlFor="password">Password</label>
//                     <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
//                 </div>
//
//                 <div className="FormField">
//                     <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
//                 </div>
//             </form>
//           </div>
//         );
//     }
// }
//
// export default SignInForm;
