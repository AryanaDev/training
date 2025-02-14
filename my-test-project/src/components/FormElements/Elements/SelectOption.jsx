import Select from 'react-select';

const SelectOption = ({ id, value, onChange,genderTitle,options }) => {


    return (
        <div className="w-32 text-start mr-[256px]">
            <label className="block mb-2 text-sm font-medium text-gray-900">{genderTitle}</label>
            <Select
                id={id}
                options={options}
                defaultValue={value}
                onChange={onChange}
                className="text-sm"
            />
        </div>
    );
};

export default  SelectOption;
