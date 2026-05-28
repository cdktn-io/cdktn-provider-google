/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkServicesMulticastDomainActivationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#deletion_policy NetworkServicesMulticastDomainActivation#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional text description of the multicast domain activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#description NetworkServicesMulticastDomainActivation#description}
  */
  readonly description?: string;
  /**
  * Option to allow disabling placement policy for multicast infrastructure.
  * Only applicable if the activation is for a domain associating with a
  * multicast domain group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#disable_placement_policy NetworkServicesMulticastDomainActivation#disable_placement_policy}
  */
  readonly disablePlacementPolicy?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#id NetworkServicesMulticastDomainActivation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key-value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#labels NetworkServicesMulticastDomainActivation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#location NetworkServicesMulticastDomainActivation#location}
  */
  readonly location: string;
  /**
  * The resource name of the multicast domain to activate.
  * Use the following format:
  * 'projects/* /locations/global/multicastDomains/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#multicast_domain NetworkServicesMulticastDomainActivation#multicast_domain}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly multicastDomain: string;
  /**
  * A unique name for the multicast domain activation.
  * The name is restricted to letters, numbers, and hyphen, with the first
  * character a letter, and the last a letter or a number. The name must not
  * exceed 48 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#multicast_domain_activation_id NetworkServicesMulticastDomainActivation#multicast_domain_activation_id}
  */
  readonly multicastDomainActivationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#project NetworkServicesMulticastDomainActivation#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#timeouts NetworkServicesMulticastDomainActivation#timeouts}
  */
  readonly timeouts?: NetworkServicesMulticastDomainActivationTimeouts;
  /**
  * traffic_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#traffic_spec NetworkServicesMulticastDomainActivation#traffic_spec}
  */
  readonly trafficSpec?: NetworkServicesMulticastDomainActivationTrafficSpec;
}
export interface NetworkServicesMulticastDomainActivationState {
}

