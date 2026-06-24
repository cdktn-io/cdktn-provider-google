/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions#location DataGoogleOracleDatabaseGoldengateDeploymentVersions#location}
  */
  readonly location: string;
  /**
  * The ID of the project in which the resource is located. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions#project DataGoogleOracleDatabaseGoldengateDeploymentVersions#project}
  */
  readonly project?: string;
}
export interface DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties {
}

export function dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesToTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesToHclTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // ogg_version - computed: true, optional: false, required: false
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }

  // release_time - computed: true, optional: false, required: false
  public get releaseTime() {
    return this.getStringAttribute('release_time');
  }

  // release_type - computed: true, optional: false, required: false
  public get releaseType() {
    return this.getStringAttribute('release_type');
  }

  // security_fix - computed: true, optional: false, required: false
  public get securityFix() {
    return this.getBooleanAttribute('security_fix');
  }

  // support_end_time - computed: true, optional: false, required: false
  public get supportEndTime() {
    return this.getStringAttribute('support_end_time');
  }
}

export class DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference {
    return new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions {
}

export function dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsToTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsToHclTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference {
    return new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions google_oracle_database_goldengate_deployment_versions}
*/
export class DataGoogleOracleDatabaseGoldengateDeploymentVersions extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_goldengate_deployment_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import
  * @param importFromId The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_goldengate_deployment_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/data-sources/oracle_database_goldengate_deployment_versions google_oracle_database_goldengate_deployment_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_goldengate_deployment_versions',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // goldengate_deployment_versions - computed: true, optional: false, required: false
  private _goldengateDeploymentVersions = new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList(this, "goldengate_deployment_versions", false);
  public get goldengateDeploymentVersions() {
    return this._goldengateDeploymentVersions;
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

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
