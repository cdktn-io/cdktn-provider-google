/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesMulticastDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * The resource name of the multicast admin VPC network.
  * Use the following format:
  * 'projects/{project}/locations/global/networks/{network}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#admin_network NetworkServicesMulticastDomain#admin_network}
  */
  readonly adminNetwork: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#deletion_policy NetworkServicesMulticastDomain#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional text description of the multicast domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#description NetworkServicesMulticastDomain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#id NetworkServicesMulticastDomain#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#labels NetworkServicesMulticastDomain#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#location NetworkServicesMulticastDomain#location}
  */
  readonly location: string;
  /**
  * The multicast domain group this domain should be associated with.
  * Use the following format:
  * 'projects/{project}/locations/global/multicastDomainGroups/{multicast_domain_group}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#multicast_domain_group NetworkServicesMulticastDomain#multicast_domain_group}
  */
  readonly multicastDomainGroup?: string;
  /**
  * A unique name for the multicast domain.
  * The name is restricted to letters, numbers, and hyphen, with the first
  * character a letter, and the last a letter or a number. The name must not
  * exceed 48 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#multicast_domain_id NetworkServicesMulticastDomain#multicast_domain_id}
  */
  readonly multicastDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#project NetworkServicesMulticastDomain#project}
  */
  readonly project?: string;
  /**
  * connection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#connection_config NetworkServicesMulticastDomain#connection_config}
  */
  readonly connectionConfig: NetworkServicesMulticastDomainConnectionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#timeouts NetworkServicesMulticastDomain#timeouts}
  */
  readonly timeouts?: NetworkServicesMulticastDomainTimeouts;
  /**
  * ull_multicast_domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#ull_multicast_domain NetworkServicesMulticastDomain#ull_multicast_domain}
  */
  readonly ullMulticastDomain?: NetworkServicesMulticastDomainUllMulticastDomain;
}
export interface NetworkServicesMulticastDomainState {
}

