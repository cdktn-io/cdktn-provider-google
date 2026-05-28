/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleBackupDrBackupPlanAssociationsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#id DataGoogleBackupDrBackupPlanAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location to list the backup plan associations from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#location DataGoogleBackupDrBackupPlanAssociations#location}
  */
  readonly location: string;
  /**
  * The ID of the project in which the resource belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#project DataGoogleBackupDrBackupPlanAssociations#project}
  */
  readonly project?: string;
  /**
  * The resource type of workload on which backup plan is applied. Examples include, "compute.googleapis.com/Instance", "compute.googleapis.com/Disk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#resource_type DataGoogleBackupDrBackupPlanAssociations#resource_type}
  */
  readonly resourceType?: string;
}
export interface DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError {
}

export function dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorToTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorToHclTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference {
    return new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo {
}

export function dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoToTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoToHclTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_backup_error - computed: true, optional: false, required: false
  private _lastBackupError = new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoLastBackupErrorList(this, "last_backup_error", false);
  public get lastBackupError() {
    return this._lastBackupError;
  }

  // last_backup_state - computed: true, optional: false, required: false
  public get lastBackupState() {
    return this.getStringAttribute('last_backup_state');
  }

  // last_successful_backup_consistency_time - computed: true, optional: false, required: false
  public get lastSuccessfulBackupConsistencyTime() {
    return this.getStringAttribute('last_successful_backup_consistency_time');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference {
    return new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleBackupDrBackupPlanAssociationsAssociations {
}

export function dataGoogleBackupDrBackupPlanAssociationsAssociationsToTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleBackupDrBackupPlanAssociationsAssociationsToHclTerraform(struct?: DataGoogleBackupDrBackupPlanAssociationsAssociations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleBackupDrBackupPlanAssociationsAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleBackupDrBackupPlanAssociationsAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_plan - computed: true, optional: false, required: false
  public get backupPlan() {
    return this.getStringAttribute('backup_plan');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source - computed: true, optional: false, required: false
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // rules_config_info - computed: true, optional: false, required: false
  private _rulesConfigInfo = new DataGoogleBackupDrBackupPlanAssociationsAssociationsRulesConfigInfoList(this, "rules_config_info", false);
  public get rulesConfigInfo() {
    return this._rulesConfigInfo;
  }
}

export class DataGoogleBackupDrBackupPlanAssociationsAssociationsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference {
    return new DataGoogleBackupDrBackupPlanAssociationsAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations}
*/
export class DataGoogleBackupDrBackupPlanAssociations extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_backup_plan_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleBackupDrBackupPlanAssociations resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociations to import
  * @param importFromId The id of the existing DataGoogleBackupDrBackupPlanAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_backup_plan_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/backup_dr_backup_plan_associations google_backup_dr_backup_plan_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBackupDrBackupPlanAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBackupDrBackupPlanAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_backup_plan_associations',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associations - computed: true, optional: false, required: false
  private _associations = new DataGoogleBackupDrBackupPlanAssociationsAssociationsList(this, "associations", false);
  public get associations() {
    return this._associations;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      resource_type: cdktn.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktn.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
