/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DnsResponsePolicyRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#deletion_policy DnsResponsePolicyRule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#dns_name DnsResponsePolicyRule#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}
  */
  readonly project?: string;
  /**
  * Identifies the response policy addressed by this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#response_policy DnsResponsePolicyRule#response_policy}
  */
  readonly responsePolicy: string;
  /**
  * An identifier for this rule. Must be unique with the ResponsePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#rule_name DnsResponsePolicyRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * local_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#local_data DnsResponsePolicyRule#local_data}
  */
  readonly localData?: DnsResponsePolicyRuleLocalData;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#timeouts DnsResponsePolicyRule#timeouts}
  */
  readonly timeouts?: DnsResponsePolicyRuleTimeouts;
}
export interface DnsResponsePolicyRuleLocalDataLocalDatas {
  /**
  * For example, www.example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#name DnsResponsePolicyRule#name}
  */
  readonly name: string;
  /**
  * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#rrdatas DnsResponsePolicyRule#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * Number of seconds that this ResourceRecordSet can be cached by
  * resolvers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#ttl DnsResponsePolicyRule#ttl}
  */
  readonly ttl?: number;
  /**
  * One of valid DNS resource types. Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#type DnsResponsePolicyRule#type}
  */
  readonly type: string;
}

export function dnsResponsePolicyRuleLocalDataLocalDatasToTerraform(struct?: DnsResponsePolicyRuleLocalDataLocalDatas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rrdatas: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.rrdatas),
    ttl: cdktn.numberToTerraform(struct!.ttl),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function dnsResponsePolicyRuleLocalDataLocalDatasToHclTerraform(struct?: DnsResponsePolicyRuleLocalDataLocalDatas | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rrdatas: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.rrdatas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktn.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsResponsePolicyRuleLocalDataLocalDatasOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DnsResponsePolicyRuleLocalDataLocalDatas | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsResponsePolicyRuleLocalDataLocalDatas | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rrdatas = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rrdatas = value.rrdatas;
      this._ttl = value.ttl;
      this._type = value.type;
    }
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
}

export class DnsResponsePolicyRuleLocalDataLocalDatasList extends cdktn.ComplexList {
  public internalValue? : DnsResponsePolicyRuleLocalDataLocalDatas[] | cdktn.IResolvable

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
  public get(index: number): DnsResponsePolicyRuleLocalDataLocalDatasOutputReference {
    return new DnsResponsePolicyRuleLocalDataLocalDatasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsResponsePolicyRuleLocalData {
  /**
  * local_datas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#local_datas DnsResponsePolicyRule#local_datas}
  */
  readonly localDatas: DnsResponsePolicyRuleLocalDataLocalDatas[] | cdktn.IResolvable;
}

export function dnsResponsePolicyRuleLocalDataToTerraform(struct?: DnsResponsePolicyRuleLocalDataOutputReference | DnsResponsePolicyRuleLocalData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_datas: cdktn.listMapper(dnsResponsePolicyRuleLocalDataLocalDatasToTerraform, true)(struct!.localDatas),
  }
}


export function dnsResponsePolicyRuleLocalDataToHclTerraform(struct?: DnsResponsePolicyRuleLocalDataOutputReference | DnsResponsePolicyRuleLocalData): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_datas: {
      value: cdktn.listMapperHcl(dnsResponsePolicyRuleLocalDataLocalDatasToHclTerraform, true)(struct!.localDatas),
      isBlock: true,
      type: "list",
      storageClassType: "DnsResponsePolicyRuleLocalDataLocalDatasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsResponsePolicyRuleLocalDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsResponsePolicyRuleLocalData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDatas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDatas = this._localDatas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsResponsePolicyRuleLocalData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDatas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDatas.internalValue = value.localDatas;
    }
  }

  // local_datas - computed: false, optional: false, required: true
  private _localDatas = new DnsResponsePolicyRuleLocalDataLocalDatasList(this, "local_datas", false);
  public get localDatas() {
    return this._localDatas;
  }
  public putLocalDatas(value: DnsResponsePolicyRuleLocalDataLocalDatas[] | cdktn.IResolvable) {
    this._localDatas.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDatasInput() {
    return this._localDatas.internalValue;
  }
}
export interface DnsResponsePolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}
  */
  readonly update?: string;
}

export function dnsResponsePolicyRuleTimeoutsToTerraform(struct?: DnsResponsePolicyRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function dnsResponsePolicyRuleTimeoutsToHclTerraform(struct?: DnsResponsePolicyRuleTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class DnsResponsePolicyRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsResponsePolicyRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DnsResponsePolicyRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule google_dns_response_policy_rule}
*/
export class DnsResponsePolicyRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_response_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DnsResponsePolicyRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsResponsePolicyRule to import
  * @param importFromId The id of the existing DnsResponsePolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsResponsePolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_response_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/dns_response_policy_rule google_dns_response_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsResponsePolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DnsResponsePolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_response_policy_rule',
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
    this._deletionPolicy = config.deletionPolicy;
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._project = config.project;
    this._responsePolicy = config.responsePolicy;
    this._ruleName = config.ruleName;
    this._localData.internalValue = config.localData;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
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

  // response_policy - computed: false, optional: false, required: true
  private _responsePolicy?: string; 
  public get responsePolicy() {
    return this.getStringAttribute('response_policy');
  }
  public set responsePolicy(value: string) {
    this._responsePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePolicyInput() {
    return this._responsePolicy;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // local_data - computed: false, optional: true, required: false
  private _localData = new DnsResponsePolicyRuleLocalDataOutputReference(this, "local_data");
  public get localData() {
    return this._localData;
  }
  public putLocalData(value: DnsResponsePolicyRuleLocalData) {
    this._localData.internalValue = value;
  }
  public resetLocalData() {
    this._localData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDataInput() {
    return this._localData.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsResponsePolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsResponsePolicyRuleTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      dns_name: cdktn.stringToTerraform(this._dnsName),
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      response_policy: cdktn.stringToTerraform(this._responsePolicy),
      rule_name: cdktn.stringToTerraform(this._ruleName),
      local_data: dnsResponsePolicyRuleLocalDataToTerraform(this._localData.internalValue),
      timeouts: dnsResponsePolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktn.stringToHclTerraform(this._dnsName),
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_policy: {
        value: cdktn.stringToHclTerraform(this._responsePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktn.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_data: {
        value: dnsResponsePolicyRuleLocalDataToHclTerraform(this._localData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsResponsePolicyRuleLocalDataList",
      },
      timeouts: {
        value: dnsResponsePolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsResponsePolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
