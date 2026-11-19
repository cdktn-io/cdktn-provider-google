/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudIdentityPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The customer that the Policy belongs to. Format: 'customers/{customer_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#customer CloudIdentityPolicy#customer}
  */
  readonly customer: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#deletion_policy CloudIdentityPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#id CloudIdentityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policy_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#policy_query CloudIdentityPolicy#policy_query}
  */
  readonly policyQuery: CloudIdentityPolicyPolicyQuery;
  /**
  * setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#setting CloudIdentityPolicy#setting}
  */
  readonly setting: CloudIdentityPolicySetting;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#timeouts CloudIdentityPolicy#timeouts}
  */
  readonly timeouts?: CloudIdentityPolicyTimeouts;
}
export interface CloudIdentityPolicyPolicyQuery {
  /**
  * The group that the query applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#group CloudIdentityPolicy#group}
  */
  readonly group?: string;
  /**
  * The OrgUnit the query applies to, in the format 'orgUnits/{org_unit_id}'.
  * '{org_unit_id}' is the obfuscated org unit ID, the same value the Admin SDK
  * Directory API returns as 'orgUnitId' without its 'id:' prefix. Org unit paths
  * and display names are not resolved and are rejected for most settings.
  * For detector settings ('settings/detector.*'), the API ignores this value and
  * always applies the policy to, and returns, the customer's root org unit, so any
  * other value produces a diff; set it to the root org unit's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#org_unit CloudIdentityPolicy#org_unit}
  */
  readonly orgUnit: string;
  /**
  * The CEL query that defines which entities the Policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#query CloudIdentityPolicy#query}
  */
  readonly query?: string;
}

export function cloudIdentityPolicyPolicyQueryToTerraform(struct?: CloudIdentityPolicyPolicyQueryOutputReference | CloudIdentityPolicyPolicyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group: cdktn.stringToTerraform(struct!.group),
    org_unit: cdktn.stringToTerraform(struct!.orgUnit),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function cloudIdentityPolicyPolicyQueryToHclTerraform(struct?: CloudIdentityPolicyPolicyQueryOutputReference | CloudIdentityPolicyPolicyQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group: {
      value: cdktn.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_unit: {
      value: cdktn.stringToHclTerraform(struct!.orgUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktn.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityPolicyPolicyQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudIdentityPolicyPolicyQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._orgUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgUnit = this._orgUnit;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityPolicyPolicyQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._orgUnit = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._orgUnit = value.orgUnit;
      this._query = value.query;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // org_unit - computed: false, optional: false, required: true
  private _orgUnit?: string; 
  public get orgUnit() {
    return this.getStringAttribute('org_unit');
  }
  public set orgUnit(value: string) {
    this._orgUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitInput() {
    return this._orgUnit;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
}
export interface CloudIdentityPolicySetting {
  /**
  * The type of the Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#type CloudIdentityPolicy#type}
  */
  readonly type: string;
  /**
  * The value of the Setting as JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#value_json CloudIdentityPolicy#value_json}
  */
  readonly valueJson: string;
}

export function cloudIdentityPolicySettingToTerraform(struct?: CloudIdentityPolicySettingOutputReference | CloudIdentityPolicySetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value_json: cdktn.stringToTerraform(struct!.valueJson),
  }
}


export function cloudIdentityPolicySettingToHclTerraform(struct?: CloudIdentityPolicySettingOutputReference | CloudIdentityPolicySetting): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_json: {
      value: cdktn.stringToHclTerraform(struct!.valueJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityPolicySettingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudIdentityPolicySetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueJson = this._valueJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityPolicySetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._valueJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._valueJson = value.valueJson;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_json - computed: false, optional: false, required: true
  private _valueJson?: string; 
  public get valueJson() {
    return this.getStringAttribute('value_json');
  }
  public set valueJson(value: string) {
    this._valueJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueJsonInput() {
    return this._valueJson;
  }
}
export interface CloudIdentityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#create CloudIdentityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#delete CloudIdentityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#update CloudIdentityPolicy#update}
  */
  readonly update?: string;
}

export function cloudIdentityPolicyTimeoutsToTerraform(struct?: CloudIdentityPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function cloudIdentityPolicyTimeoutsToHclTerraform(struct?: CloudIdentityPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIdentityPolicyTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityPolicyTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy google_cloud_identity_policy}
*/
export class CloudIdentityPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_identity_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudIdentityPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIdentityPolicy to import
  * @param importFromId The id of the existing CloudIdentityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIdentityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_identity_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_policy google_cloud_identity_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIdentityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIdentityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.12.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customer = config.customer;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._policyQuery.internalValue = config.policyQuery;
    this._setting.internalValue = config.setting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer - computed: false, optional: false, required: true
  private _customer?: string; 
  public get customer() {
    return this.getStringAttribute('customer');
  }
  public set customer(value: string) {
    this._customer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInput() {
    return this._customer;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_query - computed: false, optional: false, required: true
  private _policyQuery = new CloudIdentityPolicyPolicyQueryOutputReference(this, "policy_query");
  public get policyQuery() {
    return this._policyQuery;
  }
  public putPolicyQuery(value: CloudIdentityPolicyPolicyQuery) {
    this._policyQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyQueryInput() {
    return this._policyQuery.internalValue;
  }

  // setting - computed: false, optional: false, required: true
  private _setting = new CloudIdentityPolicySettingOutputReference(this, "setting");
  public get setting() {
    return this._setting;
  }
  public putSetting(value: CloudIdentityPolicySetting) {
    this._setting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudIdentityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudIdentityPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer: cdktn.stringToTerraform(this._customer),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      policy_query: cloudIdentityPolicyPolicyQueryToTerraform(this._policyQuery.internalValue),
      setting: cloudIdentityPolicySettingToTerraform(this._setting.internalValue),
      timeouts: cloudIdentityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer: {
        value: cdktn.stringToHclTerraform(this._customer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      policy_query: {
        value: cloudIdentityPolicyPolicyQueryToHclTerraform(this._policyQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudIdentityPolicyPolicyQueryList",
      },
      setting: {
        value: cloudIdentityPolicySettingToHclTerraform(this._setting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudIdentityPolicySettingList",
      },
      timeouts: {
        value: cloudIdentityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudIdentityPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
