/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeFirewallConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#deletion_policy ComputeFirewall#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource. Provide this property when
  * you create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#description ComputeFirewall#description}
  */
  readonly description?: string;
  /**
  * If destination ranges are specified, the firewall will apply only to
  * traffic that has destination IP address in these ranges. These ranges
  * must be expressed in CIDR format. IPv4 or IPv6 ranges are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#destination_ranges ComputeFirewall#destination_ranges}
  */
  readonly destinationRanges?: string[];
  /**
  * Direction of traffic to which this firewall applies; default is
  * INGRESS. Note: For INGRESS traffic, one of 'source_ranges',
  * 'source_tags' or 'source_service_accounts' is required. Possible values: ["INGRESS", "EGRESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#direction ComputeFirewall#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether the firewall rule is disabled, i.e not applied to the
  * network it is associated with. When set to true, the firewall rule is
  * not enforced and the network behaves as if it did not exist. If this
  * is unspecified, the firewall rule will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#disabled ComputeFirewall#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * This field denotes whether to enable logging for a particular firewall rule. If logging is enabled, logs will be exported to Stackdriver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#enable_logging ComputeFirewall#enable_logging}
  */
  readonly enableLogging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#id ComputeFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#name ComputeFirewall#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the network to attach this firewall to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#network ComputeFirewall#network}
  */
  readonly network: string;
  /**
  * Priority for this rule. This is an integer between 0 and 65535, both
  * inclusive. When not specified, the value assumed is 1000. Relative
  * priorities determine precedence of conflicting rules. Lower value of
  * priority implies higher precedence (eg, a rule with priority 0 has
  * higher precedence than a rule with priority 1). DENY rules take
  * precedence over ALLOW rules having equal priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#priority ComputeFirewall#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#project ComputeFirewall#project}
  */
  readonly project?: string;
  /**
  * If source ranges are specified, the firewall will apply only to
  * traffic that has source IP address in these ranges. These ranges must
  * be expressed in CIDR format. One or both of sourceRanges and
  * sourceTags may be set. If both properties are set, the firewall will
  * apply to traffic that has source IP address within sourceRanges OR the
  * source IP that belongs to a tag listed in the sourceTags property. The
  * connection does not need to match both properties for the firewall to
  * apply. IPv4 or IPv6 ranges are supported. For INGRESS traffic, one of
  * 'source_ranges', 'source_tags' or 'source_service_accounts' is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#source_ranges ComputeFirewall#source_ranges}
  */
  readonly sourceRanges?: string[];
  /**
  * If source service accounts are specified, the firewall will apply only
  * to traffic originating from an instance with a service account in this
  * list. Source service accounts cannot be used to control traffic to an
  * instance's external IP address because service accounts are associated
  * with an instance, not an IP address. sourceRanges can be set at the
  * same time as sourceServiceAccounts. If both are set, the firewall will
  * apply to traffic that has source IP address within sourceRanges OR the
  * source IP belongs to an instance with service account listed in
  * sourceServiceAccount. The connection does not need to match both
  * properties for the firewall to apply. sourceServiceAccounts cannot be
  * used at the same time as sourceTags or targetTags. For INGRESS traffic,
  * one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#source_service_accounts ComputeFirewall#source_service_accounts}
  */
  readonly sourceServiceAccounts?: string[];
  /**
  * If source tags are specified, the firewall will apply only to traffic
  * with source IP that belongs to a tag listed in source tags. Source
  * tags cannot be used to control traffic to an instance's external IP
  * address. Because tags are associated with an instance, not an IP
  * address. One or both of sourceRanges and sourceTags may be set. If
  * both properties are set, the firewall will apply to traffic that has
  * source IP address within sourceRanges OR the source IP that belongs to
  * a tag listed in the sourceTags property. The connection does not need
  * to match both properties for the firewall to apply. For INGRESS traffic,
  * one of 'source_ranges', 'source_tags' or 'source_service_accounts' is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#source_tags ComputeFirewall#source_tags}
  */
  readonly sourceTags?: string[];
  /**
  * A list of service accounts indicating sets of instances located in the
  * network that may make network connections as specified in allowed[].
  * targetServiceAccounts cannot be used at the same time as targetTags or
  * sourceTags. If neither targetServiceAccounts nor targetTags are
  * specified, the firewall rule applies to all instances on the specified
  * network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#target_service_accounts ComputeFirewall#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * A list of instance tags indicating sets of instances located in the
  * network that may make network connections as specified in allowed[].
  * If no targetTags are specified, the firewall rule applies to all
  * instances on the specified network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#target_tags ComputeFirewall#target_tags}
  */
  readonly targetTags?: string[];
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#allow ComputeFirewall#allow}
  */
  readonly allow?: ComputeFirewallAllow[] | cdktn.IResolvable;
  /**
  * deny block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#deny ComputeFirewall#deny}
  */
  readonly deny?: ComputeFirewallDeny[] | cdktn.IResolvable;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#log_config ComputeFirewall#log_config}
  */
  readonly logConfig?: ComputeFirewallLogConfig;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#params ComputeFirewall#params}
  */
  readonly params?: ComputeFirewallParams;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#timeouts ComputeFirewall#timeouts}
  */
  readonly timeouts?: ComputeFirewallTimeouts;
}
export interface ComputeFirewallAllow {
  /**
  * An optional list of ports to which this rule applies. This field
  * is only applicable for UDP or TCP protocol. Each entry must be
  * either an integer or a range. If not specified, this rule
  * applies to connections through any port.
  * 
  * Example inputs include: [22], [80, 443], and
  * ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#ports ComputeFirewall#ports}
  */
  readonly ports?: string[];
  /**
  * The IP protocol to which this rule applies. The protocol type is
  * required when creating a firewall rule. This value can either be
  * one of the following well known protocol strings (tcp, udp,
  * icmp, esp, ah, sctp, ipip, all), or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}
  */
  readonly protocol: string;
}

