interface ISysContext {
    signedInClientId: number,
	clientId: number,
	permissionClientId: number,
	permissionRoleId: number,
	dataLanguageId: number,
	language: string,
	culture: string
}
interface IToken {
    access_token: string
    expires_in: number
    token_type: string
}
interface IUserInfo {
  Email?: string
  ExternalProviderUserId?: number
  Idp?: string
  IdpName?: string
  LogonName: string
  UserDataLanguageId: number
  UserId: number
  UserName: string
}
export { ISysContext, IToken, IUserInfo }