export function networkServicesMulticastDomainActivationStateToTerraform(struct?: NetworkServicesMulticastDomainActivationState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkServicesMulticastDomainActivationStateToHclTerraform(struct?: NetworkServicesMulticastDomainActivationState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkServicesMulticastDomainActivationStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkServicesMulticastDomainActivationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastDomainActivationState | undefined) {
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

export class NetworkServicesMulticastDomainActivationStateList extends cdktn.ComplexList {

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
  public get(index: number): NetworkServicesMulticastDomainActivationStateOutputReference {
    return new NetworkServicesMulticastDomainActivationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesMulticastDomainActivationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#create NetworkServicesMulticastDomainActivation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#delete NetworkServicesMulticastDomainActivation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#update NetworkServicesMulticastDomainActivation#update}
  */
  readonly update?: string;
}

export function networkServicesMulticastDomainActivationTimeoutsToTerraform(struct?: NetworkServicesMulticastDomainActivationTimeouts | cdktn.IResolvable): any {
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


export function networkServicesMulticastDomainActivationTimeoutsToHclTerraform(struct?: NetworkServicesMulticastDomainActivationTimeouts | cdktn.IResolvable): any {
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

export class NetworkServicesMulticastDomainActivationTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesMulticastDomainActivationTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesMulticastDomainActivationTimeouts | cdktn.IResolvable | undefined) {
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
export interface NetworkServicesMulticastDomainActivationTrafficSpec {
  /**
  * Aggregated egress Packet-Per-Second for all multicast groups in the domain
  * in this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#aggr_egress_pps NetworkServicesMulticastDomainActivation#aggr_egress_pps}
  */
  readonly aggrEgressPps?: string;
  /**
  * Aggregated ingress Packet-Per-Second for all multicast groups in the domain
  * in this zone. Default to (aggregated_egress_pps /
  * max_per_group_subscribers) * 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#aggr_ingress_pps NetworkServicesMulticastDomainActivation#aggr_ingress_pps}
  */
  readonly aggrIngressPps?: string;
  /**
  * Average packet size (Default to 512 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#avg_packet_size NetworkServicesMulticastDomainActivation#avg_packet_size}
  */
  readonly avgPacketSize?: number;
  /**
  * Maximum ingress Packet-Per-Second for a single multicast group in this
  * zone. Default to aggregated_ingress_pps / 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#max_per_group_ingress_pps NetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}
  */
  readonly maxPerGroupIngressPps?: string;
  /**
  * Maximum number of subscribers for a single multicast group in this zone.
  * Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#max_per_group_subscribers NetworkServicesMulticastDomainActivation#max_per_group_subscribers}
  */
  readonly maxPerGroupSubscribers?: string;
}

export function networkServicesMulticastDomainActivationTrafficSpecToTerraform(struct?: NetworkServicesMulticastDomainActivationTrafficSpecOutputReference | NetworkServicesMulticastDomainActivationTrafficSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggr_egress_pps: cdktn.stringToTerraform(struct!.aggrEgressPps),
    aggr_ingress_pps: cdktn.stringToTerraform(struct!.aggrIngressPps),
    avg_packet_size: cdktn.numberToTerraform(struct!.avgPacketSize),
    max_per_group_ingress_pps: cdktn.stringToTerraform(struct!.maxPerGroupIngressPps),
    max_per_group_subscribers: cdktn.stringToTerraform(struct!.maxPerGroupSubscribers),
  }
}


export function networkServicesMulticastDomainActivationTrafficSpecToHclTerraform(struct?: NetworkServicesMulticastDomainActivationTrafficSpecOutputReference | NetworkServicesMulticastDomainActivationTrafficSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggr_egress_pps: {
      value: cdktn.stringToHclTerraform(struct!.aggrEgressPps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggr_ingress_pps: {
      value: cdktn.stringToHclTerraform(struct!.aggrIngressPps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avg_packet_size: {
      value: cdktn.numberToHclTerraform(struct!.avgPacketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_per_group_ingress_pps: {
      value: cdktn.stringToHclTerraform(struct!.maxPerGroupIngressPps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_per_group_subscribers: {
      value: cdktn.stringToHclTerraform(struct!.maxPerGroupSubscribers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesMulticastDomainActivationTrafficSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesMulticastDomainActivationTrafficSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggrEgressPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggrEgressPps = this._aggrEgressPps;
    }
    if (this._aggrIngressPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggrIngressPps = this._aggrIngressPps;
    }
    if (this._avgPacketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.avgPacketSize = this._avgPacketSize;
    }
    if (this._maxPerGroupIngressPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPerGroupIngressPps = this._maxPerGroupIngressPps;
    }
    if (this._maxPerGroupSubscribers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPerGroupSubscribers = this._maxPerGroupSubscribers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesMulticastDomainActivationTrafficSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggrEgressPps = undefined;
      this._aggrIngressPps = undefined;
      this._avgPacketSize = undefined;
      this._maxPerGroupIngressPps = undefined;
      this._maxPerGroupSubscribers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggrEgressPps = value.aggrEgressPps;
      this._aggrIngressPps = value.aggrIngressPps;
      this._avgPacketSize = value.avgPacketSize;
      this._maxPerGroupIngressPps = value.maxPerGroupIngressPps;
      this._maxPerGroupSubscribers = value.maxPerGroupSubscribers;
    }
  }

  // aggr_egress_pps - computed: true, optional: true, required: false
  private _aggrEgressPps?: string; 
  public get aggrEgressPps() {
    return this.getStringAttribute('aggr_egress_pps');
  }
  public set aggrEgressPps(value: string) {
    this._aggrEgressPps = value;
  }
  public resetAggrEgressPps() {
    this._aggrEgressPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggrEgressPpsInput() {
    return this._aggrEgressPps;
  }

  // aggr_ingress_pps - computed: true, optional: true, required: false
  private _aggrIngressPps?: string; 
  public get aggrIngressPps() {
    return this.getStringAttribute('aggr_ingress_pps');
  }
  public set aggrIngressPps(value: string) {
    this._aggrIngressPps = value;
  }
  public resetAggrIngressPps() {
    this._aggrIngressPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggrIngressPpsInput() {
    return this._aggrIngressPps;
  }

  // avg_packet_size - computed: true, optional: true, required: false
  private _avgPacketSize?: number; 
  public get avgPacketSize() {
    return this.getNumberAttribute('avg_packet_size');
  }
  public set avgPacketSize(value: number) {
    this._avgPacketSize = value;
  }
  public resetAvgPacketSize() {
    this._avgPacketSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avgPacketSizeInput() {
    return this._avgPacketSize;
  }

  // max_per_group_ingress_pps - computed: true, optional: true, required: false
  private _maxPerGroupIngressPps?: string; 
  public get maxPerGroupIngressPps() {
    return this.getStringAttribute('max_per_group_ingress_pps');
  }
  public set maxPerGroupIngressPps(value: string) {
    this._maxPerGroupIngressPps = value;
  }
  public resetMaxPerGroupIngressPps() {
    this._maxPerGroupIngressPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPerGroupIngressPpsInput() {
    return this._maxPerGroupIngressPps;
  }

  // max_per_group_subscribers - computed: true, optional: true, required: false
  private _maxPerGroupSubscribers?: string; 
  public get maxPerGroupSubscribers() {
    return this.getStringAttribute('max_per_group_subscribers');
  }
  public set maxPerGroupSubscribers(value: string) {
    this._maxPerGroupSubscribers = value;
  }
  public resetMaxPerGroupSubscribers() {
    this._maxPerGroupSubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPerGroupSubscribersInput() {
    return this._maxPerGroupSubscribers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation}
*/
export class NetworkServicesMulticastDomainActivation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_multicast_domain_activation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesMulticastDomainActivation to import
  * @param importFromId The id of the existing NetworkServicesMulticastDomainActivation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesMulticastDomainActivation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_multicast_domain_activation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/network_services_multicast_domain_activation google_network_services_multicast_domain_activation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesMulticastDomainActivationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesMulticastDomainActivationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_multicast_domain_activation',
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
    this._description = config.description;
    this._disablePlacementPolicy = config.disablePlacementPolicy;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._multicastDomain = config.multicastDomain;
    this._multicastDomainActivationId = config.multicastDomainActivationId;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._trafficSpec.internalValue = config.trafficSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_network - computed: true, optional: false, required: false
  public get adminNetwork() {
    return this.getStringAttribute('admin_network');
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

  // disable_placement_policy - computed: true, optional: true, required: false
  private _disablePlacementPolicy?: boolean | cdktn.IResolvable; 
  public get disablePlacementPolicy() {
    return this.getBooleanAttribute('disable_placement_policy');
  }
  public set disablePlacementPolicy(value: boolean | cdktn.IResolvable) {
    this._disablePlacementPolicy = value;
  }
  public resetDisablePlacementPolicy() {
    this._disablePlacementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePlacementPolicyInput() {
    return this._disablePlacementPolicy;
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

  // multicast_domain_activation_id - computed: false, optional: false, required: true
  private _multicastDomainActivationId?: string; 
  public get multicastDomainActivationId() {
    return this.getStringAttribute('multicast_domain_activation_id');
  }
  public set multicastDomainActivationId(value: string) {
    this._multicastDomainActivationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastDomainActivationIdInput() {
    return this._multicastDomainActivationId;
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
  private _state = new NetworkServicesMulticastDomainActivationStateList(this, "state", false);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesMulticastDomainActivationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesMulticastDomainActivationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_spec - computed: false, optional: true, required: false
  private _trafficSpec = new NetworkServicesMulticastDomainActivationTrafficSpecOutputReference(this, "traffic_spec");
  public get trafficSpec() {
    return this._trafficSpec;
  }
  public putTrafficSpec(value: NetworkServicesMulticastDomainActivationTrafficSpec) {
    this._trafficSpec.internalValue = value;
  }
  public resetTrafficSpec() {
    this._trafficSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSpecInput() {
    return this._trafficSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      disable_placement_policy: cdktn.booleanToTerraform(this._disablePlacementPolicy),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      multicast_domain: cdktn.stringToTerraform(this._multicastDomain),
      multicast_domain_activation_id: cdktn.stringToTerraform(this._multicastDomainActivationId),
      project: cdktn.stringToTerraform(this._project),
      timeouts: networkServicesMulticastDomainActivationTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_spec: networkServicesMulticastDomainActivationTrafficSpecToTerraform(this._trafficSpec.internalValue),
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
      disable_placement_policy: {
        value: cdktn.booleanToHclTerraform(this._disablePlacementPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      multicast_domain_activation_id: {
        value: cdktn.stringToHclTerraform(this._multicastDomainActivationId),
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
      timeouts: {
        value: networkServicesMulticastDomainActivationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesMulticastDomainActivationTimeouts",
      },
      traffic_spec: {
        value: networkServicesMulticastDomainActivationTrafficSpecToHclTerraform(this._trafficSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesMulticastDomainActivationTrafficSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
