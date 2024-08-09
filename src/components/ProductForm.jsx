import { useEffect, useState } from "react";
const initialForm = {
	id: 0,
	name: "",
	description: "",
	price: "",
};
// eslint-disable-next-line react/prop-types
export const ProductForm = ({ productSelected,handlerAdd}) => {
	const [form, setForm] = useState(initialForm);
	const {id,name, description, price } = form; //desectructuramos para usar los atributos por separado

	useEffect(() => {
		setForm(productSelected);
	}, [productSelected]);

	return (
		<form onSubmit={(event) => {
			event.preventDefault();
			if (!name || !description || !price) {
				alert("Please fill in all fields");
				return;
			}
			
			handlerAdd(form);
			setForm(initialForm);
		}}>
			<div>
				<input
					type="text"
					placeholder="Product Name"
					className="form-control my-3 w-75"
					name="name"
					value={name}
					onChange={(event) =>
						setForm({
							...form,
							name: event.target.value,
						})
					}
				/>
			</div>
			<div>
				<input
					type="text"
					placeholder="Product Description"
					className="form-control my-3 w-75"
					name="description"
					value={description}
					onChange={(event) =>
						setForm({
							...form,
							description: event.target.value,
						})
					}
				/>
			</div>
			<div>
				<input
					type="number"
					placeholder="Product Price"
					className="form-control my-3 w-75"
					name="price"
					value={price}
					onChange={(event) =>
						setForm({
							...form,
							price: event.target.value,
						})
					}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				{id > 0 ? "Update" : "Create"}
			</button>
		</form>
	);
}

