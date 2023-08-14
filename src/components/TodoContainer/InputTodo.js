import React, { useState, useContext, memo } from 'react';
import { AppContext } from '../../context/AppContext';
import { Select, Button, TagInput, Input } from '../General';
// import { v4 as uuidv4 } from 'uuid';
import { ButtonContainer, FormContainer, FormItem } from './style';



const InputTodo = () => {
	const [title, setTitle] = useState('');
	const { addTodoItem, closeModal, handleSelect, users } = useContext(AppContext);

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (ev.key !== 'Enter') {
			if (title !== '') {
				addTodoItem(title);
				setTitle('');
			}
		}
	};

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormItem>
				<Input
					type="text"
					placeholder="Add todo..."
					value={title}
					onKeyDown={(e) => {
						e.key === 'Enter' && e.preventDefault();
					}}
					name="title"
					onChange={onChange}
				/>
			</FormItem>

			<FormItem >
				<Select placeholder="Assign someone..." onChange={handleSelect}>
					<option>Assign someone...</option>
					{users.map(({ id, name }) => (
						<option key={id} value={id}>
							{name}
						</option>
					))}
				</Select>
			</FormItem>

			<FormItem>
				<TagInput />
			</FormItem>

			<ButtonContainer className="btn-container">
				<Button
					text="Cancel"
					variant="primary"
					type="button"
					onClick={closeModal}
				/>
				<Button type="submit" variant="success" text="Submit" />
			</ButtonContainer>
		</FormContainer>
	);
};
export default memo(InputTodo);
