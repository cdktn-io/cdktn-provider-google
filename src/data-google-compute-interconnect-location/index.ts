/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleComputeInterconnectLocationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location#id DataGoogleComputeInterconnectLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location#name DataGoogleComputeInterconnectLocation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location#project DataGoogleComputeInterconnectLocation#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location google_compute_interconnect_location}
*/
export class DataGoogleComputeInterconnectLocation extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_interconnect_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleComputeInterconnectLocation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeInterconnectLocation to import
  * @param importFromId The id of the existing DataGoogleComputeInterconnectLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeInterconnectLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_interconnect_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/data-sources/compute_interconnect_location google_compute_interconnect_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeInterconnectLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeInterconnectLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect_location',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // continent - computed: true, optional: false, required: false
  public get continent() {
    return this.getStringAttribute('continent');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // facility_provider - computed: true, optional: false, required: false
  public get facilityProvider() {
    return this.getStringAttribute('facility_provider');
  }

  // facility_provider_facility_id - computed: true, optional: false, required: false
  public get facilityProviderFacilityId() {
    return this.getStringAttribute('facility_provider_facility_id');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peeringdb_facility_id - computed: true, optional: false, required: false
  public get peeringdbFacilityId() {
    return this.getStringAttribute('peeringdb_facility_id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
