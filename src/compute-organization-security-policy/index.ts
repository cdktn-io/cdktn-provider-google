/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeOrganizationSecurityPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#deletion_policy ComputeOrganizationSecurityPolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A textual description for the organization security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#description ComputeOrganizationSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * User-provided name of the organization security policy. The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#display_name ComputeOrganizationSecurityPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#id ComputeOrganizationSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy.
  * Format: organizations/{organization_id} or folders/{folder_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#parent ComputeOrganizationSecurityPolicy#parent}
  */
  readonly parent: string;
  /**
  * User-provided name of the organization security policy. The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#short_name ComputeOrganizationSecurityPolicy#short_name}
  */
  readonly shortName?: string;
  /**
  * The type indicates the intended use of the security policy. This field can be set only at resource creation time.
  * 
  * **NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#type ComputeOrganizationSecurityPolicy#type}
  */
  readonly type?: string;
  /**
  * advanced_options_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#advanced_options_config ComputeOrganizationSecurityPolicy#advanced_options_config}
  */
  readonly advancedOptionsConfig?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#timeouts ComputeOrganizationSecurityPolicy#timeouts}
  */
  readonly timeouts?: ComputeOrganizationSecurityPolicyTimeouts;
}
export interface ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
  /**
  * A list of content types to be parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#content_types ComputeOrganizationSecurityPolicy#content_types}
  */
  readonly contentTypes: string[];
}

export function computeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToTerraform(struct?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference | ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.contentTypes),
  }
}


export function computeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToHclTerraform(struct?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference | ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentTypes = value.contentTypes;
    }
  }

  // content_types - computed: false, optional: false, required: true
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('content_types'));
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }
}
export interface ComputeOrganizationSecurityPolicyAdvancedOptionsConfig {
  /**
  * JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#json_parsing ComputeOrganizationSecurityPolicy#json_parsing}
  */
  readonly jsonParsing?: string;
  /**
  * Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#log_level ComputeOrganizationSecurityPolicy#log_level}
  */
  readonly logLevel?: string;
  /**
  * The maximum request size chosen by the customer with Waf enabled. Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
  * Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#request_body_inspection_size ComputeOrganizationSecurityPolicy#request_body_inspection_size}
  */
  readonly requestBodyInspectionSize?: string;
  /**
  * An optional list of case-insensitive request header names to use for resolving the client source IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#user_ip_request_headers ComputeOrganizationSecurityPolicy#user_ip_request_headers}
  */
  readonly userIpRequestHeaders?: string[];
  /**
  * json_custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#json_custom_config ComputeOrganizationSecurityPolicy#json_custom_config}
  */
  readonly jsonCustomConfig?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
}

export function computeOrganizationSecurityPolicyAdvancedOptionsConfigToTerraform(struct?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference | ComputeOrganizationSecurityPolicyAdvancedOptionsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    json_parsing: cdktn.stringToTerraform(struct!.jsonParsing),
    log_level: cdktn.stringToTerraform(struct!.logLevel),
    request_body_inspection_size: cdktn.stringToTerraform(struct!.requestBodyInspectionSize),
    user_ip_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userIpRequestHeaders),
    json_custom_config: computeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToTerraform(struct!.jsonCustomConfig),
  }
}


