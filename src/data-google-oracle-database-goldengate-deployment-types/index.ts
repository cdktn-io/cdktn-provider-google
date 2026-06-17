/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types#id DataGoogleOracleDatabaseGoldengateDeploymentTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types#location DataGoogleOracleDatabaseGoldengateDeploymentTypes#location}
  */
  readonly location: string;
  /**
  * The ID of the project in which the resource is located. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types#project DataGoogleOracleDatabaseGoldengateDeploymentTypes#project}
  */
  readonly project?: string;
}
export interface DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes {
}

export function dataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesToTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesToHclTerraform(struct?: DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // connection_types - computed: true, optional: false, required: false
  public get connectionTypes() {
    return this.getListAttribute('connection_types');
  }

  // default_username - computed: true, optional: false, required: false
  public get defaultUsername() {
    return this.getStringAttribute('default_username');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ogg_version - computed: true, optional: false, required: false
  public get oggVersion() {
    return this.getStringAttribute('ogg_version');
  }

  // source_technologies - computed: true, optional: false, required: false
  public get sourceTechnologies() {
    return this.getListAttribute('source_technologies');
  }

  // supported_capabilities - computed: true, optional: false, required: false
  public get supportedCapabilities() {
    return this.getListAttribute('supported_capabilities');
  }

  // supported_technologies_url - computed: true, optional: false, required: false
  public get supportedTechnologiesUrl() {
    return this.getStringAttribute('supported_technologies_url');
  }

  // target_technologies - computed: true, optional: false, required: false
  public get targetTechnologies() {
    return this.getListAttribute('target_technologies');
  }
}

export class DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference {
    return new DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types google_oracle_database_goldengate_deployment_types}
*/
export class DataGoogleOracleDatabaseGoldengateDeploymentTypes extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_goldengate_deployment_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentTypes resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import
  * @param importFromId The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_goldengate_deployment_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/data-sources/oracle_database_goldengate_deployment_types google_oracle_database_goldengate_deployment_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleOracleDatabaseGoldengateDeploymentTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_goldengate_deployment_types',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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

  // goldengate_deployment_types - computed: true, optional: false, required: false
  private _goldengateDeploymentTypes = new DataGoogleOracleDatabaseGoldengateDeploymentTypesGoldengateDeploymentTypesList(this, "goldengate_deployment_types", false);
  public get goldengateDeploymentTypes() {
    return this._goldengateDeploymentTypes;
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
