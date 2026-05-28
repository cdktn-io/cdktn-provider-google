/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleBiglakeIcebergNamespaceIamPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#catalog DataGoogleBiglakeIcebergNamespaceIamPolicy#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#id DataGoogleBiglakeIcebergNamespaceIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#namespace_id DataGoogleBiglakeIcebergNamespaceIamPolicy#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#project DataGoogleBiglakeIcebergNamespaceIamPolicy#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy google_biglake_iceberg_namespace_iam_policy}
*/
export class DataGoogleBiglakeIcebergNamespaceIamPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_iceberg_namespace_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleBiglakeIcebergNamespaceIamPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleBiglakeIcebergNamespaceIamPolicy to import
  * @param importFromId The id of the existing DataGoogleBiglakeIcebergNamespaceIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleBiglakeIcebergNamespaceIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_iceberg_namespace_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/biglake_iceberg_namespace_iam_policy google_biglake_iceberg_namespace_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleBiglakeIcebergNamespaceIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleBiglakeIcebergNamespaceIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_iceberg_namespace_iam_policy',
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
    this._catalog = config.catalog;
    this._id = config.id;
    this._namespaceId = config.namespaceId;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog: cdktn.stringToTerraform(this._catalog),
      id: cdktn.stringToTerraform(this._id),
      namespace_id: cdktn.stringToTerraform(this._namespaceId),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktn.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktn.stringToHclTerraform(this._namespaceId),
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
