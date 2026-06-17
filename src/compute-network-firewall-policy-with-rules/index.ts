/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeNetworkFirewallPolicyWithRulesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#deletion_policy ComputeNetworkFirewallPolicyWithRules#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#description ComputeNetworkFirewallPolicyWithRules#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#id ComputeNetworkFirewallPolicyWithRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-provided name of the Network firewall policy.
  * The name should be unique in the project in which the firewall policy is created.
  * The name must be 1-63 characters long, and comply with RFC1035. Specifically,
  * the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?
  * which means the first character must be a lowercase letter, and all following characters must be a dash,
  * lowercase letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#name ComputeNetworkFirewallPolicyWithRules#name}
  */
  readonly name: string;
  /**
  * Policy type is used to determine which resources (networks) the policy can be associated with.
  * A policy can be associated with a network only if the network has the matching policyType in its network profile.
  * Different policy types may support some of the Firewall Rules features. Possible values: ["VPC_POLICY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#policy_type ComputeNetworkFirewallPolicyWithRules#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#project ComputeNetworkFirewallPolicyWithRules#project}
  */
  readonly project?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#rule ComputeNetworkFirewallPolicyWithRules#rule}
  */
  readonly rule: ComputeNetworkFirewallPolicyWithRulesRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#timeouts ComputeNetworkFirewallPolicyWithRules#timeouts}
  */
  readonly timeouts?: ComputeNetworkFirewallPolicyWithRulesTimeouts;
}
export interface ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config {
}

export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getListAttribute('ports');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList extends cdktn.ComplexList {

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag {
}

export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList extends cdktn.ComplexList {

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch {
}

export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeNetworkFirewallPolicyWithRulesPredefinedRulesMatchToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dest_address_groups - computed: true, optional: false, required: false
  public get destAddressGroups() {
    return this.getListAttribute('dest_address_groups');
  }

  // dest_fqdns - computed: true, optional: false, required: false
  public get destFqdns() {
    return this.getListAttribute('dest_fqdns');
  }

  // dest_ip_ranges - computed: true, optional: false, required: false
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }

  // dest_region_codes - computed: true, optional: false, required: false
  public get destRegionCodes() {
    return this.getListAttribute('dest_region_codes');
  }

  // dest_threat_intelligences - computed: true, optional: false, required: false
  public get destThreatIntelligences() {
    return this.getListAttribute('dest_threat_intelligences');
  }

  // layer4_config - computed: true, optional: false, required: false
  private _layer4Config = new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(this, "layer4_config", false);
  public get layer4Config() {
    return this._layer4Config;
  }

  // src_address_groups - computed: true, optional: false, required: false
  public get srcAddressGroups() {
    return this.getListAttribute('src_address_groups');
  }

  // src_fqdns - computed: true, optional: false, required: false
  public get srcFqdns() {
    return this.getListAttribute('src_fqdns');
  }

  // src_ip_ranges - computed: true, optional: false, required: false
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }

  // src_region_codes - computed: true, optional: false, required: false
  public get srcRegionCodes() {
    return this.getListAttribute('src_region_codes');
  }

  // src_secure_tag - computed: true, optional: false, required: false
  private _srcSecureTag = new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(this, "src_secure_tag", false);
  public get srcSecureTag() {
    return this._srcSecureTag;
  }

  // src_threat_intelligences - computed: true, optional: false, required: false
  public get srcThreatIntelligences() {
    return this.getListAttribute('src_threat_intelligences');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList extends cdktn.ComplexList {

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag {
}

export function computeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList extends cdktn.ComplexList {

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesPredefinedRules {
}

export function computeNetworkFirewallPolicyWithRulesPredefinedRulesToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function computeNetworkFirewallPolicyWithRulesPredefinedRulesToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesPredefinedRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesPredefinedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesPredefinedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // enable_logging - computed: true, optional: false, required: false
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }

  // match - computed: true, optional: false, required: false
  private _match = new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesMatchList(this, "match", false);
  public get match() {
    return this._match;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_name - computed: true, optional: false, required: false
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }

  // security_profile_group - computed: true, optional: false, required: false
  public get securityProfileGroup() {
    return this.getStringAttribute('security_profile_group');
  }

  // target_secure_tag - computed: true, optional: false, required: false
  private _targetSecureTag = new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(this, "target_secure_tag", false);
  public get targetSecureTag() {
    return this._targetSecureTag;
  }

  // target_service_accounts - computed: true, optional: false, required: false
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
  }

  // tls_inspect - computed: true, optional: false, required: false
  public get tlsInspect() {
    return this.getBooleanAttribute('tls_inspect');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList extends cdktn.ComplexList {

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config {
  /**
  * The IP protocol to which this rule applies. The protocol
  * type is required when creating a firewall rule.
  * This value can either be one of the following well
  * known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
  * or the IP protocol number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#ip_protocol ComputeNetworkFirewallPolicyWithRules#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * An optional list of ports to which this rule applies. This field
  * is only applicable for UDP or TCP protocol. Each entry must be
  * either an integer or a range. If not specified, this rule
  * applies to connections through any port.
  * Example inputs include: ["22"], ["80","443"], and
  * ["12345-12349"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#ports ComputeNetworkFirewallPolicyWithRules#ports}
  */
  readonly ports?: string[];
}

export function computeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ip_protocol: cdktn.stringToTerraform(struct!.ipProtocol),
    ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ports),
  }
}


