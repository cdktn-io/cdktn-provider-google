/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputeOrganizationSecurityPolicyRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Action to perform when the client connection triggers the rule. Valid actions are:
  * "allow": allow access to target.
  * "deny": deny access to target.
  * "goto_next": forward the request to the next hierarchical policy for evaluation.
  * "redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#action ComputeOrganizationSecurityPolicyRule#action}
  */
  readonly action: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#deletion_policy ComputeOrganizationSecurityPolicyRule#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#id ComputeOrganizationSecurityPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the OrganizationSecurityPolicy this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#policy_id ComputeOrganizationSecurityPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * If set to true, the specified action is not enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#preview ComputeOrganizationSecurityPolicyRule#preview}
  */
  readonly preview?: boolean | cdktn.IResolvable;
  /**
  * An integer indicating the priority of a rule in the list. The priority must be a value
  * between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
  * highest priority and 2147483647 is the lowest prority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#priority ComputeOrganizationSecurityPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * header_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#header_action ComputeOrganizationSecurityPolicyRule#header_action}
  */
  readonly headerAction?: ComputeOrganizationSecurityPolicyRuleHeaderAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#match ComputeOrganizationSecurityPolicyRule#match}
  */
  readonly match: ComputeOrganizationSecurityPolicyRuleMatch;
  /**
  * preconfigured_waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#preconfigured_waf_config ComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}
  */
  readonly preconfiguredWafConfig?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;
  /**
  * redirect_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#redirect_options ComputeOrganizationSecurityPolicyRule#redirect_options}
  */
  readonly redirectOptions?: ComputeOrganizationSecurityPolicyRuleRedirectOptions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#timeouts ComputeOrganizationSecurityPolicyRule#timeouts}
  */
  readonly timeouts?: ComputeOrganizationSecurityPolicyRuleTimeouts;
}
export interface ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds {
  /**
  * The name of the header to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#header_name ComputeOrganizationSecurityPolicyRule#header_name}
  */
  readonly headerName?: string;
  /**
  * The value to set the named header to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#header_value ComputeOrganizationSecurityPolicyRule#header_value}
  */
  readonly headerValue?: string;
}

export function computeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
  }
}


export function computeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference {
    return new ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRuleHeaderAction {
  /**
  * request_headers_to_adds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#request_headers_to_adds ComputeOrganizationSecurityPolicyRule#request_headers_to_adds}
  */
  readonly requestHeadersToAdds?: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktn.IResolvable;
}

export function computeOrganizationSecurityPolicyRuleHeaderActionToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference | ComputeOrganizationSecurityPolicyRuleHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    request_headers_to_adds: cdktn.listMapper(computeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToTerraform, true)(struct!.requestHeadersToAdds),
  }
}


export function computeOrganizationSecurityPolicyRuleHeaderActionToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference | ComputeOrganizationSecurityPolicyRuleHeaderAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    request_headers_to_adds: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsToHclTerraform, true)(struct!.requestHeadersToAdds),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleHeaderAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToAdds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdds = this._requestHeadersToAdds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleHeaderAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToAdds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToAdds.internalValue = value.requestHeadersToAdds;
    }
  }

  // request_headers_to_adds - computed: false, optional: true, required: false
  private _requestHeadersToAdds = new ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(this, "request_headers_to_adds", false);
  public get requestHeadersToAdds() {
    return this._requestHeadersToAdds;
  }
  public putRequestHeadersToAdds(value: ComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds[] | cdktn.IResolvable) {
    this._requestHeadersToAdds.internalValue = value;
  }
  public resetRequestHeadersToAdds() {
    this._requestHeadersToAdds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddsInput() {
    return this._requestHeadersToAdds.internalValue;
  }
}
export interface ComputeOrganizationSecurityPolicyRuleMatchConfig {
  /**
  * Source IP address range in CIDR format. Required for
  * INGRESS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#src_ip_ranges ComputeOrganizationSecurityPolicyRule#src_ip_ranges}
  */
  readonly srcIpRanges?: string[];
}