export function computeFirewallAllowToTerraform(struct?: ComputeFirewallAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ports),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function computeFirewallAllowToHclTerraform(struct?: ComputeFirewallAllow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallAllowOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeFirewallAllow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallAllow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports = value.ports;
      this._protocol = value.protocol;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ComputeFirewallAllowList extends cdktn.ComplexList {
  public internalValue? : ComputeFirewallAllow[] | cdktn.IResolvable

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
  public get(index: number): ComputeFirewallAllowOutputReference {
    return new ComputeFirewallAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallDeny {
  /**
  * An optional list of ports to which this rule applies. This field
  * is only applicable for UDP or TCP protocol. Each entry must be
  * either an integer or a range. If not specified, this rule
  * applies to connections through any port.
  * 
  * Example inputs include: [22], [80, 443], and
  * ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#ports ComputeFirewall#ports}
  */
  readonly ports?: string[];
  /**
  * The IP protocol to which this rule applies. The protocol type is
  * required when creating a firewall rule. This value can either be
  * one of the following well known protocol strings (tcp, udp,
  * icmp, esp, ah, sctp, ipip, all), or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#protocol ComputeFirewall#protocol}
  */
  readonly protocol: string;
}

export function computeFirewallDenyToTerraform(struct?: ComputeFirewallDeny | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ports),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function computeFirewallDenyToHclTerraform(struct?: ComputeFirewallDeny | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallDenyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeFirewallDeny | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallDeny | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports = value.ports;
      this._protocol = value.protocol;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ComputeFirewallDenyList extends cdktn.ComplexList {
  public internalValue? : ComputeFirewallDeny[] | cdktn.IResolvable

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
  public get(index: number): ComputeFirewallDenyOutputReference {
    return new ComputeFirewallDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeFirewallLogConfig {
  /**
  * This field denotes whether to include or exclude metadata for firewall logs. Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#metadata ComputeFirewall#metadata}
  */
  readonly metadata: string;
}

export function computeFirewallLogConfigToTerraform(struct?: ComputeFirewallLogConfigOutputReference | ComputeFirewallLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metadata: cdktn.stringToTerraform(struct!.metadata),
  }
}


export function computeFirewallLogConfigToHclTerraform(struct?: ComputeFirewallLogConfigOutputReference | ComputeFirewallLogConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metadata: {
      value: cdktn.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallLogConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeFirewallLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata = value.metadata;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }
}
export interface ComputeFirewallParams {
  /**
  * Resource manager tags to be bound to the firewall. Tag keys and values have the
  * same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
  * and values are in the format tagValues/456. The field is ignored when empty.
  * The field is immutable and causes resource replacement when mutated. This field is only
  * set at create time and modifying this field after creation will trigger recreation.
  * To apply tags to an existing resource, see the google_tags_tag_binding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#resource_manager_tags ComputeFirewall#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
}

export function computeFirewallParamsToTerraform(struct?: ComputeFirewallParamsOutputReference | ComputeFirewallParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_manager_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceManagerTags),
  }
}


export function computeFirewallParamsToHclTerraform(struct?: ComputeFirewallParamsOutputReference | ComputeFirewallParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeFirewallParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeFirewallParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeFirewallParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }
}
export interface ComputeFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#create ComputeFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#delete ComputeFirewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#update ComputeFirewall#update}
  */
  readonly update?: string;
}

export function computeFirewallTimeoutsToTerraform(struct?: ComputeFirewallTimeouts | cdktn.IResolvable): any {
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


export function computeFirewallTimeoutsToHclTerraform(struct?: ComputeFirewallTimeouts | cdktn.IResolvable): any {
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

export class ComputeFirewallTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeFirewallTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeFirewallTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall google_compute_firewall}
*/
export class ComputeFirewall extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeFirewall resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeFirewall to import
  * @param importFromId The id of the existing ComputeFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_firewall google_compute_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_firewall',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._destinationRanges = config.destinationRanges;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._enableLogging = config.enableLogging;
    this._id = config.id;
    this._name = config.name;
    this._network = config.network;
    this._priority = config.priority;
    this._project = config.project;
    this._sourceRanges = config.sourceRanges;
    this._sourceServiceAccounts = config.sourceServiceAccounts;
    this._sourceTags = config.sourceTags;
    this._targetServiceAccounts = config.targetServiceAccounts;
    this._targetTags = config.targetTags;
    this._allow.internalValue = config.allow;
    this._deny.internalValue = config.deny;
    this._logConfig.internalValue = config.logConfig;
    this._params.internalValue = config.params;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // destination_ranges - computed: true, optional: true, required: false
  private _destinationRanges?: string[]; 
  public get destinationRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_ranges'));
  }
  public set destinationRanges(value: string[]) {
    this._destinationRanges = value;
  }
  public resetDestinationRanges() {
    this._destinationRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRangesInput() {
    return this._destinationRanges;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enable_logging - computed: true, optional: true, required: false
  private _enableLogging?: boolean | cdktn.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktn.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // source_ranges - computed: false, optional: true, required: false
  private _sourceRanges?: string[]; 
  public get sourceRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('source_ranges'));
  }
  public set sourceRanges(value: string[]) {
    this._sourceRanges = value;
  }
  public resetSourceRanges() {
    this._sourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRangesInput() {
    return this._sourceRanges;
  }

  // source_service_accounts - computed: false, optional: true, required: false
  private _sourceServiceAccounts?: string[]; 
  public get sourceServiceAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('source_service_accounts'));
  }
  public set sourceServiceAccounts(value: string[]) {
    this._sourceServiceAccounts = value;
  }
  public resetSourceServiceAccounts() {
    this._sourceServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceAccountsInput() {
    return this._sourceServiceAccounts;
  }

  // source_tags - computed: false, optional: true, required: false
  private _sourceTags?: string[]; 
  public get sourceTags() {
    return cdktn.Fn.tolist(this.getListAttribute('source_tags'));
  }
  public set sourceTags(value: string[]) {
    this._sourceTags = value;
  }
  public resetSourceTags() {
    this._sourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagsInput() {
    return this._sourceTags;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[]; 
  public get targetServiceAccounts() {
    return cdktn.Fn.tolist(this.getListAttribute('target_service_accounts'));
  }
  public set targetServiceAccounts(value: string[]) {
    this._targetServiceAccounts = value;
  }
  public resetTargetServiceAccounts() {
    this._targetServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountsInput() {
    return this._targetServiceAccounts;
  }

  // target_tags - computed: false, optional: true, required: false
  private _targetTags?: string[]; 
  public get targetTags() {
    return cdktn.Fn.tolist(this.getListAttribute('target_tags'));
  }
  public set targetTags(value: string[]) {
    this._targetTags = value;
  }
  public resetTargetTags() {
    this._targetTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagsInput() {
    return this._targetTags;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ComputeFirewallAllowList(this, "allow", true);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ComputeFirewallAllow[] | cdktn.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new ComputeFirewallDenyList(this, "deny", true);
  public get deny() {
    return this._deny;
  }
  public putDeny(value: ComputeFirewallDeny[] | cdktn.IResolvable) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeFirewallLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeFirewallLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new ComputeFirewallParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: ComputeFirewallParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeFirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeFirewallTimeouts) {
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
      destination_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._destinationRanges),
      direction: cdktn.stringToTerraform(this._direction),
      disabled: cdktn.booleanToTerraform(this._disabled),
      enable_logging: cdktn.booleanToTerraform(this._enableLogging),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      network: cdktn.stringToTerraform(this._network),
      priority: cdktn.numberToTerraform(this._priority),
      project: cdktn.stringToTerraform(this._project),
      source_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sourceRanges),
      source_service_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sourceServiceAccounts),
      source_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sourceTags),
      target_service_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetServiceAccounts),
      target_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._targetTags),
      allow: cdktn.listMapper(computeFirewallAllowToTerraform, true)(this._allow.internalValue),
      deny: cdktn.listMapper(computeFirewallDenyToTerraform, true)(this._deny.internalValue),
      log_config: computeFirewallLogConfigToTerraform(this._logConfig.internalValue),
      params: computeFirewallParamsToTerraform(this._params.internalValue),
      timeouts: computeFirewallTimeoutsToTerraform(this._timeouts.internalValue),
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
      destination_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._destinationRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      direction: {
        value: cdktn.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_logging: {
        value: cdktn.booleanToHclTerraform(this._enableLogging),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sourceRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_service_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sourceServiceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sourceTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_service_accounts: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetServiceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._targetTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow: {
        value: cdktn.listMapperHcl(computeFirewallAllowToHclTerraform, true)(this._allow.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeFirewallAllowList",
      },
      deny: {
        value: cdktn.listMapperHcl(computeFirewallDenyToHclTerraform, true)(this._deny.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeFirewallDenyList",
      },
      log_config: {
        value: computeFirewallLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeFirewallLogConfigList",
      },
      params: {
        value: computeFirewallParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeFirewallParamsList",
      },
      timeouts: {
        value: computeFirewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeFirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
