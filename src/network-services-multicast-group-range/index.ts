/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesMulticastGroupRangeConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of consumer projects that are allowed to subscribe to the multicast
  * IP addresses within the range defined by this MulticastGroupRange. The
  * project can be specified using its project ID or project number. If left
  * empty, then all consumer projects are allowed (unless
  * require_explicit_accept is set to true) once they have VPC networks
  * associated to the multicast domain. The current max length of the accept
  * list is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#consumer_accept_list NetworkServicesMulticastGroupRange#consumer_accept_list}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#deletion_policy NetworkServicesMulticastGroupRange#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional text description of the multicast group range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#description NetworkServicesMulticastGroupRange#description}
  */
  readonly description?: string;
  /**
  * Multicast group range's distribution scope. Intra-zone or intra-region
  * cross-zone is supported, with default value being intra-region. Cross
  * region distribution is not supported.
  * Possible values:
  * INTRA_ZONE
  * INTRA_REGION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#distribution_scope NetworkServicesMulticastGroupRange#distribution_scope}
  */
  readonly distributionScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#id NetworkServicesMulticastGroupRange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key-value pairs.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#labels NetworkServicesMulticastGroupRange#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#location NetworkServicesMulticastGroupRange#location}
  */
  readonly location: string;
  /**
  * The resource name of the multicast domain in which to create this
  * multicast group range.
  * Use the following format:
  * 'projects/* /locations/global/multicastDomains/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#multicast_domain NetworkServicesMulticastGroupRange#multicast_domain}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly multicastDomain: string;
  /**
  * A unique name for the multicast group range.
  * The name is restricted to letters, numbers, and hyphen, with the first
  * character a letter, and the last a letter or a number. The name must not
  * exceed 48 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#multicast_group_range_id NetworkServicesMulticastGroupRange#multicast_group_range_id}
  */
  readonly multicastGroupRangeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#project NetworkServicesMulticastGroupRange#project}
  */
  readonly project?: string;
  /**
  * Whether an empty consumer_accept_list will deny all consumer projects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#require_explicit_accept NetworkServicesMulticastGroupRange#require_explicit_accept}
  */
  readonly requireExplicitAccept?: boolean | cdktn.IResolvable;
  /**
  * The resource name of the internal range reserved for this
  * multicast group range.
  * 
  * The internal range must be a Class D address (224.0.0.0 to 239.255.255.255)
  * and have a prefix length >= 23.
  * 
  * Use the following format:
  * 'projects/* /locations/global/internalRanges/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#reserved_internal_range NetworkServicesMulticastGroupRange#reserved_internal_range}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly reservedInternalRange: string;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#log_config NetworkServicesMulticastGroupRange#log_config}
  */
  readonly logConfig?: NetworkServicesMulticastGroupRangeLogConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#timeouts NetworkServicesMulticastGroupRange#timeouts}
  */
  readonly timeouts?: NetworkServicesMulticastGroupRangeTimeouts;
}
export interface NetworkServicesMulticastGroupRangeState {
}

