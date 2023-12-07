
import { useField } from 'formik';

const ApplyModalTextArea = ({ label,className, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div className={`${className} `}>
            <label>
                <p className='pb-[8px]'>{label} <span className='text-red-500'>*</span></p>
                <textarea className='w-full min-h-[174px] apply-input outline-none' {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default ApplyModalTextArea