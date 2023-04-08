import React from 'react';
import TextInput from 'components/inputs/Input';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';

const SearchBox = (props) => {
  const { onChange, preIcon, placeholder, postIcon, value, label, name, disabled, inputClass, wrapperClass, className, preText, postText } = props;
  return (
    <div className={`search-box__main${className ? className : ''}`}>
      <TextInput
        {...props}
        placeholder={placeholder || 'Search...'}
        pre_icon={preIcon || <BsSearch />}
        post_icon={postIcon}
        pre_text={preText}
        post_text={postText}
        inputClass={`search-box--input ${inputClass ? inputClass : ''}`}
        wrapperclass={`search-box--wrapper ${wrapperClass ? wrapperClass : ''}`}
        onChange={onChange}
        value={value}
        label={label}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

SearchBox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  preIcon: PropTypes.object,
  postIcon: PropTypes.object,
  placeholder: PropTypes.string,
  wrapperClass: PropTypes.string,
  preText: PropTypes.string,
  postText: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  inputClass: PropTypes.string,
  className: PropTypes.string,
};
export default SearchBox;
