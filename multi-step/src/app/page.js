"use client";
import { Step1, Step2, Step3 } from "@/components";
import { useState } from "react";
const Page = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    birthda:"",
  });
  const [step, setStep] = useState("step1");
  const [error, setError] = useState({});
  console.log(form);
  const nameRegex = /^[A-Za-z]+$/;

  function click() {
    if (form.firstname === nameRegex) {
      return null;
    } else {
      return setError({
        ...error,
        firstname: "First name cannot contain special characters or numbers.",
      });
    }
  }
  return (
    <>
      <div>
        <Step1
          step={step}
          click={click}
          setForm={setForm}
          formFirstname={form.firstname}
          formLastname={form.lastname}
          formUsername={form.username}
          setStep={setStep}
          form={form}
          button={click}
        />
        ;
        <Step2
          step={step}
          setForm={setForm}
          formEmail={form.email}
          formPassword={form.password}
          formConfirmPassword={form.confirmPassword}
          setStep={setStep}
          form1={form}
          Onclick={click}
        />
        ;<Step3 step={step}s
        setForm={setForm}
        formBirthday={form.birthday}/>
      </div>
    </>
  );
};
export default Page;
{
  /* <Step3
          step={step}
          click={click}
          setForm={setForm}
          formFirstname={form.firstname}
          formLastname={form.lastname}
          formUsername={form.username}
          setStep={setStep}
          form={form}
        />
        ;
        <Step4
          step={step}
          click={click}
          setForm={setForm}
          formFirstname={form.firstname}
          formLastname={form.lastname}
          formUsername={form.username}
          setStep={setStep}
          form={form}
        /> */
}