export function computeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference | ComputeOrganizationSecurityPolicyRuleMatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    src_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.srcIpRanges),
  }
}


export function computeOrganizationSecurityPolicyRuleMatchConfigToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference | ComputeOrganizationSecurityPolicyRuleMatchConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    src_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.srcIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleMatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpRanges = this._srcIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleMatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._srcIpRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._srcIpRanges = value.srcIpRanges;
    }
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
}
export interface ComputeOrganizationSecurityPolicyRuleMatchExpr {
  /**
  * Textual representation of an expression in Common Expression Language syntax. The application context of the containing message determines which well-known feature set of CEL is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#expression ComputeOrganizationSecurityPolicyRule#expression}
  */
  readonly expression: string;
}

export function computeOrganizationSecurityPolicyRuleMatchExprToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference | ComputeOrganizationSecurityPolicyRuleMatchExpr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expression: cdktn.stringToTerraform(struct!.expression),
  }
}


export function computeOrganizationSecurityPolicyRuleMatchExprToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference | ComputeOrganizationSecurityPolicyRuleMatchExpr): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleMatchExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleMatchExpr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}
export interface ComputeOrganizationSecurityPolicyRuleMatch {
  /**
  * A description of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#description ComputeOrganizationSecurityPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Preconfigured versioned expression. For organization security policy rules,
  * the only supported type is "SRC_IPS_V1".
  * **NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#versioned_expr ComputeOrganizationSecurityPolicyRule#versioned_expr}
  */
  readonly versionedExpr?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#config ComputeOrganizationSecurityPolicyRule#config}
  */
  readonly config?: ComputeOrganizationSecurityPolicyRuleMatchConfig;
  /**
  * expr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#expr ComputeOrganizationSecurityPolicyRule#expr}
  */
  readonly expr?: ComputeOrganizationSecurityPolicyRuleMatchExpr;
}

export function computeOrganizationSecurityPolicyRuleMatchToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchOutputReference | ComputeOrganizationSecurityPolicyRuleMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    versioned_expr: cdktn.stringToTerraform(struct!.versionedExpr),
    config: computeOrganizationSecurityPolicyRuleMatchConfigToTerraform(struct!.config),
    expr: computeOrganizationSecurityPolicyRuleMatchExprToTerraform(struct!.expr),
  }
}


