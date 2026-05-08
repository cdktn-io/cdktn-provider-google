/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IapWebForwardingRuleServiceIamPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#forwarding_rule_service_name IapWebForwardingRuleServiceIamPolicy#forwarding_rule_service_name}
  */
  readonly forwardingRuleServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#id IapWebForwardingRuleServiceIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#policy_data IapWebForwardingRuleServiceIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#project IapWebForwardingRuleServiceIamPolicy#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy google_iap_web_forwarding_rule_service_iam_policy}
*/
export class IapWebForwardingRuleServiceIamPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_web_forwarding_rule_service_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IapWebForwardingRuleServiceIamPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IapWebForwardingRuleServiceIamPolicy to import
  * @param importFromId The id of the existing IapWebForwardingRuleServiceIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IapWebForwardingRuleServiceIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_iap_web_forwarding_rule_service_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/iap_web_forwarding_rule_service_iam_policy google_iap_web_forwarding_rule_service_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IapWebForwardingRuleServiceIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IapWebForwardingRuleServiceIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_web_forwarding_rule_service_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.31.0',
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
    this._forwardingRuleServiceName = config.forwardingRuleServiceName;
    this._id = config.id;
    this._policyData = config.policyData;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // forwarding_rule_service_name - computed: false, optional: false, required: true
  private _forwardingRuleServiceName?: string; 
  public get forwardingRuleServiceName() {
    return this.getStringAttribute('forwarding_rule_service_name');
  }
  public set forwardingRuleServiceName(value: string) {
    this._forwardingRuleServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleServiceNameInput() {
    return this._forwardingRuleServiceName;
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

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
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
      forwarding_rule_service_name: cdktn.stringToTerraform(this._forwardingRuleServiceName),
      id: cdktn.stringToTerraform(this._id),
      policy_data: cdktn.stringToTerraform(this._policyData),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forwarding_rule_service_name: {
        value: cdktn.stringToHclTerraform(this._forwardingRuleServiceName),
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
      policy_data: {
        value: cdktn.stringToHclTerraform(this._policyData),
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
