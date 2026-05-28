/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleWorkstationsWorkstationConfigIamPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#id DataGoogleWorkstationsWorkstationConfigIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#location DataGoogleWorkstationsWorkstationConfigIamPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#project DataGoogleWorkstationsWorkstationConfigIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_cluster_id}
  */
  readonly workstationClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_config_id}
  */
  readonly workstationConfigId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy google_workstations_workstation_config_iam_policy}
*/
export class DataGoogleWorkstationsWorkstationConfigIamPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workstations_workstation_config_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleWorkstationsWorkstationConfigIamPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleWorkstationsWorkstationConfigIamPolicy to import
  * @param importFromId The id of the existing DataGoogleWorkstationsWorkstationConfigIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleWorkstationsWorkstationConfigIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_workstations_workstation_config_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/workstations_workstation_config_iam_policy google_workstations_workstation_config_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleWorkstationsWorkstationConfigIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleWorkstationsWorkstationConfigIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_workstations_workstation_config_iam_policy',
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
    this._workstationClusterId = config.workstationClusterId;
    this._workstationConfigId = config.workstationConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
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

  // workstation_cluster_id - computed: false, optional: false, required: true
  private _workstationClusterId?: string; 
  public get workstationClusterId() {
    return this.getStringAttribute('workstation_cluster_id');
  }
  public set workstationClusterId(value: string) {
    this._workstationClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationClusterIdInput() {
    return this._workstationClusterId;
  }

  // workstation_config_id - computed: false, optional: false, required: true
  private _workstationConfigId?: string; 
  public get workstationConfigId() {
    return this.getStringAttribute('workstation_config_id');
  }
  public set workstationConfigId(value: string) {
    this._workstationConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationConfigIdInput() {
    return this._workstationConfigId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      workstation_cluster_id: cdktn.stringToTerraform(this._workstationClusterId),
      workstation_config_id: cdktn.stringToTerraform(this._workstationConfigId),
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
      workstation_cluster_id: {
        value: cdktn.stringToHclTerraform(this._workstationClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation_config_id: {
        value: cdktn.stringToHclTerraform(this._workstationConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
