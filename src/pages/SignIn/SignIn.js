import React,{useContext} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { AuthContext } from "../../context/AuthContext";
import {
  Form,
  FormRow,
  Field,
  ErrorMessage,
  FormWrapper,
  FormSuccessMessage,
  Button,
} from "../../utils/style/generalStyles";
import { getAllUsers, loginUser } from "../../api/Users";

const SignIn = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  isSecondary={true} />
      <main>
        <Section title={"Sign In"} isMainSection={true} isTitleCentered={true}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .required("Password is required"),
            })}
            onSubmit={async (values, actions) => {
              try {
                const res = await loginUser(values);
                const users = await getAllUsers(res.access_token);
                const user = users.data.find(
                  (user) => user.email === values.email
                );
                localStorage.setItem('accessToken', res.access_token);
                setIsLoggedIn(true);
              } catch (err) {
                console.log("grešpkica");
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {(formik) => (
              <FormWrapper>
                <Form>
                  <FormRow>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your email..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="email" />
                  </FormRow>
                  <FormRow>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Your password..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage component="div" name="password" />
                  </FormRow>
                  <FormRow>
                    <Button type="submit" isSecondary>
                      Sign in
                    </Button>
                  </FormRow>
                </Form>
              </FormWrapper>
            )}
          </Formik>
        </Section>
      </main>
    </>
  );
};

export default SignIn;