export function computeOrganizationSecurityPolicyRuleMatchToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleMatchOutputReference | ComputeOrganizationSecurityPolicyRuleMatch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versioned_expr: {
      value: cdktn.stringToHclTerraform(struct!.versionedExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: computeOrganizationSecurityPolicyRuleMatchConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRuleMatchConfigList",
    },
    expr: {
      value: computeOrganizationSecurityPolicyRuleMatchExprToHclTerraform(struct!.expr),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRuleMatchExprList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRuleMatchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._versionedExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionedExpr = this._versionedExpr;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._versionedExpr = undefined;
      this._config.internalValue = undefined;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._versionedExpr = value.versionedExpr;
      this._config.internalValue = value.config;
      this._expr.internalValue = value.expr;
    }
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

  // versioned_expr - computed: false, optional: true, required: false
  private _versionedExpr?: string; 
  public get versionedExpr() {
    return this.getStringAttribute('versioned_expr');
  }
  public set versionedExpr(value: string) {
    this._versionedExpr = value;
  }
  public resetVersionedExpr() {
    this._versionedExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedExprInput() {
    return this._versionedExpr;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ComputeOrganizationSecurityPolicyRuleMatchConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // expr - computed: false, optional: true, required: false
  private _expr = new ComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: ComputeOrganizationSecurityPolicyRuleMatchExpr) {
    this._expr.internalValue = value;
  }
  public resetExpr() {
    this._expr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference {
    return new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference {
    return new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference {
    return new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
  /**
  * You can specify an exact match or a partial match by using a field operator and a field value.
  * Available options:
  * EQUALS: The operator matches if the field value equals the specified value.
  * STARTS_WITH: The operator matches if the field value starts with the specified value.
  * ENDS_WITH: The operator matches if the field value ends with the specified value.
  * CONTAINS: The operator matches if the field value contains the specified value.
  * EQUALS_ANY: The operator matches if the field value is any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#operator ComputeOrganizationSecurityPolicyRule#operator}
  */
  readonly operator: string;
  /**
  * A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.
  * The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#value ComputeOrganizationSecurityPolicyRule#value}
  */
  readonly value?: string;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference {
    return new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion {
  /**
  * A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.
  * If omitted, it refers to all the rule IDs under the WAF rule set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#target_rule_ids ComputeOrganizationSecurityPolicyRule#target_rule_ids}
  */
  readonly targetRuleIds?: string[];
  /**
  * Target WAF rule set to apply the preconfigured WAF exclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#target_rule_set ComputeOrganizationSecurityPolicyRule#target_rule_set}
  */
  readonly targetRuleSet: string;
  /**
  * request_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#request_cookie ComputeOrganizationSecurityPolicyRule#request_cookie}
  */
  readonly requestCookie?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktn.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#request_header ComputeOrganizationSecurityPolicyRule#request_header}
  */
  readonly requestHeader?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktn.IResolvable;
  /**
  * request_query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#request_query_param ComputeOrganizationSecurityPolicyRule#request_query_param}
  */
  readonly requestQueryParam?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktn.IResolvable;
  /**
  * request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#request_uri ComputeOrganizationSecurityPolicyRule#request_uri}
  */
  readonly requestUri?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktn.IResolvable;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target_rule_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.targetRuleIds),
    target_rule_set: cdktn.stringToTerraform(struct!.targetRuleSet),
    request_cookie: cdktn.listMapper(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToTerraform, true)(struct!.requestCookie),
    request_header: cdktn.listMapper(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_query_param: cdktn.listMapper(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToTerraform, true)(struct!.requestQueryParam),
    request_uri: cdktn.listMapper(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToTerraform, true)(struct!.requestUri),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target_rule_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.targetRuleIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_rule_set: {
      value: cdktn.stringToHclTerraform(struct!.targetRuleSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookie: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieToHclTerraform, true)(struct!.requestCookie),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList",
    },
    request_header: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList",
    },
    request_query_param: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamToHclTerraform, true)(struct!.requestQueryParam),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList",
    },
    request_uri: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriToHclTerraform, true)(struct!.requestUri),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRuleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleIds = this._targetRuleIds;
    }
    if (this._targetRuleSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRuleSet = this._targetRuleSet;
    }
    if (this._requestCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookie = this._requestCookie?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestQueryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQueryParam = this._requestQueryParam?.internalValue;
    }
    if (this._requestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetRuleIds = undefined;
      this._targetRuleSet = undefined;
      this._requestCookie.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestQueryParam.internalValue = undefined;
      this._requestUri.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetRuleIds = value.targetRuleIds;
      this._targetRuleSet = value.targetRuleSet;
      this._requestCookie.internalValue = value.requestCookie;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestQueryParam.internalValue = value.requestQueryParam;
      this._requestUri.internalValue = value.requestUri;
    }
  }

  // target_rule_ids - computed: false, optional: true, required: false
  private _targetRuleIds?: string[]; 
  public get targetRuleIds() {
    return this.getListAttribute('target_rule_ids');
  }
  public set targetRuleIds(value: string[]) {
    this._targetRuleIds = value;
  }
  public resetTargetRuleIds() {
    this._targetRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleIdsInput() {
    return this._targetRuleIds;
  }

  // target_rule_set - computed: false, optional: false, required: true
  private _targetRuleSet?: string; 
  public get targetRuleSet() {
    return this.getStringAttribute('target_rule_set');
  }
  public set targetRuleSet(value: string) {
    this._targetRuleSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleSetInput() {
    return this._targetRuleSet;
  }

  // request_cookie - computed: false, optional: true, required: false
  private _requestCookie = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(this, "request_cookie", false);
  public get requestCookie() {
    return this._requestCookie;
  }
  public putRequestCookie(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie[] | cdktn.IResolvable) {
    this._requestCookie.internalValue = value;
  }
  public resetRequestCookie() {
    this._requestCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookieInput() {
    return this._requestCookie.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader[] | cdktn.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_query_param - computed: false, optional: true, required: false
  private _requestQueryParam = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(this, "request_query_param", false);
  public get requestQueryParam() {
    return this._requestQueryParam;
  }
  public putRequestQueryParam(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam[] | cdktn.IResolvable) {
    this._requestQueryParam.internalValue = value;
  }
  public resetRequestQueryParam() {
    this._requestQueryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryParamInput() {
    return this._requestQueryParam.internalValue;
  }

  // request_uri - computed: false, optional: true, required: false
  private _requestUri = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }
  public putRequestUri(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri[] | cdktn.IResolvable) {
    this._requestUri.internalValue = value;
  }
  public resetRequestUri() {
    this._requestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri.internalValue;
  }
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList extends cdktn.ComplexList {
  public internalValue? : ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktn.IResolvable

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
  public get(index: number): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference {
    return new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig {
  /**
  * exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#exclusion ComputeOrganizationSecurityPolicyRule#exclusion}
  */
  readonly exclusion?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktn.IResolvable;
}

export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigToTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclusion: cdktn.listMapper(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToTerraform, true)(struct!.exclusion),
  }
}


export function computeOrganizationSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference | ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclusion: {
      value: cdktn.listMapperHcl(computeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionToHclTerraform, true)(struct!.exclusion),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusion.internalValue = value.exclusion;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(this, "exclusion", false);
  public get exclusion() {
    return this._exclusion;
  }
  public putExclusion(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion[] | cdktn.IResolvable) {
    this._exclusion.internalValue = value;
  }
  public resetExclusion() {
    this._exclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion.internalValue;
  }
}
export interface ComputeOrganizationSecurityPolicyRuleRedirectOptions {
  /**
  * Target for the redirect action. This is required if the type is EXTERNAL_302.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#target ComputeOrganizationSecurityPolicyRule#target}
  */
  readonly target?: string;
  /**
  * Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#type ComputeOrganizationSecurityPolicyRule#type}
  */
  readonly type: string;
}

export function computeOrganizationSecurityPolicyRuleRedirectOptionsToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference | ComputeOrganizationSecurityPolicyRuleRedirectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cdktn.stringToTerraform(struct!.target),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function computeOrganizationSecurityPolicyRuleRedirectOptionsToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference | ComputeOrganizationSecurityPolicyRuleRedirectOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleRedirectOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleRedirectOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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
export interface ComputeOrganizationSecurityPolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#create ComputeOrganizationSecurityPolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#delete ComputeOrganizationSecurityPolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#update ComputeOrganizationSecurityPolicyRule#update}
  */
  readonly update?: string;
}

export function computeOrganizationSecurityPolicyRuleTimeoutsToTerraform(struct?: ComputeOrganizationSecurityPolicyRuleTimeouts | cdktn.IResolvable): any {
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


export function computeOrganizationSecurityPolicyRuleTimeoutsToHclTerraform(struct?: ComputeOrganizationSecurityPolicyRuleTimeouts | cdktn.IResolvable): any {
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

export class ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeOrganizationSecurityPolicyRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ComputeOrganizationSecurityPolicyRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule google_compute_organization_security_policy_rule}
*/
export class ComputeOrganizationSecurityPolicyRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_organization_security_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeOrganizationSecurityPolicyRule to import
  * @param importFromId The id of the existing ComputeOrganizationSecurityPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeOrganizationSecurityPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_organization_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/compute_organization_security_policy_rule google_compute_organization_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeOrganizationSecurityPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeOrganizationSecurityPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_organization_security_policy_rule',
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
    this._action = config.action;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._policyId = config.policyId;
    this._preview = config.preview;
    this._priority = config.priority;
    this._headerAction.internalValue = config.headerAction;
    this._match.internalValue = config.match;
    this._preconfiguredWafConfig.internalValue = config.preconfiguredWafConfig;
    this._redirectOptions.internalValue = config.redirectOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // preview - computed: false, optional: true, required: false
  private _preview?: boolean | cdktn.IResolvable; 
  public get preview() {
    return this.getBooleanAttribute('preview');
  }
  public set preview(value: boolean | cdktn.IResolvable) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
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

  // header_action - computed: false, optional: true, required: false
  private _headerAction = new ComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(this, "header_action");
  public get headerAction() {
    return this._headerAction;
  }
  public putHeaderAction(value: ComputeOrganizationSecurityPolicyRuleHeaderAction) {
    this._headerAction.internalValue = value;
  }
  public resetHeaderAction() {
    this._headerAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new ComputeOrganizationSecurityPolicyRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ComputeOrganizationSecurityPolicyRuleMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // preconfigured_waf_config - computed: false, optional: true, required: false
  private _preconfiguredWafConfig = new ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(this, "preconfigured_waf_config");
  public get preconfiguredWafConfig() {
    return this._preconfiguredWafConfig;
  }
  public putPreconfiguredWafConfig(value: ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig) {
    this._preconfiguredWafConfig.internalValue = value;
  }
  public resetPreconfiguredWafConfig() {
    this._preconfiguredWafConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredWafConfigInput() {
    return this._preconfiguredWafConfig.internalValue;
  }

  // redirect_options - computed: false, optional: true, required: false
  private _redirectOptions = new ComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(this, "redirect_options");
  public get redirectOptions() {
    return this._redirectOptions;
  }
  public putRedirectOptions(value: ComputeOrganizationSecurityPolicyRuleRedirectOptions) {
    this._redirectOptions.internalValue = value;
  }
  public resetRedirectOptions() {
    this._redirectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectOptionsInput() {
    return this._redirectOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeOrganizationSecurityPolicyRuleTimeouts) {
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
      action: cdktn.stringToTerraform(this._action),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      policy_id: cdktn.stringToTerraform(this._policyId),
      preview: cdktn.booleanToTerraform(this._preview),
      priority: cdktn.numberToTerraform(this._priority),
      header_action: computeOrganizationSecurityPolicyRuleHeaderActionToTerraform(this._headerAction.internalValue),
      match: computeOrganizationSecurityPolicyRuleMatchToTerraform(this._match.internalValue),
      preconfigured_waf_config: computeOrganizationSecurityPolicyRulePreconfiguredWafConfigToTerraform(this._preconfiguredWafConfig.internalValue),
      redirect_options: computeOrganizationSecurityPolicyRuleRedirectOptionsToTerraform(this._redirectOptions.internalValue),
      timeouts: computeOrganizationSecurityPolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktn.stringToHclTerraform(this._action),
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
      policy_id: {
        value: cdktn.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktn.booleanToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktn.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_action: {
        value: computeOrganizationSecurityPolicyRuleHeaderActionToHclTerraform(this._headerAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeOrganizationSecurityPolicyRuleHeaderActionList",
      },
      match: {
        value: computeOrganizationSecurityPolicyRuleMatchToHclTerraform(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeOrganizationSecurityPolicyRuleMatchList",
      },
      preconfigured_waf_config: {
        value: computeOrganizationSecurityPolicyRulePreconfiguredWafConfigToHclTerraform(this._preconfiguredWafConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigList",
      },
      redirect_options: {
        value: computeOrganizationSecurityPolicyRuleRedirectOptionsToHclTerraform(this._redirectOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeOrganizationSecurityPolicyRuleRedirectOptionsList",
      },
      timeouts: {
        value: computeOrganizationSecurityPolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeOrganizationSecurityPolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
