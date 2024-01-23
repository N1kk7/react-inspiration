import { TableColumn } from 'react-data-table-component';

export interface DataRow {
	id: number;
	name: string;
	email: string;
	type: string;
	videos: number;
}

const columns: TableColumn<DataRow>[] = [
	{
		name: 'User name',
		selector: row => row.name,
	},
	{
		name: 'Email',
		selector: row => row.email,
	},
	{
		name: 'Type of User',
		selector: row => row.type,
	},
	{
		name: '# Videos',
		selector: row => row.videos,
	},
]

export default columns;