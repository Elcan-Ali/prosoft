
import { useField } from 'formik';

const ApplyModalInput = ({ label,className, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={`${className} `}>
            <label>
                <p className='pb-[8px]'>{label} <span className='text-red-500'>*</span></p>
                <input className='w-full apply-input outline-none' {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default ApplyModalInput