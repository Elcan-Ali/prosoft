import React from 'react';
import { Form, Formik } from 'formik';
import ApplyModalInput from './ApplyModalInput';
import ApplyModalTextArea from './ApplyModalTextArea';







const ApplyModalForm = () => (
    <div>
        <Formik
            initialValues={{
                name: "",
                sname: "",
                email: "",
                phone: "",
                budget: "",
                description: "",
                establishment: "",
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {(props) => (
                <Form className='p-[60px] flex flex-wrap gap-[20px]'>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="name" type="text" label="Ad" />
                    </div>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="sname" type="text" label="Soyad" />
                    </div>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="email" type="text" label="Email" />
                    </div>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="phone" type="text" label="Telefon nömrəsi" />
                    </div>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="establishment" type="text" label="Təşkilat (əgər varsa)" />
                    </div>
                    <div className='w-full md:w-[calc((100%-20px)/2)]'>
                        <ApplyModalInput name="budget" type="text" label="Təxmini büdcə" />
                    </div>
                    <div className='w-full'>
                        <ApplyModalTextArea name="description" type="email" label="Layihənin təsviri" />
                    </div>
                    <button className='apply-btn bg-green font-medium block w-full' type="submit">Göndər</button>
                </Form>
            )}
        </Formik>
    </div>
);
export default ApplyModalForm