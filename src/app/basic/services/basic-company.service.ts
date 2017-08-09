import { Injectable } from '@angular/core';
import { HttpService } from '../../platform/services/http.service';
import { IAssignedCompany, ICompany, IRole, IRoleLookup } from '../../platform/interfaces/basic.interface';
import { DataStructureService }  from '../../platform/services/data-structure.service';
import { LoadingService } from '../../platform/services/loading.service';
import { PlatformContextService } from '../../platform/services/platform-context.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';
/*
  Generated class for the BasicCompanyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BasicCompanyService {
	public masterData: IAssignedCompany;
	public linearData: DataStructureService<ICompany>;
	public selectedCompany: ICompany;
	public selectedRole: IRoleLookup;
	constructor(
		public http: HttpService,
		private LoadingService: LoadingService,
		private PlatformContextService: PlatformContextService) {
		
	}
	getCompanyList() {
		return Observable.create(ob => {
			if (this.masterData) {
				ob.next(this.masterData.companies);
				ob.complete();
			} else {
				this.LoadingService.show();
				this.http.$get('/basics/company/getassignedcompanieswithroles')
				.map((data: IAssignedCompany) => {
					this.LoadingService.hide();
					return this.setMasterData(data);
				})
				.subscribe(data => {
					ob.next(data);
					ob.complete();
				});
			}
		});
		// return this.http.$get('/basics/company/getassignedcompanieswithroles')
		// .map((data: IAssignedCompany) => {
		//   this.LoadingService.hide();
		//   return this.setMasterData(data);
		// });
	}
	private setLinearData() {
		let _data = [];
		this.masterData.companies.forEach(item => {
			let _obj = {};
			$.extend(_obj, item);
			_data.push(_obj);
		});
		_data = this.toLinear(_data);
		this.linearData = new DataStructureService<ICompany>('id', _data);
		this.linearData.sort();
	}
	private setMasterData (data:IAssignedCompany): Array<ICompany> {
		this.masterData = data;
		this.setLinearData();
		return data.companies;
		// let _data = this.toLinear(this.masterData.companies.concat());
		// this.linearData = new DataStructureService<ICompany>('id', _data);
		// this.linearData.sort();
		// this.linearData = this.toLinear(this.masterData.companies.concat());
		// this.linearData.sort((a:ICompany, b:ICompany):number => {
		//   return a.id > b.id ? 1 : -1;
		// });
		
	}
	private toLinear(data: ICompany []): ICompany [] {
		let arrays: ICompany [] = [],
			rootIds = [];
		this._toLinear(data, arrays, rootIds);
		return arrays;
	}
	private _toLinear(data: ICompany [], arrays: ICompany [], childrenIds: number []) {
		for (let i = 0; i < data.length; i++) {
			childrenIds.push(data[i].id);
			if (data[i].children && data[i].children.length > 0) {
				let _childrenIds = [];
				this._toLinear(data[i].children, arrays, _childrenIds);
				data[i].children = _childrenIds;
			} else {
				data[i].children = null;
			}
			arrays.push(data[i]);
		}
	}
	getCompanyById(id: number): ICompany {
		if (id) {
			return <ICompany>this.linearData.find(id);
		}
	}
	getRoleLookupByKey(key: number) {
		return this.masterData.rolesLookup.find(item => {
			return item.key === key;
		});
	}
	private _getRoleList(id: number, arr: IRole []) {
		for (let i = 0; i < arr.length; i++) {
			if (id == arr[i].clientId) {
				return arr[i].roleIds;
			}
		}
		let company = this.getCompanyById(id);
		if (company.parentId) {
			this._getRoleList(company.parentId, arr);
		}
		return null;
	}
	getRoleList(company: ICompany) {
		if (company.companyType === 2) 
			return null;
		const roleIds = this._getRoleList(company.id, this.masterData.roles);
		let result = [];
		if (roleIds) {
			for (let i = 0; i < this.masterData.rolesLookup.length; i++) {
				if (roleIds.indexOf(this.masterData.rolesLookup[i].key) > -1) {
					result.push(this.masterData.rolesLookup[i]);
				}
			}
		}
		return result;
	}
	private _getClientId(id) {
		var company = this.getCompanyById(id);
		if (company && company.companyType === 1) {
			return id;
		}
		if (company.parentId) {
			return this._getClientId(company.parentId);
		}
		return null;
	}
	saveContext(companyId: number, roleId: number) {
		roleId = Number(roleId);
		this.selectedCompany = this.getCompanyById(companyId);
		this.selectedRole = this.getRoleLookupByKey(roleId);
		this.PlatformContextService.setCompanyInfo(this.selectedCompany, this.selectedRole);
		const signedInClientId = companyId;
		const clientId = this._getClientId(signedInClientId);
		this.PlatformContextService.setContextKey();
		this.PlatformContextService.setCompanyContext(signedInClientId, clientId, companyId, roleId);
	}
}