export function computeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ip_protocol: {
      value: cdktn.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipProtocol = undefined;
      this._ports = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipProtocol = value.ipProtocol;
      this._ports = value.ports;
    }
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
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
}

export class ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList extends cdktn.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktn.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  * @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#name ComputeNetworkFirewallPolicyWithRules#name}
  */
  readonly name?: string;
}

export function computeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function computeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList extends cdktn.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktn.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesRuleMatch {
  /**
  * Address groups which should be matched against the traffic destination.
  * Maximum number of destination address groups is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#dest_address_groups ComputeNetworkFirewallPolicyWithRules#dest_address_groups}
  */
  readonly destAddressGroups?: string[];
  /**
  * Fully Qualified Domain Name (FQDN) which should be matched against
  * traffic destination. Maximum number of destination fqdn allowed is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#dest_fqdns ComputeNetworkFirewallPolicyWithRules#dest_fqdns}
  */
  readonly destFqdns?: string[];
  /**
  * Destination IP address range in CIDR format. Required for
  * EGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#dest_ip_ranges ComputeNetworkFirewallPolicyWithRules#dest_ip_ranges}
  */
  readonly destIpRanges?: string[];
  /**
  * Region codes whose IP addresses will be used to match for destination
  * of traffic. Should be specified as 2 letter country code defined as per
  * ISO 3166 alpha-2 country codes. ex."US"
  * Maximum number of destination region codes allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#dest_region_codes ComputeNetworkFirewallPolicyWithRules#dest_region_codes}
  */
  readonly destRegionCodes?: string[];
  /**
  * Names of Network Threat Intelligence lists.
  * The IPs in these lists will be matched against traffic destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#dest_threat_intelligences ComputeNetworkFirewallPolicyWithRules#dest_threat_intelligences}
  */
  readonly destThreatIntelligences?: string[];
  /**
  * Address groups which should be matched against the traffic source.
  * Maximum number of source address groups is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_address_groups ComputeNetworkFirewallPolicyWithRules#src_address_groups}
  */
  readonly srcAddressGroups?: string[];
  /**
  * Fully Qualified Domain Name (FQDN) which should be matched against
  * traffic source. Maximum number of source fqdn allowed is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_fqdns ComputeNetworkFirewallPolicyWithRules#src_fqdns}
  */
  readonly srcFqdns?: string[];
  /**
  * Source IP address range in CIDR format. Required for
  * INGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_ip_ranges ComputeNetworkFirewallPolicyWithRules#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
  /**
  * Region codes whose IP addresses will be used to match for source
  * of traffic. Should be specified as 2 letter country code defined as per
  * ISO 3166 alpha-2 country codes. ex."US"
  * Maximum number of source region codes allowed is 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_region_codes ComputeNetworkFirewallPolicyWithRules#src_region_codes}
  */
  readonly srcRegionCodes?: string[];
  /**
  * Names of Network Threat Intelligence lists.
  * The IPs in these lists will be matched against traffic source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_threat_intelligences ComputeNetworkFirewallPolicyWithRules#src_threat_intelligences}
  */
  readonly srcThreatIntelligences?: string[];
  /**
  * layer4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#layer4_config ComputeNetworkFirewallPolicyWithRules#layer4_config}
  */
  readonly layer4Config: ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktn.IResolvable;
  /**
  * src_secure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#src_secure_tag ComputeNetworkFirewallPolicyWithRules#src_secure_tag}
  */
  readonly srcSecureTag?: ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktn.IResolvable;
}

