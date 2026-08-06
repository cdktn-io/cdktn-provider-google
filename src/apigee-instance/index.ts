/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ApigeeInstanceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. Customer accept list represents the list of projects (id/number) on customer
  * side that can privately connect to the service attachment. It is an optional field
  * which the customers can provide during the instance creation. By default, the customer
  * project associated with the Apigee organization will be included to the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}
  */
  readonly consumerAcceptList?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#deletion_policy ApigeeInstance#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#description ApigeeInstance#description}
  */
  readonly description?: string;
  /**
  * Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only.
  * Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}
  */
  readonly diskEncryptionKeyName?: string;
  /**
  * Display name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#id ApigeeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP range represents the customer-provided CIDR block of length 22 that will be used for
  * the Apigee instance creation. This optional range, if provided, should be freely
  * available as part of larger named range the customer has allocated to the Service
  * Networking peering. If this is not provided, Apigee will automatically request for any
  * available /22 CIDR block from Service Networking. The customer should use this CIDR block
  * for configuring their firewall needs to allow traffic from Apigee.
  * Input format: "a.b.c.d/22"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Required. Compute Engine location where the instance resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#location ApigeeInstance#location}
  */
  readonly location: string;
  /**
  * Resource ID of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#name ApigeeInstance#name}
  */
  readonly name: string;
  /**
  * The Apigee Organization associated with the Apigee instance,
  * in the format 'organizations/{{org_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}
  */
  readonly orgId: string;
  /**
  * The size of the CIDR block range that will be reserved by the instance. For valid values,
  * see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}
  */
  readonly peeringCidrRange?: string;
  /**
  * access_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#access_logging_config ApigeeInstance#access_logging_config}
  */
  readonly accessLoggingConfig?: ApigeeInstanceAccessLoggingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}
  */
  readonly timeouts?: ApigeeInstanceTimeouts;
}
export interface ApigeeInstanceAccessLoggingConfig {
  /**
  * Boolean flag that specifies whether the customer access log feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#enabled ApigeeInstance#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Ship the access log entries that match the statusCode defined in the filter.
  * The statusCode is the only expected/supported filter field. (Ex: statusCode)
  * The filter will parse it to the Common Expression Language semantics for expression
  * evaluation to build the filter condition. (Ex: "filter": statusCode >= 200 && statusCode < 300 )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#filter ApigeeInstance#filter}
  */
  readonly filter?: string;
}

export function apigeeInstanceAccessLoggingConfigToTerraform(struct?: ApigeeInstanceAccessLoggingConfigOutputReference | ApigeeInstanceAccessLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    filter: cdktn.stringToTerraform(struct!.filter),
  }
}


export function apigeeInstanceAccessLoggingConfigToHclTerraform(struct?: ApigeeInstanceAccessLoggingConfigOutputReference | ApigeeInstanceAccessLoggingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeInstanceAccessLoggingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeInstanceAccessLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeInstanceAccessLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._filter = value.filter;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface ApigeeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#create ApigeeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#update ApigeeInstance#update}
  */
  readonly update?: string;
}

export function apigeeInstanceTimeoutsToTerraform(struct?: ApigeeInstanceTimeouts | cdktn.IResolvable): any {
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


export function apigeeInstanceTimeoutsToHclTerraform(struct?: ApigeeInstanceTimeouts | cdktn.IResolvable): any {
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

export class ApigeeInstanceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeInstanceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ApigeeInstanceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance google_apigee_instance}
*/
export class ApigeeInstance extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ApigeeInstance resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeInstance to import
  * @param importFromId The id of the existing ApigeeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/apigee_instance google_apigee_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._consumerAcceptList = config.consumerAcceptList;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._diskEncryptionKeyName = config.diskEncryptionKeyName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipRange = config.ipRange;
    this._location = config.location;
    this._name = config.name;
    this._orgId = config.orgId;
    this._peeringCidrRange = config.peeringCidrRange;
    this._accessLoggingConfig.internalValue = config.accessLoggingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_accept_list - computed: true, optional: true, required: false
  private _consumerAcceptList?: string[]; 
  public get consumerAcceptList() {
    return this.getListAttribute('consumer_accept_list');
  }
  public set consumerAcceptList(value: string[]) {
    this._consumerAcceptList = value;
  }
  public resetConsumerAcceptList() {
    this._consumerAcceptList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAcceptListInput() {
    return this._consumerAcceptList;
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

  // disk_encryption_key_name - computed: false, optional: true, required: false
  private _diskEncryptionKeyName?: string; 
  public get diskEncryptionKeyName() {
    return this.getStringAttribute('disk_encryption_key_name');
  }
  public set diskEncryptionKeyName(value: string) {
    this._diskEncryptionKeyName = value;
  }
  public resetDiskEncryptionKeyName() {
    this._diskEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyNameInput() {
    return this._diskEncryptionKeyName;
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // peering_cidr_range - computed: true, optional: true, required: false
  private _peeringCidrRange?: string; 
  public get peeringCidrRange() {
    return this.getStringAttribute('peering_cidr_range');
  }
  public set peeringCidrRange(value: string) {
    this._peeringCidrRange = value;
  }
  public resetPeeringCidrRange() {
    this._peeringCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringCidrRangeInput() {
    return this._peeringCidrRange;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }

  // access_logging_config - computed: false, optional: true, required: false
  private _accessLoggingConfig = new ApigeeInstanceAccessLoggingConfigOutputReference(this, "access_logging_config");
  public get accessLoggingConfig() {
    return this._accessLoggingConfig;
  }
  public putAccessLoggingConfig(value: ApigeeInstanceAccessLoggingConfig) {
    this._accessLoggingConfig.internalValue = value;
  }
  public resetAccessLoggingConfig() {
    this._accessLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLoggingConfigInput() {
    return this._accessLoggingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeInstanceTimeouts) {
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
      consumer_accept_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._consumerAcceptList),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      disk_encryption_key_name: cdktn.stringToTerraform(this._diskEncryptionKeyName),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      ip_range: cdktn.stringToTerraform(this._ipRange),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      org_id: cdktn.stringToTerraform(this._orgId),
      peering_cidr_range: cdktn.stringToTerraform(this._peeringCidrRange),
      access_logging_config: apigeeInstanceAccessLoggingConfigToTerraform(this._accessLoggingConfig.internalValue),
      timeouts: apigeeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_accept_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._consumerAcceptList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      disk_encryption_key_name: {
        value: cdktn.stringToHclTerraform(this._diskEncryptionKeyName),
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
      ip_range: {
        value: cdktn.stringToHclTerraform(this._ipRange),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktn.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_cidr_range: {
        value: cdktn.stringToHclTerraform(this._peeringCidrRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_logging_config: {
        value: apigeeInstanceAccessLoggingConfigToHclTerraform(this._accessLoggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeInstanceAccessLoggingConfigList",
      },
      timeouts: {
        value: apigeeInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