export function computeOrganizationSecurityPolicyAdvancedOptionsConfigToHclTerraform(struct?: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference | ComputeOrganizationSecurityPolicyAdvancedOptionsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    json_parsing: {
      value: cdktn.stringToHclTerraform(struct!.jsonParsing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktn.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_body_inspection_size: {
      value: cdktn.stringToHclTerraform(struct!.requestBodyInspectionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ip_request_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userIpRequestHeaders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_custom_config: {
      value: computeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigToHclTerraform(struct!.jsonCustomConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyAdvancedOptionsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonParsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParsing = this._jsonParsing;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._requestBodyInspectionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyInspectionSize = this._requestBodyInspectionSize;
    }
    if (this._userIpRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIpRequestHeaders = this._userIpRequestHeaders;
    }
    if (this._jsonCustomConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonCustomConfig = this._jsonCustomConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonParsing = undefined;
      this._logLevel = undefined;
      this._requestBodyInspectionSize = undefined;
      this._userIpRequestHeaders = undefined;
      this._jsonCustomConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonParsing = value.jsonParsing;
      this._logLevel = value.logLevel;
      this._requestBodyInspectionSize = value.requestBodyInspectionSize;
      this._userIpRequestHeaders = value.userIpRequestHeaders;
      this._jsonCustomConfig.internalValue = value.jsonCustomConfig;
    }
  }

  // json_parsing - computed: false, optional: true, required: false
  private _jsonParsing?: string; 
  public get jsonParsing() {
    return this.getStringAttribute('json_parsing');
  }
  public set jsonParsing(value: string) {
    this._jsonParsing = value;
  }
  public resetJsonParsing() {
    this._jsonParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParsingInput() {
    return this._jsonParsing;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // request_body_inspection_size - computed: false, optional: true, required: false
  private _requestBodyInspectionSize?: string; 
  public get requestBodyInspectionSize() {
    return this.getStringAttribute('request_body_inspection_size');
  }
  public set requestBodyInspectionSize(value: string) {
    this._requestBodyInspectionSize = value;
  }
  public resetRequestBodyInspectionSize() {
    this._requestBodyInspectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInspectionSizeInput() {
    return this._requestBodyInspectionSize;
  }

  // user_ip_request_headers - computed: false, optional: true, required: false
  private _userIpRequestHeaders?: string[]; 
  public get userIpRequestHeaders() {
    return cdktn.Fn.tolist(this.getListAttribute('user_ip_request_headers'));
  }
  public set userIpRequestHeaders(value: string[]) {
    this._userIpRequestHeaders = value;
  }
  public resetUserIpRequestHeaders() {
    this._userIpRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIpRequestHeadersInput() {
    return this._userIpRequestHeaders;
  }

  // json_custom_config - computed: false, optional: true, required: false
  private _jsonCustomConfig = new ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(this, "json_custom_config");
  public get jsonCustomConfig() {
    return this._jsonCustomConfig;
  }
  public putJsonCustomConfig(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig) {
    this._jsonCustomConfig.internalValue = value;
  }
  public resetJsonCustomConfig() {
    this._jsonCustomConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonCustomConfigInput() {
    return this._jsonCustomConfig.internalValue;
  }
}
export interface ComputeOrganizationSecurityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#create ComputeOrganizationSecurityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#delete ComputeOrganizationSecurityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#update ComputeOrganizationSecurityPolicy#update}
  */
  readonly update?: string;
}

export function computeOrganizationSecurityPolicyTimeoutsToTerraform(struct?: ComputeOrganizationSecurityPolicyTimeouts | cdktn.IResolvable): any {
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


export function computeOrganizationSecurityPolicyTimeoutsToHclTerraform(struct?: ComputeOrganizationSecurityPolicyTimeouts | cdktn.IResolvable): any {
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

export class ComputeOrganizationSecurityPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeOrganizationSecurityPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy google_compute_organization_security_policy}
*/
export class ComputeOrganizationSecurityPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeOrganizationSecurityPolicy to import
  * @param importFromId The id of the existing ComputeOrganizationSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeOrganizationSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_organization_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_organization_security_policy google_compute_organization_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeOrganizationSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeOrganizationSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.41.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._shortName = config.shortName;
    this._type = config.type;
    this._advancedOptionsConfig.internalValue = config.advancedOptionsConfig;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // short_name - computed: false, optional: true, required: false
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  public resetShortName() {
    this._shortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // advanced_options_config - computed: false, optional: true, required: false
  private _advancedOptionsConfig = new ComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(this, "advanced_options_config");
  public get advancedOptionsConfig() {
    return this._advancedOptionsConfig;
  }
  public putAdvancedOptionsConfig(value: ComputeOrganizationSecurityPolicyAdvancedOptionsConfig) {
    this._advancedOptionsConfig.internalValue = value;
  }
  public resetAdvancedOptionsConfig() {
    this._advancedOptionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsConfigInput() {
    return this._advancedOptionsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeOrganizationSecurityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeOrganizationSecurityPolicyTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      parent: cdktn.stringToTerraform(this._parent),
      short_name: cdktn.stringToTerraform(this._shortName),
      type: cdktn.stringToTerraform(this._type),
      advanced_options_config: computeOrganizationSecurityPolicyAdvancedOptionsConfigToTerraform(this._advancedOptionsConfig.internalValue),
      timeouts: computeOrganizationSecurityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_name: {
        value: cdktn.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_options_config: {
        value: computeOrganizationSecurityPolicyAdvancedOptionsConfigToHclTerraform(this._advancedOptionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeOrganizationSecurityPolicyAdvancedOptionsConfigList",
      },
      timeouts: {
        value: computeOrganizationSecurityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeOrganizationSecurityPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
