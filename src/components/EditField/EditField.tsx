import axios, { AxiosError, AxiosResponse } from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { resourceBaseUrl } from '../../constants/links';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

interface EditFieldProps {
  name: string;
  label: string;
  currentValue: string;
  type?: string;
  userId: number;
}

const EditField: FunctionComponent<EditFieldProps> = ({
  name,
  label,
  currentValue,
  type,
  userId,
}) => {
  const [value, setValue] = useState<string>(currentValue);
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError<any> | undefined>();

  const resetValue = (): void => {
    setValue(currentValue);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setUpdated(false);
    }, 3000);
  }, [updated]);

  useEffect(() => {
    setTimeout(() => {
      setError(undefined);
    }, 5000);
  }, [error]);

  useEffect(() => {
    if (value !== currentValue) {
      setButtonsVisible(true);
    } else {
      setButtonsVisible(false);
    }
  }, [value]);

  const handleNameChange = async (
    event: React.SyntheticEvent,
  ): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios.put(
        `${resourceBaseUrl}/users/${userId}`,
        { name: value },
      );
      if (response.status === 200) {
        setIsLoading(false);
        setUpdated(true);
      }
    } catch (err: any) {
      setIsLoading(false);
      setError(err);
    }
  };

  return (
    <Form className={styles.edit_field_form} onSubmit={handleNameChange}>
      <Form.Group className={styles.form_group} controlId={name}>
        <div className={styles.form_input}>
          <Form.Label>{label}</Form.Label>
          &nbsp;
          <Form.Control
            size="sm"
            type={type}
            onChange={onChange}
            name={name}
            value={value}
            required
            className={error && 'is-invalid'}
          />
        </div>

        {error && <div className="error">Failed to update</div>}
        {updated && <div className="success">Successfully updated data</div>}
      </Form.Group>

      {buttonsVisible && (
        <div className={styles.buttons_container}>
          <button type="submit" className="main-btn">
            {isLoading ? <Loader /> : 'Save'}
          </button>
          <button
            onClick={resetValue}
            type="button"
            className="main-btn secondary-btn"
          >
            Cancel
          </button>
        </div>
      )}
    </Form>
  );
};

EditField.defaultProps = {
  type: 'text',
};

export default EditField;