export function computeNetworkFirewallPolicyWithRulesRuleMatchToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference | ComputeNetworkFirewallPolicyWithRulesRuleMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dest_address_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destAddressGroups),
    dest_fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destFqdns),
    dest_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destIpRanges),
    dest_region_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destRegionCodes),
    dest_threat_intelligences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destThreatIntelligences),
    src_address_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcAddressGroups),
    src_fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcFqdns),
    src_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcIpRanges),
    src_region_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcRegionCodes),
    src_threat_intelligences: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcThreatIntelligences),
    layer4_config: cdktn.listMapper(computeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigToTerraform, true)(struct!.layer4Config),
    src_secure_tag: cdktn.listMapper(computeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagToTerraform, true)(struct!.srcSecureTag),
  }
}


export function computeNetworkFirewallPolicyWithRulesRuleMatchToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference | ComputeNetworkFirewallPolicyWithRulesRuleMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dest_address_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destAddressGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destFqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_region_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destRegionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dest_threat_intelligences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destThreatIntelligences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_address_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcAddressGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcFqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_region_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcRegionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_threat_intelligences: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcThreatIntelligences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    layer4_config: {
      value: cdktn.listMapperHcl(computeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigToHclTerraform, true)(struct!.layer4Config),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList",
    },
    src_secure_tag: {
      value: cdktn.listMapperHcl(computeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagToHclTerraform, true)(struct!.srcSecureTag),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destAddressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddressGroups = this._destAddressGroups;
    }
    if (this._destFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.destFqdns = this._destFqdns;
    }
    if (this._destIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpRanges = this._destIpRanges;
    }
    if (this._destRegionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRegionCodes = this._destRegionCodes;
    }
    if (this._destThreatIntelligences !== undefined) {
      hasAnyValues = true;
      internalValueResult.destThreatIntelligences = this._destThreatIntelligences;
    }
    if (this._srcAddressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddressGroups = this._srcAddressGroups;
    }
    if (this._srcFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFqdns = this._srcFqdns;
    }
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    if (this._srcRegionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRegionCodes = this._srcRegionCodes;
    }
    if (this._srcThreatIntelligences !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcThreatIntelligences = this._srcThreatIntelligences;
    }
    if (this._layer4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer4Config = this._layer4Config?.internalValue;
    }
    if (this._srcSecureTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSecureTag = this._srcSecureTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destAddressGroups = undefined;
      this._destFqdns = undefined;
      this._destIpRanges = undefined;
      this._destRegionCodes = undefined;
      this._destThreatIntelligences = undefined;
      this._srcAddressGroups = undefined;
      this._srcFqdns = undefined;
      this._srcIpRanges = undefined;
      this._srcRegionCodes = undefined;
      this._srcThreatIntelligences = undefined;
      this._layer4Config.internalValue = undefined;
      this._srcSecureTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destAddressGroups = value.destAddressGroups;
      this._destFqdns = value.destFqdns;
      this._destIpRanges = value.destIpRanges;
      this._destRegionCodes = value.destRegionCodes;
      this._destThreatIntelligences = value.destThreatIntelligences;
      this._srcAddressGroups = value.srcAddressGroups;
      this._srcFqdns = value.srcFqdns;
      this._srcIpRanges = value.srcIpRanges;
      this._srcRegionCodes = value.srcRegionCodes;
      this._srcThreatIntelligences = value.srcThreatIntelligences;
      this._layer4Config.internalValue = value.layer4Config;
      this._srcSecureTag.internalValue = value.srcSecureTag;
    }
  }

  // dest_address_groups - computed: false, optional: true, required: false
  private _destAddressGroups?: string[]; 
  public get destAddressGroups() {
    return this.getListAttribute('dest_address_groups');
  }
  public set destAddressGroups(value: string[]) {
    this._destAddressGroups = value;
  }
  public resetDestAddressGroups() {
    this._destAddressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddressGroupsInput() {
    return this._destAddressGroups;
  }

  // dest_fqdns - computed: false, optional: true, required: false
  private _destFqdns?: string[]; 
  public get destFqdns() {
    return this.getListAttribute('dest_fqdns');
  }
  public set destFqdns(value: string[]) {
    this._destFqdns = value;
  }
  public resetDestFqdns() {
    this._destFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destFqdnsInput() {
    return this._destFqdns;
  }

  // dest_ip_ranges - computed: false, optional: true, required: false
  private _destIpRanges?: string[]; 
  public get destIpRanges() {
    return this.getListAttribute('dest_ip_ranges');
  }
  public set destIpRanges(value: string[]) {
    this._destIpRanges = value;
  }
  public resetDestIpRanges() {
    this._destIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpRangesInput() {
    return this._destIpRanges;
  }

  // dest_region_codes - computed: false, optional: true, required: false
  private _destRegionCodes?: string[]; 
  public get destRegionCodes() {
    return this.getListAttribute('dest_region_codes');
  }
  public set destRegionCodes(value: string[]) {
    this._destRegionCodes = value;
  }
  public resetDestRegionCodes() {
    this._destRegionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRegionCodesInput() {
    return this._destRegionCodes;
  }

  // dest_threat_intelligences - computed: false, optional: true, required: false
  private _destThreatIntelligences?: string[]; 
  public get destThreatIntelligences() {
    return this.getListAttribute('dest_threat_intelligences');
  }
  public set destThreatIntelligences(value: string[]) {
    this._destThreatIntelligences = value;
  }
  public resetDestThreatIntelligences() {
    this._destThreatIntelligences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destThreatIntelligencesInput() {
    return this._destThreatIntelligences;
  }

  // src_address_groups - computed: false, optional: true, required: false
  private _srcAddressGroups?: string[]; 
  public get srcAddressGroups() {
    return this.getListAttribute('src_address_groups');
  }
  public set srcAddressGroups(value: string[]) {
    this._srcAddressGroups = value;
  }
  public resetSrcAddressGroups() {
    this._srcAddressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressGroupsInput() {
    return this._srcAddressGroups;
  }

  // src_fqdns - computed: false, optional: true, required: false
  private _srcFqdns?: string[]; 
  public get srcFqdns() {
    return this.getListAttribute('src_fqdns');
  }
  public set srcFqdns(value: string[]) {
    this._srcFqdns = value;
  }
  public resetSrcFqdns() {
    this._srcFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFqdnsInput() {
    return this._srcFqdns;
  }

  // src_ip_ranges - computed: false, optional: true, required: false
  private _srcIpRanges?: string[]; 
  public get srcIpRanges() {
    return this.getListAttribute('src_ip_ranges');
  }
  public set srcIpRanges(value: string[]) {
    this._srcIpRanges = value;
  }
  public resetSrcIpRanges() {
    this._srcIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpRangesInput() {
    return this._srcIpRanges;
  }

  // src_region_codes - computed: false, optional: true, required: false
  private _srcRegionCodes?: string[]; 
  public get srcRegionCodes() {
    return this.getListAttribute('src_region_codes');
  }
  public set srcRegionCodes(value: string[]) {
    this._srcRegionCodes = value;
  }
  public resetSrcRegionCodes() {
    this._srcRegionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRegionCodesInput() {
    return this._srcRegionCodes;
  }

  // src_threat_intelligences - computed: false, optional: true, required: false
  private _srcThreatIntelligences?: string[]; 
  public get srcThreatIntelligences() {
    return this.getListAttribute('src_threat_intelligences');
  }
  public set srcThreatIntelligences(value: string[]) {
    this._srcThreatIntelligences = value;
  }
  public resetSrcThreatIntelligences() {
    this._srcThreatIntelligences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcThreatIntelligencesInput() {
    return this._srcThreatIntelligences;
  }

  // layer4_config - computed: false, optional: false, required: true
  private _layer4Config = new ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList(this, "layer4_config", false);
  public get layer4Config() {
    return this._layer4Config;
  }
  public putLayer4Config(value: ComputeNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[] | cdktn.IResolvable) {
    this._layer4Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layer4ConfigInput() {
    return this._layer4Config.internalValue;
  }

  // src_secure_tag - computed: false, optional: true, required: false
  private _srcSecureTag = new ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList(this, "src_secure_tag", false);
  public get srcSecureTag() {
    return this._srcSecureTag;
  }
  public putSrcSecureTag(value: ComputeNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[] | cdktn.IResolvable) {
    this._srcSecureTag.internalValue = value;
  }
  public resetSrcSecureTag() {
    this._srcSecureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSecureTagInput() {
    return this._srcSecureTag.internalValue;
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag {
  /**
  * Name of the secure tag, created with TagManager's TagValue API.
  * @pattern tagValues/[0-9]+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#name ComputeNetworkFirewallPolicyWithRules#name}
  */
  readonly name?: string;
}

export function computeNetworkFirewallPolicyWithRulesRuleTargetSecureTagToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function computeNetworkFirewallPolicyWithRulesRuleTargetSecureTagToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList extends cdktn.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktn.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesRule {
  /**
  * The Action to perform when the client connection triggers the rule. Can currently be either
  * "allow", "deny", "apply_security_profile_group" or "goto_next".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#action ComputeNetworkFirewallPolicyWithRules#action}
  */
  readonly action: string;
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#description ComputeNetworkFirewallPolicyWithRules#description}
  */
  readonly description?: string;
  /**
  * The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#direction ComputeNetworkFirewallPolicyWithRules#direction}
  */
  readonly direction?: string;
  /**
  * Denotes whether the firewall policy rule is disabled. When set to true,
  * the firewall policy rule is not enforced and traffic behaves as if it did
  * not exist. If this is unspecified, the firewall policy rule will be
  * enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#disabled ComputeNetworkFirewallPolicyWithRules#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Denotes whether to enable logging for a particular rule.
  * If logging is enabled, logs will be exported to the
  * configured export destination in Stackdriver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#enable_logging ComputeNetworkFirewallPolicyWithRules#enable_logging}
  */
  readonly enableLogging?: boolean | cdktn.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a value
  * between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
  * highest priority and 2147483647 is the lowest priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#priority ComputeNetworkFirewallPolicyWithRules#priority}
  */
  readonly priority: number;
  /**
  * An optional name for the rule. This field is not a unique identifier
  * and can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#rule_name ComputeNetworkFirewallPolicyWithRules#rule_name}
  */
  readonly ruleName?: string;
  /**
  * A fully-qualified URL of a SecurityProfile resource instance.
  * Example:
  * https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group
  * Must be specified if action is 'apply_security_profile_group'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#security_profile_group ComputeNetworkFirewallPolicyWithRules#security_profile_group}
  */
  readonly securityProfileGroup?: string;
  /**
  * A list of service accounts indicating the sets of
  * instances that are applied with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#target_service_accounts ComputeNetworkFirewallPolicyWithRules#target_service_accounts}
  */
  readonly targetServiceAccounts?: string[];
  /**
  * Boolean flag indicating if the traffic should be TLS decrypted.
  * It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#tls_inspect ComputeNetworkFirewallPolicyWithRules#tls_inspect}
  */
  readonly tlsInspect?: boolean | cdktn.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#match ComputeNetworkFirewallPolicyWithRules#match}
  */
  readonly match: ComputeNetworkFirewallPolicyWithRulesRuleMatch;
  /**
  * target_secure_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#target_secure_tag ComputeNetworkFirewallPolicyWithRules#target_secure_tag}
  */
  readonly targetSecureTag?: ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktn.IResolvable;
}

export function computeNetworkFirewallPolicyWithRulesRuleToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    description: cdktn.stringToTerraform(struct!.description),
    direction: cdktn.stringToTerraform(struct!.direction),
    disabled: cdktn.booleanToTerraform(struct!.disabled),
    enable_logging: cdktn.booleanToTerraform(struct!.enableLogging),
    priority: cdktn.numberToTerraform(struct!.priority),
    rule_name: cdktn.stringToTerraform(struct!.ruleName),
    security_profile_group: cdktn.stringToTerraform(struct!.securityProfileGroup),
    target_service_accounts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetServiceAccounts),
    tls_inspect: cdktn.booleanToTerraform(struct!.tlsInspect),
    match: computeNetworkFirewallPolicyWithRulesRuleMatchToTerraform(struct!.match),
    target_secure_tag: cdktn.listMapper(computeNetworkFirewallPolicyWithRulesRuleTargetSecureTagToTerraform, true)(struct!.targetSecureTag),
  }
}


export function computeNetworkFirewallPolicyWithRulesRuleToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktn.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logging: {
      value: cdktn.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktn.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktn.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profile_group: {
      value: cdktn.stringToHclTerraform(struct!.securityProfileGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_service_accounts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetServiceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_inspect: {
      value: cdktn.booleanToHclTerraform(struct!.tlsInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: computeNetworkFirewallPolicyWithRulesRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyWithRulesRuleMatchList",
    },
    target_secure_tag: {
      value: cdktn.listMapperHcl(computeNetworkFirewallPolicyWithRulesRuleTargetSecureTagToHclTerraform, true)(struct!.targetSecureTag),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkFirewallPolicyWithRulesRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._securityProfileGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroup = this._securityProfileGroup;
    }
    if (this._targetServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetServiceAccounts = this._targetServiceAccounts;
    }
    if (this._tlsInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInspect = this._tlsInspect;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._targetSecureTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSecureTag = this._targetSecureTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._direction = undefined;
      this._disabled = undefined;
      this._enableLogging = undefined;
      this._priority = undefined;
      this._ruleName = undefined;
      this._securityProfileGroup = undefined;
      this._targetServiceAccounts = undefined;
      this._tlsInspect = undefined;
      this._match.internalValue = undefined;
      this._targetSecureTag.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._direction = value.direction;
      this._disabled = value.disabled;
      this._enableLogging = value.enableLogging;
      this._priority = value.priority;
      this._ruleName = value.ruleName;
      this._securityProfileGroup = value.securityProfileGroup;
      this._targetServiceAccounts = value.targetServiceAccounts;
      this._tlsInspect = value.tlsInspect;
      this._match.internalValue = value.match;
      this._targetSecureTag.internalValue = value.targetSecureTag;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // direction - computed: false, optional: true, required: false
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

  // enable_logging - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // security_profile_group - computed: false, optional: true, required: false
  private _securityProfileGroup?: string; 
  public get securityProfileGroup() {
    return this.getStringAttribute('security_profile_group');
  }
  public set securityProfileGroup(value: string) {
    this._securityProfileGroup = value;
  }
  public resetSecurityProfileGroup() {
    this._securityProfileGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupInput() {
    return this._securityProfileGroup;
  }

  // target_service_accounts - computed: false, optional: true, required: false
  private _targetServiceAccounts?: string[]; 
  public get targetServiceAccounts() {
    return this.getListAttribute('target_service_accounts');
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

  // tls_inspect - computed: false, optional: true, required: false
  private _tlsInspect?: boolean | cdktn.IResolvable; 
  public get tlsInspect() {
    return this.getBooleanAttribute('tls_inspect');
  }
  public set tlsInspect(value: boolean | cdktn.IResolvable) {
    this._tlsInspect = value;
  }
  public resetTlsInspect() {
    this._tlsInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInspectInput() {
    return this._tlsInspect;
  }

  // match - computed: false, optional: false, required: true
  private _match = new ComputeNetworkFirewallPolicyWithRulesRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeNetworkFirewallPolicyWithRulesRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // target_secure_tag - computed: false, optional: true, required: false
  private _targetSecureTag = new ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTagList(this, "target_secure_tag", false);
  public get targetSecureTag() {
    return this._targetSecureTag;
  }
  public putTargetSecureTag(value: ComputeNetworkFirewallPolicyWithRulesRuleTargetSecureTag[] | cdktn.IResolvable) {
    this._targetSecureTag.internalValue = value;
  }
  public resetTargetSecureTag() {
    this._targetSecureTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecureTagInput() {
    return this._targetSecureTag.internalValue;
  }
}

export class ComputeNetworkFirewallPolicyWithRulesRuleList extends cdktn.ComplexList {
  public internalValue? : ComputeNetworkFirewallPolicyWithRulesRule[] | cdktn.IResolvable

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
  public get(index: number): ComputeNetworkFirewallPolicyWithRulesRuleOutputReference {
    return new ComputeNetworkFirewallPolicyWithRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeNetworkFirewallPolicyWithRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#create ComputeNetworkFirewallPolicyWithRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#delete ComputeNetworkFirewallPolicyWithRules#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#update ComputeNetworkFirewallPolicyWithRules#update}
  */
  readonly update?: string;
}

export function computeNetworkFirewallPolicyWithRulesTimeoutsToTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesTimeouts | cdktn.IResolvable): any {
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


export function computeNetworkFirewallPolicyWithRulesTimeoutsToHclTerraform(struct?: ComputeNetworkFirewallPolicyWithRulesTimeouts | cdktn.IResolvable): any {
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

export class ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNetworkFirewallPolicyWithRulesTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeNetworkFirewallPolicyWithRulesTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules google_compute_network_firewall_policy_with_rules}
*/
export class ComputeNetworkFirewallPolicyWithRules extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network_firewall_policy_with_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeNetworkFirewallPolicyWithRules resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNetworkFirewallPolicyWithRules to import
  * @param importFromId The id of the existing ComputeNetworkFirewallPolicyWithRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNetworkFirewallPolicyWithRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network_firewall_policy_with_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_network_firewall_policy_with_rules google_compute_network_firewall_policy_with_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkFirewallPolicyWithRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkFirewallPolicyWithRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_firewall_policy_with_rules',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._id = config.id;
    this._name = config.name;
    this._policyType = config.policyType;
    this._project = config.project;
    this._rule.internalValue = config.rule;
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

  // network_firewall_policy_id - computed: true, optional: false, required: false
  public get networkFirewallPolicyId() {
    return this.getStringAttribute('network_firewall_policy_id');
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // predefined_rules - computed: true, optional: false, required: false
  private _predefinedRules = new ComputeNetworkFirewallPolicyWithRulesPredefinedRulesList(this, "predefined_rules", false);
  public get predefinedRules() {
    return this._predefinedRules;
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

  // rule_tuple_count - computed: true, optional: false, required: false
  public get ruleTupleCount() {
    return this.getNumberAttribute('rule_tuple_count');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ComputeNetworkFirewallPolicyWithRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ComputeNetworkFirewallPolicyWithRulesRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNetworkFirewallPolicyWithRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNetworkFirewallPolicyWithRulesTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      policy_type: cdktn.stringToTerraform(this._policyType),
      project: cdktn.stringToTerraform(this._project),
      rule: cdktn.listMapper(computeNetworkFirewallPolicyWithRulesRuleToTerraform, true)(this._rule.internalValue),
      timeouts: computeNetworkFirewallPolicyWithRulesTimeoutsToTerraform(this._timeouts.internalValue),
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
      policy_type: {
        value: cdktn.stringToHclTerraform(this._policyType),
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
      rule: {
        value: cdktn.listMapperHcl(computeNetworkFirewallPolicyWithRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeNetworkFirewallPolicyWithRulesRuleList",
      },
      timeouts: {
        value: computeNetworkFirewallPolicyWithRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNetworkFirewallPolicyWithRulesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
