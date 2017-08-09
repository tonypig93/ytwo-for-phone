interface ILoginForm {
	username: string,
	password: string,
	grant_type: string,
	client_id: string,
	client_secret: string,
	scope: string
}
interface IAssignedCompany {
	companies: ICompany [],
	roles: IRole [],
	rolesLookup: IRoleLookup []
}
interface ICompany {
	id: number,
	code: string,
	canLogin: boolean,
	companyType: number,
	name: string,
	parentId?: number,
	children: ICompany []
}
interface IRole {
	clientId: number,
	roleIds: number []
}
interface IRoleLookup {
	key: number,
	value: string
}
export { ILoginForm, IAssignedCompany, ICompany, IRole, IRoleLookup };