export function networkServicesMulticastDomainStateToTerraform(struct?: NetworkServicesMulticastDomainState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkServicesMulticastDomainStateToHclTerraform(struct?: NetworkServicesMulticastDomainState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkServicesMulticastDomainStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesMulticastDomainState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastDomainState | undefined) {
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

export class NetworkServicesMulticastDomainStateList extends cdktn.ComplexList {

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
  public get(index: number): NetworkServicesMulticastDomainStateOutputReference {
    return new NetworkServicesMulticastDomainStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesMulticastDomainConnectionConfig {
  /**
  * The VPC connection type.
  * Possible values:
  * NCC
  * SAME_VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#connection_type NetworkServicesMulticastDomain#connection_type}
  */
  readonly connectionType: string;
  /**
  * The resource name of the
  * [NCC](https://cloud.google.com/network-connectivity-center) hub.
  * Use the following format:
  * 'projects/{project}/locations/global/hubs/{hub}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#ncc_hub NetworkServicesMulticastDomain#ncc_hub}
  */
  readonly nccHub?: string;
}

export function networkServicesMulticastDomainConnectionConfigToTerraform(struct?: NetworkServicesMulticastDomainConnectionConfigOutputReference | NetworkServicesMulticastDomainConnectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktn.stringToTerraform(struct!.connectionType),
    ncc_hub: cdktn.stringToTerraform(struct!.nccHub),
  }
}


export function networkServicesMulticastDomainConnectionConfigToHclTerraform(struct?: NetworkServicesMulticastDomainConnectionConfigOutputReference | NetworkServicesMulticastDomainConnectionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktn.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ncc_hub: {
      value: cdktn.stringToHclTerraform(struct!.nccHub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesMulticastDomainConnectionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesMulticastDomainConnectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._nccHub !== undefined) {
      hasAnyValues = true;
      internalValueResult.nccHub = this._nccHub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastDomainConnectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._nccHub = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._nccHub = value.nccHub;
    }
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // ncc_hub - computed: false, optional: true, required: false
  private _nccHub?: string; 
  public get nccHub() {
    return this.getStringAttribute('ncc_hub');
  }
  public set nccHub(value: string) {
    this._nccHub = value;
  }
  public resetNccHub() {
    this._nccHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nccHubInput() {
    return this._nccHub;
  }
}
export interface NetworkServicesMulticastDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#create NetworkServicesMulticastDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#delete NetworkServicesMulticastDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#update NetworkServicesMulticastDomain#update}
  */
  readonly update?: string;
}

export function networkServicesMulticastDomainTimeoutsToTerraform(struct?: NetworkServicesMulticastDomainTimeouts | cdktn.IResolvable): any {
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


export function networkServicesMulticastDomainTimeoutsToHclTerraform(struct?: NetworkServicesMulticastDomainTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesMulticastDomainTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesMulticastDomainTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesMulticastDomainTimeouts | cdktn.IResolvable | undefined) {
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
export interface NetworkServicesMulticastDomainUllMulticastDomain {
  /**
  * The preconfigured Ultra-Low-Latency domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#preconfigured_ull_domain NetworkServicesMulticastDomain#preconfigured_ull_domain}
  */
  readonly preconfiguredUllDomain?: string;
}

export function networkServicesMulticastDomainUllMulticastDomainToTerraform(struct?: NetworkServicesMulticastDomainUllMulticastDomainOutputReference | NetworkServicesMulticastDomainUllMulticastDomain): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preconfigured_ull_domain: cdktn.stringToTerraform(struct!.preconfiguredUllDomain),
  }
}


export function networkServicesMulticastDomainUllMulticastDomainToHclTerraform(struct?: NetworkServicesMulticastDomainUllMulticastDomainOutputReference | NetworkServicesMulticastDomainUllMulticastDomain): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preconfigured_ull_domain: {
      value: cdktn.stringToHclTerraform(struct!.preconfiguredUllDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesMulticastDomainUllMulticastDomainOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesMulticastDomainUllMulticastDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preconfiguredUllDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconfiguredUllDomain = this._preconfiguredUllDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastDomainUllMulticastDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preconfiguredUllDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preconfiguredUllDomain = value.preconfiguredUllDomain;
    }
  }

  // preconfigured_ull_domain - computed: false, optional: true, required: false
  private _preconfiguredUllDomain?: string; 
  public get preconfiguredUllDomain() {
    return this.getStringAttribute('preconfigured_ull_domain');
  }
  public set preconfiguredUllDomain(value: string) {
    this._preconfiguredUllDomain = value;
  }
  public resetPreconfiguredUllDomain() {
    this._preconfiguredUllDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredUllDomainInput() {
    return this._preconfiguredUllDomain;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain google_network_services_multicast_domain}
*/
export class NetworkServicesMulticastDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_multicast_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesMulticastDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesMulticastDomain to import
  * @param importFromId The id of the existing NetworkServicesMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesMulticastDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_multicast_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain google_network_services_multicast_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesMulticastDomainConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesMulticastDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_multicast_domain',
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
    this._adminNetwork = config.adminNetwork;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._multicastDomainGroup = config.multicastDomainGroup;
    this._multicastDomainId = config.multicastDomainId;
    this._project = config.project;
    this._connectionConfig.internalValue = config.connectionConfig;
    this._timeouts.internalValue = config.timeouts;
    this._ullMulticastDomain.internalValue = config.ullMulticastDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_network - computed: false, optional: false, required: true
  private _adminNetwork?: string; 
  public get adminNetwork() {
    return this.getStringAttribute('admin_network');
  }
  public set adminNetwork(value: string) {
    this._adminNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNetworkInput() {
    return this._adminNetwork;
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

  // multicast_domain_group - computed: false, optional: true, required: false
  private _multicastDomainGroup?: string; 
  public get multicastDomainGroup() {
    return this.getStringAttribute('multicast_domain_group');
  }
  public set multicastDomainGroup(value: string) {
    this._multicastDomainGroup = value;
  }
  public resetMulticastDomainGroup() {
    this._multicastDomainGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDomainGroupInput() {
    return this._multicastDomainGroup;
  }

  // multicast_domain_id - computed: false, optional: false, required: true
  private _multicastDomainId?: string; 
  public get multicastDomainId() {
    return this.getStringAttribute('multicast_domain_id');
  }
  public set multicastDomainId(value: string) {
    this._multicastDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDomainIdInput() {
    return this._multicastDomainId;
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

  // state - computed: true, optional: false, required: false
  private _state = new NetworkServicesMulticastDomainStateList(this, "state", false);
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

  // connection_config - computed: false, optional: false, required: true
  private _connectionConfig = new NetworkServicesMulticastDomainConnectionConfigOutputReference(this, "connection_config");
  public get connectionConfig() {
    return this._connectionConfig;
  }
  public putConnectionConfig(value: NetworkServicesMulticastDomainConnectionConfig) {
    this._connectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionConfigInput() {
    return this._connectionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesMulticastDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesMulticastDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ull_multicast_domain - computed: false, optional: true, required: false
  private _ullMulticastDomain = new NetworkServicesMulticastDomainUllMulticastDomainOutputReference(this, "ull_multicast_domain");
  public get ullMulticastDomain() {
    return this._ullMulticastDomain;
  }
  public putUllMulticastDomain(value: NetworkServicesMulticastDomainUllMulticastDomain) {
    this._ullMulticastDomain.internalValue = value;
  }
  public resetUllMulticastDomain() {
    this._ullMulticastDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ullMulticastDomainInput() {
    return this._ullMulticastDomain.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_network: cdktn.stringToTerraform(this._adminNetwork),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      multicast_domain_group: cdktn.stringToTerraform(this._multicastDomainGroup),
      multicast_domain_id: cdktn.stringToTerraform(this._multicastDomainId),
      project: cdktn.stringToTerraform(this._project),
      connection_config: networkServicesMulticastDomainConnectionConfigToTerraform(this._connectionConfig.internalValue),
      timeouts: networkServicesMulticastDomainTimeoutsToTerraform(this._timeouts.internalValue),
      ull_multicast_domain: networkServicesMulticastDomainUllMulticastDomainToTerraform(this._ullMulticastDomain.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_network: {
        value: cdktn.stringToHclTerraform(this._adminNetwork),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      multicast_domain_group: {
        value: cdktn.stringToHclTerraform(this._multicastDomainGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_domain_id: {
        value: cdktn.stringToHclTerraform(this._multicastDomainId),
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
      connection_config: {
        value: networkServicesMulticastDomainConnectionConfigToHclTerraform(this._connectionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesMulticastDomainConnectionConfigList",
      },
      timeouts: {
        value: networkServicesMulticastDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesMulticastDomainTimeouts",
      },
      ull_multicast_domain: {
        value: networkServicesMulticastDomainUllMulticastDomainToHclTerraform(this._ullMulticastDomain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesMulticastDomainUllMulticastDomainList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