export function networkServicesMulticastGroupRangeStateToTerraform(struct?: NetworkServicesMulticastGroupRangeState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function networkServicesMulticastGroupRangeStateToHclTerraform(struct?: NetworkServicesMulticastGroupRangeState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkServicesMulticastGroupRangeStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesMulticastGroupRangeState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastGroupRangeState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class NetworkServicesMulticastGroupRangeStateList extends cdktn.ComplexList {

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
  public get(index: number): NetworkServicesMulticastGroupRangeStateOutputReference {
    return new NetworkServicesMulticastGroupRangeStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesMulticastGroupRangeLogConfig {
  /**
  * Whether to enable logging or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#enabled NetworkServicesMulticastGroupRange#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function networkServicesMulticastGroupRangeLogConfigToTerraform(struct?: NetworkServicesMulticastGroupRangeLogConfigOutputReference | NetworkServicesMulticastGroupRangeLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function networkServicesMulticastGroupRangeLogConfigToHclTerraform(struct?: NetworkServicesMulticastGroupRangeLogConfigOutputReference | NetworkServicesMulticastGroupRangeLogConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesMulticastGroupRangeLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesMulticastGroupRangeLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastGroupRangeLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface NetworkServicesMulticastGroupRangeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#create NetworkServicesMulticastGroupRange#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#delete NetworkServicesMulticastGroupRange#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#update NetworkServicesMulticastGroupRange#update}
  */
  readonly update?: string;
}

export function networkServicesMulticastGroupRangeTimeoutsToTerraform(struct?: NetworkServicesMulticastGroupRangeTimeouts | cdktn.IResolvable): any {
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


export function networkServicesMulticastGroupRangeTimeoutsToHclTerraform(struct?: NetworkServicesMulticastGroupRangeTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesMulticastGroupRangeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesMulticastGroupRangeTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesMulticastGroupRangeTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range google_network_services_multicast_group_range}
*/
export class NetworkServicesMulticastGroupRange extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_multicast_group_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesMulticastGroupRange resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesMulticastGroupRange to import
  * @param importFromId The id of the existing NetworkServicesMulticastGroupRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesMulticastGroupRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_multicast_group_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/network_services_multicast_group_range google_network_services_multicast_group_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesMulticastGroupRangeConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesMulticastGroupRangeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_multicast_group_range',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._distributionScope = config.distributionScope;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._multicastDomain = config.multicastDomain;
    this._multicastGroupRangeId = config.multicastGroupRangeId;
    this._project = config.project;
    this._requireExplicitAccept = config.requireExplicitAccept;
    this._reservedInternalRange = config.reservedInternalRange;
    this._logConfig.internalValue = config.logConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_accept_list - computed: false, optional: true, required: false
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // distribution_scope - computed: false, optional: true, required: false
  private _distributionScope?: string; 
  public get distributionScope() {
    return this.getStringAttribute('distribution_scope');
  }
  public set distributionScope(value: string) {
    this._distributionScope = value;
  }
  public resetDistributionScope() {
    this._distributionScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionScopeInput() {
    return this._distributionScope;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // ip_cidr_range - computed: true, optional: false, required: false
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // multicast_domain - computed: false, optional: false, required: true
  private _multicastDomain?: string; 
  public get multicastDomain() {
    return this.getStringAttribute('multicast_domain');
  }
  public set multicastDomain(value: string) {
    this._multicastDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDomainInput() {
    return this._multicastDomain;
  }

  // multicast_group_range_id - computed: false, optional: false, required: true
  private _multicastGroupRangeId?: string; 
  public get multicastGroupRangeId() {
    return this.getStringAttribute('multicast_group_range_id');
  }
  public set multicastGroupRangeId(value: string) {
    this._multicastGroupRangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupRangeIdInput() {
    return this._multicastGroupRangeId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // require_explicit_accept - computed: false, optional: true, required: false
  private _requireExplicitAccept?: boolean | cdktn.IResolvable; 
  public get requireExplicitAccept() {
    return this.getBooleanAttribute('require_explicit_accept');
  }
  public set requireExplicitAccept(value: boolean | cdktn.IResolvable) {
    this._requireExplicitAccept = value;
  }
  public resetRequireExplicitAccept() {
    this._requireExplicitAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireExplicitAcceptInput() {
    return this._requireExplicitAccept;
  }

  // reserved_internal_range - computed: false, optional: false, required: true
  private _reservedInternalRange?: string; 
  public get reservedInternalRange() {
    return this.getStringAttribute('reserved_internal_range');
  }
  public set reservedInternalRange(value: string) {
    this._reservedInternalRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInternalRangeInput() {
    return this._reservedInternalRange;
  }

  // state - computed: true, optional: false, required: false
  private _state = new NetworkServicesMulticastGroupRangeStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new NetworkServicesMulticastGroupRangeLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: NetworkServicesMulticastGroupRangeLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesMulticastGroupRangeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesMulticastGroupRangeTimeouts) {
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
      distribution_scope: cdktn.stringToTerraform(this._distributionScope),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      multicast_domain: cdktn.stringToTerraform(this._multicastDomain),
      multicast_group_range_id: cdktn.stringToTerraform(this._multicastGroupRangeId),
      project: cdktn.stringToTerraform(this._project),
      require_explicit_accept: cdktn.booleanToTerraform(this._requireExplicitAccept),
      reserved_internal_range: cdktn.stringToTerraform(this._reservedInternalRange),
      log_config: networkServicesMulticastGroupRangeLogConfigToTerraform(this._logConfig.internalValue),
      timeouts: networkServicesMulticastGroupRangeTimeoutsToTerraform(this._timeouts.internalValue),
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
      distribution_scope: {
        value: cdktn.stringToHclTerraform(this._distributionScope),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_domain: {
        value: cdktn.stringToHclTerraform(this._multicastDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_group_range_id: {
        value: cdktn.stringToHclTerraform(this._multicastGroupRangeId),
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
      require_explicit_accept: {
        value: cdktn.booleanToHclTerraform(this._requireExplicitAccept),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reserved_internal_range: {
        value: cdktn.stringToHclTerraform(this._reservedInternalRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_config: {
        value: networkServicesMulticastGroupRangeLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesMulticastGroupRangeLogConfigList",
      },
      timeouts: {
        value: networkServicesMulticastGroupRangeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesMulticastGroupRangeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
