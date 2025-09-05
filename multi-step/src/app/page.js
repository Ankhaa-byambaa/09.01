"use client";
import { Step1, Step2, Step3, Step4 } from "@/components";
import { useState, useEffect } from "react";
const Page = () => {
  // const localForm = localForm.getitem("myForm");

  const [form, setForm] = useState(
    // myLocalForm
    //   ? JSON.parse(myLocalForm)
    //   : {}
    {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      birthday: "",
      picture: "",
      confirmPassword: "",
    }
  );
  useEffect(() => {
    const localForm = localStorage.getItem("my-form");

    console.log({ localForm });

    if (localForm) {
      setForm(JSON.parse(localForm));
    }
  }, []);

  const [step, setStep] = useState("step1");

  console.log(form);

  return (
    <>
      <div>
        <Step1
          step={step}
          setForm={setForm}
          formFirstname={form.firstname}
          formLastname={form.lastname}
          formUsername={form.username}
          setStep={setStep}
          form={form}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />

        <Step2
          step={step}
          setForm={setForm}
          formEmail={form.email}
          formPassword={form.password}
          formConfirmPassword={form.confirmPassword}
          formPhonenumber={form.phonenumber}
          setStep={setStep}
          form1={form}
        />

        <Step3
          step={step}
          setForm={setForm}
          formBirthday={form.birthday}
          setStep={setStep}
          formPicture={form.picture}
        />
        <Step4 step={step} />
      </div>
    </>
  );
};
export default Page;
{
}
